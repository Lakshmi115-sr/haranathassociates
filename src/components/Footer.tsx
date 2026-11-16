import { Navigation } from 'lucide-react';
import CaIndiaLogo from './CaIndiaLogo';
import { OFFICE_MAPS_URL, firmEmail, firmPhone, secondaryEmail } from '../config/firmConfig';
import type { NavigateFn } from '../types';

export default function Footer({ navigateTo }: { navigateTo: NavigateFn }) {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 px-4 sm:px-6 border-t border-slate-800 mt-12">
      <div className="max-w-[96%] mx-auto grid grid-cols-1 md:grid-cols-12 gap-8">
        <div className="md:col-span-5 space-y-3">
          <div className="flex items-center gap-3">
            <CaIndiaLogo className="w-12 h-12" />
            <div>
              <div className="text-lg font-extrabold text-white tracking-tight">HARANATH & ASSOCIATES</div>
              <div className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
                Chartered Accountants • Practicing Since 2003
              </div>
            </div>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed pt-1">
            Led by <strong>CA. Haranath Babu A.V., FCA, DISA (ICAI), M.Com., MBA, LL.B.</strong> Fast and reliable service delivered with the utmost integrity.
          </p>
          <p className="text-[11px] text-slate-500 pt-1">
            Digital platform engineered by{' '}
            <a
              href="https://parasparatech.com"
              target="_blank"
              rel="noreferrer"
              className="text-blue-400 hover:text-white font-semibold transition-colors"
            >
              Paraspara Tech Solutions LLP (parasparatech.com)
            </a>
          </p>
        </div>

        <div className="md:col-span-3 space-y-2 text-xs">
          <div className="font-bold text-white uppercase tracking-wider mb-2">Quick Navigation</div>
          <button onClick={() => navigateTo('about')} className="block hover:text-white">About CA Haranath Babu</button>
          <button onClick={() => navigateTo('services')} className="block hover:text-white">Practice Areas</button>
          <button onClick={() => navigateTo('solutions')} className="block hover:text-white">Tax & GST Notice Solutions</button>
          <button onClick={() => navigateTo('knowledge', 'calculators')} className="block hover:text-white">Knowledge Bank</button>
          <button onClick={() => navigateTo('careers')} className="block hover:text-white">Careers</button>
          <button onClick={() => navigateTo('contact')} className="block hover:text-white">Contact Us</button>
        </div>

        <div className="md:col-span-4 space-y-2.5 text-xs">
          <div className="font-bold text-white uppercase tracking-wider mb-2">Headquarters & Map Directions</div>
          <p className="text-slate-400">
            # 6-7-36, No.2, 3rd Floor, V.S.R. Complex, Beside Paramount Footwear, 7/1 Arundelpet, Guntur, AP – 522 002.
          </p>
          <p className="text-white font-semibold">{firmPhone}</p>
          <p className="text-slate-300">{firmEmail} • {secondaryEmail}</p>
          <div className="pt-1">
            <a
              href={OFFICE_MAPS_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-blue-400 hover:text-white font-bold"
            >
              <Navigation className="w-3.5 h-3.5" />
              Get Directions on Google Maps →
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
