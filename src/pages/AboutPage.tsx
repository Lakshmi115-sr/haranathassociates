import { useState } from 'react';
import type { FormEvent } from 'react';
import { ExternalLink, Navigation, UserCheck } from 'lucide-react';
import CaIndiaLogo from '../components/CaIndiaLogo';
import OfficeMapEmbed from '../components/OfficeMapEmbed';
import FirmProfileSection from '../components/FirmProfileSection';
import { OFFICE_MAPS_URL, whatsappNumber } from '../config/firmConfig';

export default function AboutPage() {
  const [clientName, setClientName] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [clientNotes, setClientNotes] = useState('');

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    const message = `*New Consultation Request — Haranath & Associates*\n\n*Name:* ${clientName}\n*Phone:* ${clientPhone}\n*Preferred Office:* Guntur\n*Brief Details:* ${clientNotes || 'Requesting appointment with CA Haranath Babu'}`;
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section className="max-w-[96%] mx-auto px-4 sm:px-6 py-10 space-y-12">
      <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-4 bg-slate-900 text-white rounded-2xl p-6 text-center">
            <div className="w-32 h-32 mx-auto rounded-2xl bg-gradient-to-b from-slate-700 to-slate-800 border-2 border-blue-400/60 shadow-md flex flex-col items-center justify-center mb-4 overflow-hidden relative">
              <img
                src="/hara1.jpeg"
                alt="CA Haranath Babu"
                className="w-full h-full object-cover absolute inset-0 z-10"
                onError={(e) => {
                  if (!e.currentTarget.src.includes('/photos/')) {
                    e.currentTarget.src = '/photos/hara1.jpeg';
                  } else {
                    e.currentTarget.style.display = 'none';
                  }
                }}
              />
              <UserCheck className="w-10 h-10 text-blue-300/90 mb-1" />
              <span className="text-xs font-bold text-slate-200">CA Haranath Babu</span>
            </div>
            <h2 className="text-xl font-bold">CA. Haranath Babu A.V.</h2>
            <p className="text-xs font-semibold text-blue-300 mt-1">FCA, DISA (ICAI), M.Com., MBA, LL.B.</p>
            <div className="mt-4 pt-4 border-t border-slate-800 text-left space-y-2 text-xs text-slate-300">
              <div><strong>Practicing Since:</strong> 2003 Onwards</div>
              <div><strong>Fellowship Status:</strong> Fellow Chartered Accountant (FCA)</div>
              <div><strong>Systems Audit:</strong> DISA Certified (ICAI)</div>
              <div><strong>Legal Qualification:</strong> Bachelor of Laws (LL.B.)</div>
            </div>
          </div>

          <div className="lg:col-span-8 space-y-4">
            <div className="flex items-center gap-3">
              <CaIndiaLogo className="w-11 h-11" />
              <div className="text-xs font-bold uppercase tracking-wider text-blue-800">About Haranath & Associates</div>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-[#003366]">
              Practicing Since 2003 in Taxation, GST Litigation, Audit & Financial Advisory
            </h1>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              Practicing continuously since <strong>2003</strong>, <strong>CA. Haranath Babu A.V.</strong> and <strong>Haranath & Associates</strong> serve individuals, entrepreneurs, MSMEs, and corporate institutions with fast, reliable service delivered with the utmost integrity.
            </p>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              With qualifications in <strong>FCA, DISA (ICAI), M.Com., MBA, and LL.B.</strong>, CA Haranath Babu combines deep statutory accounting command with legal interpretation, bank loan DPR preparation, visa financial certification, and information systems audit expertise. <strong>Online consultancy is also available.</strong>
            </p>
            <div className="pt-2">
              <a
                href={OFFICE_MAPS_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-blue-700 hover:bg-slate-900 text-white text-xs font-bold px-5 py-3 rounded-xl transition-colors shadow-sm"
              >
                <Navigation className="w-4 h-4" />
                Get Directions to Haranath & Associates Office
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <FirmProfileSection />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-6 bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm">
          <h2 className="text-xl font-bold text-[#003366] mb-4">Book a Consultation with CA Haranath Babu</h2>
          <form onSubmit={handleFormSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input type="text" required value={clientName} onChange={(e) => setClientName(e.target.value)} placeholder="Your Full Name / Business Name *" className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-xl" />
              <input type="tel" required value={clientPhone} onChange={(e) => setClientPhone(e.target.value)} placeholder="Mobile Number *" className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-xl" />
            </div>
            <textarea rows={3} value={clientNotes} onChange={(e) => setClientNotes(e.target.value)} placeholder="Briefly describe your Income Tax, GST, Audit, Visa Certification, or Bank Finance requirement..." className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-xl" />
            <button type="submit" className="w-full bg-slate-900 hover:bg-blue-900 text-white font-semibold text-sm px-6 py-3 rounded-xl transition-colors">
              Confirm & Send Consultation Request
            </button>
          </form>
        </div>

        <div className="lg:col-span-6 bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm">
          <div className="p-5 bg-slate-900 text-white flex items-center justify-between gap-3">
            <div>
              <div className="text-xs font-bold text-blue-300 uppercase">Haranath & Associates</div>
              <div className="text-sm font-bold"># 6-7-36, 3rd Floor, VSR Complex, 7/1 Arundelpet, Guntur</div>
            </div>
            <a href={OFFICE_MAPS_URL} target="_blank" rel="noreferrer" className="bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold px-3.5 py-2 rounded-xl inline-flex items-center gap-1.5 shrink-0">
              <Navigation className="w-3.5 h-3.5" />
              Get Directions
            </a>
          </div>
          <OfficeMapEmbed />
        </div>
      </div>
    </section>
  );
}
