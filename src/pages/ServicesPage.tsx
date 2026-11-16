import { CheckCircle2 } from 'lucide-react';
import { SERVICE_CATEGORIES } from '../data/firmData';

export default function ServicesPage({ onWhatsApp }: { onWhatsApp: (topic?: string) => void }) {
  return (
    <section className="max-w-[96%] mx-auto px-4 sm:px-6 py-10">
      <div className="max-w-3xl mb-8">
        <div className="text-xs font-bold uppercase tracking-wider text-blue-800 mb-1">
          Practice Areas & Specializations • Online Consultancy Available
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold text-[#003366]">Comprehensive Professional Services</h1>
        <p className="text-xs sm:text-sm text-slate-600 mt-1">
          Our Unique Selling Proposition (USP): Fast and reliable service delivered with the utmost integrity.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {SERVICE_CATEGORIES.map((category) => {
          const Icon = category.icon;
          return (
            <div key={category.id} className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-[#003366]">{category.title}</h2>
                    <p className="text-xs text-slate-500">{category.subtitle}</p>
                  </div>
                </div>
                <ul className="space-y-2.5 mt-4 pt-4 border-t border-slate-100">
                  {category.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-blue-800 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100">
                <button
                  onClick={() => onWhatsApp(category.title)}
                  className="w-full bg-slate-900 hover:bg-blue-900 text-white text-xs font-semibold py-2.5 rounded-xl transition-colors"
                >
                  Request Consultation for {category.title}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
