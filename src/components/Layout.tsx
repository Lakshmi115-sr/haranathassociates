import type { ReactNode } from 'react';
import { Mail, MapPin, MessageSquare, Phone, Shield } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';
import { OFFICE_MAPS_URL, firmEmail, firmPhone, primaryTel } from '../config/firmConfig';
import type { NavigateFn, TabType } from '../types';

interface Props {
  activeTab: TabType;
  navigateTo: NavigateFn;
  onWhatsApp: (topic?: string) => void;
  children: ReactNode;
}

export default function Layout({ activeTab, navigateTo, onWhatsApp, children }: Props) {
  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans">
      <div className="bg-slate-900 text-slate-200 text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-[96%] mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 font-semibold text-white">
              <Shield className="w-3.5 h-3.5 text-blue-400" />
              ICAI Registered Chartered Accountancy Practice • Practicing Since 2003
            </span>
            <span className="hidden md:inline text-slate-500">|</span>
            <a
              href={OFFICE_MAPS_URL}
              target="_blank"
              rel="noreferrer"
              className="hidden md:inline-flex items-center gap-1 text-slate-300 hover:text-white transition-colors"
            >
              <MapPin className="w-3 h-3 text-blue-400" />
              # 6-7-36, 3rd Floor, VSR Complex, 7/1 Arundelpet, Guntur (Get Directions)
            </a>
          </div>
          <div className="flex items-center gap-4">
            <a href={`tel:${primaryTel}`} className="hover:text-white flex items-center gap-1 transition-colors font-semibold">
              <Phone className="w-3 h-3 text-blue-400" />
              {firmPhone}
            </a>
            <span className="text-slate-600">|</span>
            <a href={`mailto:${firmEmail}`} className="hover:text-white hidden sm:flex items-center gap-1 transition-colors">
              <Mail className="w-3 h-3 text-blue-400" />
              {firmEmail}
            </a>
          </div>
        </div>
      </div>

      <Navbar activeTab={activeTab} navigateTo={navigateTo} />

      <main className="flex-1">{children}</main>

      <Footer navigateTo={navigateTo} />

      <div className="fixed bottom-5 right-5 z-40">
        <button
          onClick={() => onWhatsApp()}
          className="bg-slate-900 hover:bg-blue-900 text-white text-xs font-semibold px-4 py-3 rounded-full shadow-lg border border-slate-700 flex items-center gap-2 transition-colors"
        >
          <MessageSquare className="w-4 h-4 text-blue-400" />
          Consult CA Desk
        </button>
      </div>
    </div>
  );
}
