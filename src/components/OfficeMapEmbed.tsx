import { Navigation } from 'lucide-react';
import CaIndiaLogo from './CaIndiaLogo';
import { OFFICE_EMBED_MAP_URL, OFFICE_MAPS_URL } from '../config/firmConfig';

export default function OfficeMapEmbed() {
  return (
    <div className="relative min-h-[340px] bg-slate-100 h-full">
      <iframe
        title="Haranath & Associates Exact Office Coordinates"
        src={OFFICE_EMBED_MAP_URL}
        className="w-full h-full min-h-[340px] border-0"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
      <div className="absolute top-3 left-3 right-3 sm:right-auto sm:max-w-sm bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-slate-200">
        <div className="flex items-start gap-3">
          <CaIndiaLogo className="w-11 h-11" />
          <div>
            <div className="text-xs sm:text-sm font-extrabold text-[#003366]">HARANATH & ASSOCIATES</div>
            <div className="text-[11px] font-bold text-[#046A38]"># 6-7-36, 3rd Floor, VSR Complex</div>
            <div className="text-[11px] text-slate-600 mt-0.5">7/1 Arundelpet, Guntur, AP – 522 002</div>
          </div>
        </div>
      </div>
      <a
        href={OFFICE_MAPS_URL}
        target="_blank"
        rel="noreferrer"
        className="absolute bottom-4 right-4 bg-slate-900/95 hover:bg-blue-800 text-white text-xs font-bold px-4 py-2.5 rounded-xl shadow-lg border border-slate-700 inline-flex items-center gap-2 transition-colors"
      >
        <Navigation className="w-3.5 h-3.5 text-blue-400" />
        Get Directions to Haranath & Associates →
      </a>
    </div>
  );
}
