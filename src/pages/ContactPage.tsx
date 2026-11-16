import { Clock, ExternalLink, Mail, MapPin, MessageSquare, Navigation, Phone, Share2 } from 'lucide-react';
import OfficeMapEmbed from '../components/OfficeMapEmbed';
import { SOCIAL_MEDIA_CHANNELS } from '../data/firmData';
import {
  OFFICE_MAPS_URL, branchOfficeLines, firmEmail, firmPhone, headOfficeLines, officeHours, primaryTel, secondaryEmail
} from '../config/firmConfig';

export default function ContactPage({ onWhatsApp }: { onWhatsApp: (topic?: string) => void }) {
  return (
    <section className="max-w-[96%] mx-auto px-4 sm:px-6 py-10 space-y-8">
      <div>
        <div className="text-xs font-bold uppercase tracking-wider text-blue-800 mb-1">Get in Touch • Online Consultancy Available</div>
        <h1 className="text-2xl sm:text-3xl font-bold text-[#003366]">Contact Information</h1>
        <p className="text-xs sm:text-sm text-slate-600 mt-1">Visit our offices in Guntur and Vijayawada, call us, or reach us on WhatsApp.</p>
      </div>

      <div className="bg-white border-2 border-slate-200 rounded-3xl overflow-hidden shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-12">
          <div className="lg:col-span-7 order-2 lg:order-1">
            <OfficeMapEmbed />
          </div>

          <div className="lg:col-span-5 order-1 lg:order-2 p-6 sm:p-8 bg-slate-900 text-white space-y-4">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">HARANATH & ASSOCIATES</h2>
              <p className="text-xs font-semibold text-blue-300 uppercase tracking-wider mt-0.5">Chartered Accountants</p>
            </div>

            <div className="bg-slate-800 border border-slate-700 rounded-2xl p-4 flex items-start gap-3">
              <MapPin className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
              <div>
                <div className="text-sm font-bold text-white">Head Office — Guntur</div>
                <p className="text-xs text-slate-300 leading-relaxed mt-1">{headOfficeLines.join(' ')}</p>
              </div>
            </div>

            <div className="bg-slate-800 border border-slate-700 rounded-2xl p-4 flex items-start gap-3">
              <MapPin className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
              <div>
                <div className="text-sm font-bold text-white">Branch Office — Vijayawada</div>
                <p className="text-xs text-slate-300 leading-relaxed mt-1">{branchOfficeLines.join(' ')}</p>
              </div>
            </div>

            <div className="bg-slate-800 border border-slate-700 rounded-2xl p-4 flex items-start gap-3">
              <Phone className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
              <div>
                <div className="text-sm font-bold text-white">Contact No.</div>
                <a href={`tel:${primaryTel}`} className="text-xs text-slate-300 hover:text-white mt-1 block">{firmPhone}</a>
              </div>
            </div>

            <div className="bg-slate-800 border border-slate-700 rounded-2xl p-4 flex items-start gap-3">
              <Mail className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
              <div>
                <div className="text-sm font-bold text-white">Email</div>
                <a href={`mailto:${firmEmail}`} className="text-xs text-slate-300 hover:text-white mt-1 block break-all">{firmEmail}</a>
                <a href={`mailto:${secondaryEmail}`} className="text-xs text-slate-300 hover:text-white block break-all">{secondaryEmail}</a>
              </div>
            </div>

            <div className="bg-slate-800 border border-slate-700 rounded-2xl p-4 flex items-start gap-3">
              <Clock className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
              <div>
                <div className="text-sm font-bold text-white">Office Hours</div>
                <p className="text-xs text-slate-300 mt-1">{officeHours}</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 pt-1">
              <a href={OFFICE_MAPS_URL} target="_blank" rel="noreferrer" className="bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs py-3 px-5 rounded-xl inline-flex items-center gap-2 transition-colors">
                <Navigation className="w-4 h-4" />
                Get Directions
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <button onClick={() => onWhatsApp('Contact enquiry from website')} className="bg-slate-800 hover:bg-slate-700 border border-slate-600 text-white font-bold text-xs py-3 px-5 rounded-xl inline-flex items-center gap-2 transition-colors">
                <MessageSquare className="w-4 h-4 text-blue-400" />
                Chat on WhatsApp
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8">
        <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-800 mb-4">
          <Share2 className="w-3.5 h-3.5" />
          Social Media
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {SOCIAL_MEDIA_CHANNELS.map((social) => (
            <a
              key={social.id}
              href={social.url}
              target="_blank"
              rel="noreferrer"
              className={`group bg-white rounded-2xl border border-slate-200 p-4 transition-all shadow-sm hover:shadow-lg flex items-center gap-3 ${social.bgHover}`}
            >
              <div className={`w-11 h-11 rounded-xl ${social.iconBg} flex items-center justify-center shrink-0`}>
                {social.svgPath ? (
                  <svg className="w-6 h-6 text-white fill-current" viewBox="0 0 24 24" aria-hidden="true"><path d={social.svgPath} /></svg>
                ) : (
                  <MessageSquare className="w-6 h-6 text-white" />
                )}
              </div>
              <div className="min-w-0">
                <div className="text-sm font-extrabold text-slate-900">{social.name}</div>
                <div className="text-[11px] font-semibold text-blue-700 break-all">{social.handle}</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
