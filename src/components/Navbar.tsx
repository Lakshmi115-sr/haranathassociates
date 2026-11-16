import { useState } from 'react';
import { Calculator, ChevronDown, ExternalLink, FileText, BookOpen, Menu, Scale, Search, Wrench, X } from 'lucide-react';
import CaIndiaLogo from './CaIndiaLogo';
import type { KnowledgeSubTab, NavigateFn, TabType } from '../types';

interface Props {
  activeTab: TabType;
  navigateTo: NavigateFn;
}

const NAV_ITEMS: { id: TabType; label: string }[] = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About Firm' },
  { id: 'services', label: 'Practice Areas' },
  { id: 'solutions', label: 'Client Solutions' }
];

const EXTRA_ITEMS: { id: TabType; label: string }[] = [
  { id: 'careers', label: 'Careers' },
  { id: 'contact', label: 'Contact Us' }
];

const KB_ITEMS: { id: KnowledgeSubTab; label: string; Icon: typeof Calculator }[] = [
  { id: 'calculators', label: '1. Tax Calculators', Icon: Calculator },
  { id: 'bulletins', label: '2. Bulletins Search', Icon: Search },
  { id: 'forms', label: '3. Statutory Forms', Icon: FileText },
  { id: 'links', label: '4. Quick Links', Icon: ExternalLink },
  { id: 'acts', label: '5. Bare Acts', Icon: BookOpen },
  { id: 'rules', label: '6. Rules', Icon: Scale },
  { id: 'utilities', label: '7. Tax Utilities', Icon: Wrench }
];

export default function Navbar({ activeTab, navigateTo }: Props) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [kbDropdownOpen, setKbDropdownOpen] = useState(false);

  const go: NavigateFn = (tab, sub) => {
    setMobileMenuOpen(false);
    setKbDropdownOpen(false);
    navigateTo(tab, sub);
  };

  return (
    <div className="sticky top-0 z-50 bg-white/95 backdrop-blur-md py-2.5 px-3 sm:px-6 border-b border-slate-100">
      <div className="max-w-[96%] mx-auto bg-white shadow-xl rounded-full border border-slate-200 px-4 sm:px-6 py-2.5 flex items-center justify-between gap-2">
        <div onClick={() => go('home')} className="flex items-center gap-3 cursor-pointer group shrink-0">
          <CaIndiaLogo className="w-11 h-11 sm:w-12 sm:h-12" />
          <div>
            <div className="font-extrabold text-base sm:text-xl text-[#003366] tracking-tight leading-none">
              HARANATH & ASSOCIATES
            </div>
            <div className="text-[11px] sm:text-xs font-bold text-[#046A38] tracking-widest uppercase mt-1">
              CHARTERED ACCOUNTANTS
            </div>
          </div>
        </div>

        <nav className="hidden lg:flex items-center gap-1">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => go(item.id)}
              className={`px-2.5 xl:px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                activeTab === item.id ? 'bg-slate-900 text-white' : 'text-slate-700 hover:bg-slate-100'
              }`}
            >
              {item.label}
            </button>
          ))}

          <div className="relative">
            <button
              onClick={() => setKbDropdownOpen(!kbDropdownOpen)}
              className={`px-2.5 xl:px-3.5 py-1.5 rounded-full text-xs font-semibold inline-flex items-center gap-1 transition-all ${
                activeTab === 'knowledge' ? 'bg-slate-900 text-white' : 'text-slate-700 hover:bg-slate-100'
              }`}
            >
              Knowledge Bank
              <ChevronDown className="w-3.5 h-3.5" />
            </button>

            {kbDropdownOpen && (
              <div className="absolute left-0 mt-2 w-60 bg-white rounded-2xl shadow-xl border border-slate-200 py-2 z-50">
                {KB_ITEMS.map(({ id, label, Icon }) => (
                  <button
                    key={id}
                    onClick={() => go('knowledge', id)}
                    className="w-full text-left px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 flex items-center gap-2.5"
                  >
                    <Icon className="w-4 h-4 text-blue-700" />
                    {label}
                  </button>
                ))}
              </div>
            )}
          </div>

          {EXTRA_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => go(item.id)}
              className={`px-2.5 xl:px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                activeTab === item.id ? 'bg-slate-900 text-white' : 'text-slate-700 hover:bg-slate-100'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>


        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-1.5 rounded-full text-slate-700 hover:bg-slate-100"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden max-w-[96%] mx-auto mt-2 bg-white rounded-2xl shadow-xl border border-slate-200 p-4 flex flex-col gap-2">
          <button onClick={() => go('home')} className="text-left px-3 py-2 rounded-lg text-sm font-semibold hover:bg-slate-50">Home</button>
          <button onClick={() => go('about')} className="text-left px-3 py-2 rounded-lg text-sm font-semibold hover:bg-slate-50">About Firm & Office Location Map</button>
          <button onClick={() => go('services')} className="text-left px-3 py-2 rounded-lg text-sm font-semibold hover:bg-slate-50">Practice Areas</button>
          <button onClick={() => go('solutions')} className="text-left px-3 py-2 rounded-lg text-sm font-semibold hover:bg-slate-50">Client Solutions (Notices, GST, Finance)</button>
          <button onClick={() => go('knowledge', 'calculators')} className="text-left px-3 py-2 rounded-lg text-sm font-semibold hover:bg-slate-50">Knowledge Bank</button>
          <button onClick={() => go('careers')} className="text-left px-3 py-2 rounded-lg text-sm font-semibold hover:bg-slate-50">Careers</button>
          <button onClick={() => go('contact')} className="text-left px-3 py-2 rounded-lg text-sm font-semibold hover:bg-slate-50">Contact Us</button>
        </div>
      )}
    </div>
  );
}
