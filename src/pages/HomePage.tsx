import { useMemo, useState } from 'react';
import {
  AlertCircle, ArrowRight, Award, Calendar, CheckCircle2, ChevronRight, Clock, ExternalLink,
  Lock, Mail, MapPin, MessageSquare, Navigation, Phone, Scale, Share2, UserCheck
} from 'lucide-react';
import CaIndiaLogo from '../components/CaIndiaLogo';
import OfficeMapEmbed from '../components/OfficeMapEmbed';
import { CLIENT_PROBLEMS, SERVICE_CATEGORIES, SOCIAL_MEDIA_CHANNELS } from '../data/firmData';
import { generateUpcomingComplianceDates } from '../utils/compliance';
import { OFFICE_MAPS_URL, firmEmail, firmPhone, secondaryEmail } from '../config/firmConfig';
import type { NavigateFn, ProblemSolution } from '../types';

interface Props {
  navigateTo: NavigateFn;
  openProblemPage: (p: ProblemSolution) => void;
  onWhatsApp: (topic?: string) => void;
}

export default function HomePage({ navigateTo, openProblemPage, onWhatsApp }: Props) {
  const [calendarCategoryFilter, setCalendarCategoryFilter] = useState<string>('All');
  const [showAllDeadlines, setShowAllDeadlines] = useState(false);

  const upcomingDeadlines = useMemo(() => generateUpcomingComplianceDates(), []);

  const filteredDeadlines = useMemo(() => {
    const list =
      calendarCategoryFilter === 'All'
        ? upcomingDeadlines
        : upcomingDeadlines.filter((d) => d.category === calendarCategoryFilter);
    return showAllDeadlines ? list : list.slice(0, 6);
  }, [upcomingDeadlines, calendarCategoryFilter, showAllDeadlines]);

  return (
    <div>
      {/* HERO */}
      <section className="max-w-[96%] mx-auto px-4 sm:px-6 pt-6 pb-10">
        <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-10 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7 flex flex-col justify-center space-y-5">
              <div className="flex items-center gap-4 pb-5 border-b border-slate-200">
                <CaIndiaLogo className="w-16 h-16 sm:w-20 sm:h-20 shadow-sm rounded-2xl" />
                <div>
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#003366] tracking-tight leading-none">
                    HARANATH <span className="text-amber-600">&</span> ASSOCIATES
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-[#046A38] tracking-[0.2em] uppercase mt-1.5">
                    CHARTERED ACCOUNTANTS
                  </div>
                  <div className="text-xs font-semibold text-slate-600 mt-1">
                    Practicing Since 2003 • Guntur & Vijayawada • Online Consultancy Available
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                  Your Business. Your Taxation. <span className="text-blue-800">Our Expertise.</span>
                </h1>
                <p className="text-base sm:text-lg font-medium text-slate-700 leading-relaxed">
                  Trusted Chartered Accountants for Income Tax, GST, Auditing, Bank Loan Project Reports (DPR), Visa Financial Certification, Business Advisory and Tax Litigation.
                </p>
                <p className="text-xs sm:text-sm font-bold text-blue-900 bg-blue-50 border border-blue-200 px-3.5 py-2 rounded-xl inline-block">
                  Our USP: Fast and reliable service delivered with the utmost integrity.
                </p>
              </div>

              <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-blue-800 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-extrabold uppercase tracking-wider text-[#003366]">Guntur Head Office Address & Location</div>
                    <div className="text-xs sm:text-sm font-semibold text-slate-800 mt-0.5">
                      # 6-7-36, No.2, 3rd Floor, V.S.R. Complex, 7/1, Arundelpet, Guntur – 522 002, A.P.
                    </div>
                    <div className="text-xs font-bold text-slate-600 mt-1">Phone: {firmPhone} • Email: {firmEmail}</div>
                  </div>
                </div>
                <a href={OFFICE_MAPS_URL} target="_blank" rel="noreferrer" className="bg-blue-800 hover:bg-slate-900 text-white text-xs font-bold px-4 py-2.5 rounded-xl inline-flex items-center justify-center gap-1.5 shrink-0 transition-colors shadow-sm">
                  <Navigation className="w-3.5 h-3.5" />
                  Google Maps
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
                <div className="bg-slate-900 text-white p-6 border-b border-slate-200 flex items-center gap-4">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-b from-slate-700 to-slate-800 border-2 border-blue-400/60 shadow-md overflow-hidden shrink-0 relative flex flex-col items-center justify-center">
                    <img
                      src="/hara2.jpeg"
                      alt="CA Haranath Babu"
                      className="w-full h-full object-cover absolute inset-0 z-10"
                      onError={(e) => {
                        if (!e.currentTarget.src.includes('/photos/')) {
                          e.currentTarget.src = '/photos/hara2.jpeg';
                        } else {
                          e.currentTarget.style.display = 'none';
                        }
                      }}
                    />
                    <UserCheck className="w-8 h-8 text-blue-300/90 mb-0.5" />
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-300">FCA Photo</span>
                  </div>
                  <div>
                    <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-blue-900/60 border border-blue-400/30 text-blue-200 text-[11px] font-semibold mb-1.5">
                      Senior FCA Desk • Since 2003
                    </div>
                    <h2 className="text-xl font-bold text-white tracking-tight">CA. Haranath Babu A.V.</h2>
                    <p className="text-xs font-bold text-blue-300 mt-1">FCA, DISA (ICAI), M.Com., MBA, LL.B.</p>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Practicing since <strong>2003</strong>, CA Haranath Babu brings multidisciplinary command across Direct Tax Litigation, GST Advisory, Bank Loan Project Reports (DPR), Visa Financial Certification, and Corporate Audits.
                  </p>
                  <div className="space-y-2.5 text-xs text-slate-700">
                    {[
                      'Income Tax Scrutiny, CIT(A), ITAT & GST Audits/Appeals',
                      'Bank Loan Project Reports (DPR), Visa Certification & Business Expansion',
                      'Wealth Maximization, Tax Planning & Life/Health/Accidental Insurance Advisory'
                    ].map((t) => (
                      <div key={t} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-blue-800 shrink-0 mt-0.5" />
                        <span>{t}</span>
                      </div>
                    ))}
                  </div>
                  <div className="pt-3 flex items-center justify-between border-t border-slate-100">
                    <button onClick={() => navigateTo('about')} className="text-xs font-bold text-blue-800 hover:text-slate-900 inline-flex items-center gap-1">
                      View Founder Profile
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                    <button onClick={() => onWhatsApp('Direct Consultation with CA Haranath Babu')} className="text-xs font-semibold bg-slate-900 hover:bg-blue-800 text-white px-3.5 py-2 rounded-xl transition-colors">
                      Consult on WhatsApp
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMPLIANCE CALENDAR */}
      <section id="frontpage-compliance-calendar" className="max-w-[96%] mx-auto px-4 sm:px-6 pb-12">
        <div className="bg-white border-2 border-slate-900 rounded-3xl p-6 sm:p-8 shadow-sm">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 pb-6 border-b border-slate-200">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-900 text-xs font-bold uppercase tracking-wider mb-2">
                <Calendar className="w-3.5 h-3.5 text-blue-800" />
                Live Auto-Updating Statutory Compliance Calendar
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#003366] tracking-tight">Upcoming Income Tax, GST, TDS & Audit Deadlines</h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">Automatically rolls over every month and quarter to display upcoming statutory due dates.</p>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {['All', 'GST', 'Income Tax & TDS', 'Annual & Audit', 'Labour & ROC'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setCalendarCategoryFilter(cat)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
                    calendarCategoryFilter === cat ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
            {filteredDeadlines.map((item) => {
              const isUrgent = item.daysLeft <= 7;
              return (
                <div
                  key={item.id}
                  className={`rounded-2xl border p-5 flex flex-col justify-between transition-all ${
                    isUrgent ? 'bg-amber-50/40 border-amber-300 shadow-sm' : 'bg-slate-50/70 border-slate-200 hover:border-blue-800'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <div className="bg-slate-900 text-white px-3 py-1.5 rounded-xl text-xs font-bold tracking-wide flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-blue-400" />
                        {item.exactDateStr}
                      </div>
                      <span
                        className={`text-[11px] font-bold px-2.5 py-1 rounded-full ${
                          item.daysLeft === 0
                            ? 'bg-red-600 text-white'
                            : item.daysLeft <= 7
                            ? 'bg-amber-100 text-amber-900 border border-amber-300'
                            : 'bg-blue-100 text-blue-900'
                        }`}
                      >
                        {item.daysLeft === 0 ? 'Due Today!' : item.daysLeft === 1 ? 'Due Tomorrow' : `In ${item.daysLeft} Days`}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-[11px] font-bold text-blue-800 mb-1.5">
                      <span>{item.category}</span>
                      <span>•</span>
                      <span className="bg-white border border-slate-200 px-2 py-0.5 rounded text-slate-700">{item.formCode}</span>
                    </div>
                    <h3 className="text-sm sm:text-base font-bold text-[#003366] leading-snug">{item.title}</h3>
                    <p className="text-xs text-slate-600 mt-2 leading-relaxed">{item.description}</p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-200/80 space-y-2.5">
                    <div className="text-[11px] text-slate-500 flex items-start gap-1.5">
                      <AlertCircle className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                      <span>{item.penaltyNote}</span>
                    </div>
                    <button
                      onClick={() => onWhatsApp(`Filing Assistance for ${item.title} (Due on ${item.exactDateStr})`)}
                      className="w-full bg-white hover:bg-slate-900 hover:text-white text-slate-900 border border-slate-300 text-xs font-bold py-2 rounded-xl transition-colors flex items-center justify-center gap-1.5"
                    >
                      File via CA Desk
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-6 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
            <span className="text-xs text-slate-500">Automatically synced with monthly & annual statutory compliance schedules.</span>
            <button onClick={() => setShowAllDeadlines(!showAllDeadlines)} className="text-xs font-bold text-blue-800 hover:text-slate-900 inline-flex items-center gap-1">
              {showAllDeadlines ? 'Show Top 6 Immediate Deadlines' : `View All ${upcomingDeadlines.length} Upcoming Exact Dates`}
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* PROBLEM-FIRST */}
      <section className="max-w-[96%] mx-auto px-4 sm:px-6 py-10 border-t border-slate-100">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-blue-800 mb-2">Problem-Focused Advisory • Online Consultancy Available</div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#003366] tracking-tight">Identify Your Requirement & Consult Our Desk</h2>
            <p className="text-sm text-slate-600 mt-1">Click any scenario below to open our dedicated resolution process and required document checklist.</p>
          </div>
          <button onClick={() => navigateTo('solutions')} className="text-xs font-bold text-blue-800 hover:text-slate-900 inline-flex items-center gap-1 shrink-0">
            View All Client Advisory Guides
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {CLIENT_PROBLEMS.map((item) => (
            <div
              key={item.id}
              onClick={() => openProblemPage(item)}
              className="group bg-white rounded-2xl border border-slate-200 hover:border-blue-800 p-6 transition-all shadow-sm hover:shadow-md cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-blue-800 bg-blue-50 px-3 py-1 rounded-full">{item.category}</span>
                  <span className="text-xs font-semibold text-slate-400 group-hover:text-blue-800 inline-flex items-center gap-1 transition-colors">
                    Dedicated Guide
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-[#003366] group-hover:text-blue-800 transition-colors mb-2">&ldquo;{item.question}&rdquo;</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{item.shortDesc}</p>
              </div>
              <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between gap-2">
                <span className="text-[11px] font-medium text-slate-500">{item.statutorySections}</span>
                <span className="text-xs font-bold text-slate-900 group-hover:text-blue-800 inline-flex items-center gap-1 shrink-0">
                  Consult Partner
                  <ChevronRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PRACTICE AREAS */}
      <section className="bg-slate-50 border-y border-slate-200 py-14">
        <div className="max-w-[96%] mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mb-10">
            <div className="text-xs font-bold uppercase tracking-wider text-blue-800 mb-2">Comprehensive Professional Services • Online Consultancy Also Available</div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#003366] tracking-tight">Specialized Expertise Across Taxation, GST, DPR, Visa Certification & Advisory</h2>
            <p className="text-sm text-slate-600 mt-2">Fast and reliable service delivered with the utmost integrity across all 11 core practice verticals.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SERVICE_CATEGORIES.map((category) => {
              const Icon = category.icon;
              return (
                <div key={category.id} className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-7 shadow-sm flex flex-col justify-between">
                  <div>
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-11 h-11 rounded-xl bg-slate-900 text-white flex items-center justify-center shrink-0">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-[#003366]">{category.title}</h3>
                        <p className="text-xs text-slate-500 mt-0.5">{category.subtitle}</p>
                      </div>
                    </div>
                    <ul className="space-y-2.5 mt-4 border-t border-slate-100 pt-4">
                      {category.items.map((subItem, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-blue-800 shrink-0 mt-0.5" />
                          <span>{subItem}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-6 pt-4 border-t border-slate-100">
                    <button onClick={() => onWhatsApp(category.title)} className="text-xs font-bold text-blue-800 hover:text-slate-900 inline-flex items-center gap-1 text-left">
                      Schedule Consultation for {category.title}
                      <ArrowRight className="w-3.5 h-3.5 shrink-0" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* TRUST, SOCIAL, MAP */}
      <section className="max-w-[96%] mx-auto px-4 sm:px-6 py-14 space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="bg-slate-900 text-white rounded-2xl p-6">
            <Lock className="w-6 h-6 text-blue-400 mb-3" />
            <h3 className="text-base font-bold mb-2">Strict Financial Confidentiality</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Clients entrust us with sensitive financial records, assessment notices, and business plans. Every engagement is governed by strict non-disclosure protocols and ICAI ethical guidelines.
            </p>
          </div>
          <div className="bg-white border border-slate-200 rounded-2xl p-6">
            <Scale className="w-6 h-6 text-blue-800 mb-3" />
            <h3 className="text-base font-bold text-[#003366] mb-2">Legal & Appellate Rigor</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              With dual qualifications in Chartered Accountancy (FCA) and Law (LL.B.), our representation before Income Tax and GST appellate forums is grounded in statutory law and judicial precedents.
            </p>
          </div>
          <div className="bg-white border border-slate-200 rounded-2xl p-6">
            <Award className="w-6 h-6 text-blue-800 mb-3" />
            <h3 className="text-base font-bold text-[#003366] mb-2">Partner-Led Execution</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Practicing since 2003, every critical tax notice, audit opinion, and project financing report is personally reviewed by CA Haranath Babu alongside our dedicated audit and taxation staff.
            </p>
          </div>
        </div>

        <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-10">
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-800 mb-2">
              <Share2 className="w-3.5 h-3.5" />
              Official Digital Channels
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#003366] tracking-tight">Connect With Haranath & Associates on Social Media</h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Follow our official YouTube (@haranathbabu1278) and Instagram (@caharanath) channels for tax-saving videos, reels, and compliance updates.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {SOCIAL_MEDIA_CHANNELS.map((social) => (
              <a
                key={social.id}
                href={social.url}
                target="_blank"
                rel="noreferrer"
                className={`group bg-white rounded-2xl border border-slate-200 p-6 transition-all shadow-sm hover:shadow-lg flex flex-col items-center text-center justify-between ${social.bgHover}`}
              >
                <div className="flex flex-col items-center">
                  <div className={`w-16 h-16 rounded-2xl ${social.iconBg} flex items-center justify-center shadow-md group-hover:scale-110 transition-transform mb-4`}>
                    {social.svgPath ? (
                      <svg className="w-8 h-8 text-white fill-current" viewBox="0 0 24 24" aria-hidden="true">
                        <path d={social.svgPath} />
                      </svg>
                    ) : (
                      <MessageSquare className="w-8 h-8 text-white" />
                    )}
                  </div>
                  <h3 className="text-base font-extrabold text-[#003366]">{social.name}</h3>
                  <p className="text-[11px] font-semibold text-blue-700 mt-0.5 break-all">{social.handle}</p>
                  <p className="text-xs text-slate-500 mt-2 leading-relaxed">{social.tagline}</p>
                </div>
                <div className="mt-5 pt-3 border-t border-slate-100 w-full">
                  <span className="text-xs font-bold text-slate-900 group-hover:text-blue-700 inline-flex items-center justify-center gap-1">
                    {social.buttonLabel}
                    <ExternalLink className="w-3.5 h-3.5" />
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className="bg-white border-2 border-slate-200 rounded-3xl overflow-hidden shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between bg-slate-900 text-white">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/60 border border-blue-400/30 text-blue-300 text-xs font-bold uppercase tracking-wider">
                  <MapPin className="w-3.5 h-3.5" />
                  Headquarters Location & Directions
                </div>
                <div className="flex items-center gap-3">
                  <CaIndiaLogo className="w-12 h-12" />
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">Haranath & Associates</h2>
                    <p className="text-xs font-semibold text-blue-300">Chartered Accountants</p>
                  </div>
                </div>
                <p className="text-xs font-semibold text-slate-200">CA. Haranath Babu A.V. — FCA, DISA, M.Com., MBA, LL.B.</p>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  # 6-7-36, No.2, 3rd Floor, V.S.R. Complex,<br />
                  7/1, Arundelpet, Beside Paramount Footwear,<br />
                  Guntur – 522 002, Andhra Pradesh.
                </p>
                <div className="pt-2 space-y-2 text-xs text-slate-300 border-t border-slate-800">
                  <div className="flex items-center gap-2"><Clock className="w-4 h-4 text-blue-400 shrink-0" /><span>Mon – Sat: 10:00 AM to 8:00 PM (Online Consultancy Available)</span></div>
                  <div className="flex items-center gap-2"><Phone className="w-4 h-4 text-blue-400 shrink-0" /><span>{firmPhone}</span></div>
                  <div className="flex items-center gap-2"><Mail className="w-4 h-4 text-blue-400 shrink-0" /><span>{firmEmail} / {secondaryEmail}</span></div>
                </div>
              </div>
              <div className="pt-6">
                <a href={OFFICE_MAPS_URL} target="_blank" rel="noreferrer" className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs sm:text-sm py-3.5 px-5 rounded-xl inline-flex items-center justify-center gap-2 transition-colors shadow-md">
                  <Navigation className="w-4 h-4" />
                  Start Turn-by-Turn Navigation to Office
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
            <div className="lg:col-span-7">
              <OfficeMapEmbed />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
