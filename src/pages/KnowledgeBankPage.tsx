import { useState } from 'react';
import { CheckCircle2, Download, ExternalLink, Search, Sparkles } from 'lucide-react';
import CalculatorsSuite from '../components/CalculatorsSuite';
import {
  AUDIT_AND_PRESUMPTIVE_MATRIX, BARE_ACTS_LIBRARY, CII_TABLE, OFFICIAL_QUICK_LINKS,
  STATUTORY_BULLETINS, STATUTORY_FORMS_LIST, STATUTORY_RULES_LIBRARY, TDS_RATES_CHART
} from '../data/firmData';
import type { KnowledgeSubTab } from '../types';

interface Props {
  kbSubTab: KnowledgeSubTab;
  setKbSubTab: (t: KnowledgeSubTab) => void;
  onWhatsApp: (topic?: string) => void;
}

const SUB_TABS: { id: KnowledgeSubTab; label: string }[] = [
  { id: 'calculators', label: '1. Calculators' },
  { id: 'bulletins', label: '2. Bulletins Search' },
  { id: 'forms', label: '3. Statutory Forms' },
  { id: 'links', label: '4. Quick Links' },
  { id: 'acts', label: '5. Bare Acts' },
  { id: 'rules', label: '6. Rules' },
  { id: 'utilities', label: '7. Tax Utilities' }
];

const linkCls = 'text-xs font-bold text-blue-600 hover:text-slate-900 inline-flex items-center gap-1';

export default function KnowledgeBankPage({ kbSubTab, setKbSubTab, onWhatsApp }: Props) {
  const [bulletinSearch, setBulletinSearch] = useState('');
  const [formsCategory, setFormsCategory] = useState<'incomeTax' | 'gst' | 'mca'>('incomeTax');
  const [tdsSearch, setTdsSearch] = useState('');

  const q = bulletinSearch.toLowerCase();
  const tq = tdsSearch.toLowerCase();

  return (
    <section className="max-w-[96%] mx-auto px-4 sm:px-6 py-10">
      <div className="text-center max-w-3xl mx-auto mb-8">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          Interactive Statutory Intelligence
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#003366] tracking-tight">
          Knowledge <span className="text-blue-600">Bank</span>
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 mt-3 leading-relaxed">
          Switch seamlessly across calculators, gazette bulletins, statutory utilities, government portals, bare acts, rules, and official forms.
        </p>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-2.5 mb-10">
        {SUB_TABS.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setKbSubTab(tab.id)}
            className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold border transition-all ${
              kbSubTab === tab.id ? 'bg-blue-600 text-white border-blue-600 shadow-md' : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {kbSubTab === 'calculators' && <CalculatorsSuite />}

      {kbSubTab === 'bulletins' && (
        <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm">
          <div className="bg-slate-900 text-white p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider bg-slate-800 text-blue-300 px-3 py-1 rounded-full">CBDT • CBIC • MCA Gazette Tracker</span>
              <h2 className="text-xl sm:text-2xl font-bold mt-2">Statutory Circulars, Notifications & Judicial Bulletins</h2>
            </div>
            <div className="relative w-full md:w-72">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
              <input type="text" value={bulletinSearch} onChange={(e) => setBulletinSearch(e.target.value)} placeholder="Search 43B(h), GSTR-2B, Audit..." className="w-full pl-10 pr-4 py-2 text-xs bg-slate-800 border border-slate-700 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-blue-400" />
            </div>
          </div>
          <div className="divide-y divide-slate-200">
            {STATUTORY_BULLETINS.filter(
              (b) => b.title.toLowerCase().includes(q) || b.summary.toLowerCase().includes(q) || b.category.toLowerCase().includes(q)
            ).map((item, idx) => (
              <div key={idx} className="p-6 hover:bg-slate-50 transition-colors">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-blue-800 bg-blue-50 px-3 py-1 rounded-full">{item.category}</span>
                    <span className="text-xs font-semibold text-slate-500">{item.ref}</span>
                  </div>
                  <span className="text-xs text-slate-400 font-medium">{item.date}</span>
                </div>
                <h3 className="text-base font-bold text-[#003366]">{item.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1.5 leading-relaxed">{item.summary}</p>
                <div className="mt-4 flex flex-wrap items-center gap-5">
                  <a href={item.link} target="_blank" rel="noreferrer" className={linkCls}>
                    View Official Gazette Portal
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                  <button onClick={() => onWhatsApp(item.title)} className="text-xs font-bold text-slate-700 hover:text-blue-700">Request Advisory Note →</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {kbSubTab === 'forms' && (
        <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm">
          <div className="bg-slate-900 text-white p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider bg-slate-800 text-slate-300 px-3 py-1 rounded-full">CBDT • CBIC • MCA Statutory Repository</span>
              <h2 className="text-xl sm:text-2xl font-bold mt-2">Official Statutory Forms (AY 2026–27)</h2>
            </div>
            <div className="flex gap-2">
              {([
                { id: 'incomeTax', label: 'Income Tax Forms' },
                { id: 'gst', label: 'GST Forms' },
                { id: 'mca', label: 'ROC / MCA Forms' }
              ] as const).map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setFormsCategory(cat.id)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-colors ${
                    formsCategory === cat.id ? 'bg-blue-600 text-white' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-200 text-[11px] font-bold uppercase tracking-wider text-slate-400 bg-slate-50">
                  <th className="py-4 px-6 w-48">Form No.</th>
                  <th className="py-4 px-6">Statutory Description & Applicability</th>
                  <th className="py-4 px-6 text-right w-40">Download / Portal</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-xs sm:text-sm">
                {STATUTORY_FORMS_LIST[formsCategory].map((form, i) => (
                  <tr key={i} className="hover:bg-slate-50">
                    <td className="py-4 px-6 font-bold text-blue-700 whitespace-nowrap">{form.code}</td>
                    <td className="py-4 px-6 text-slate-600 leading-relaxed">{form.desc}</td>
                    <td className="py-4 px-6 text-right">
                      <a href={form.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-rose-50 hover:bg-rose-100 text-rose-700 font-bold text-xs transition-colors">
                        <Download className="w-3.5 h-3.5" />
                        PDF / Portal
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {kbSubTab === 'links' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {OFFICIAL_QUICK_LINKS.map((portal, idx) => (
            <div key={idx} className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm hover:shadow-md hover:border-blue-600 transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center">
                    <ExternalLink className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 bg-slate-100 px-3 py-1 rounded-full">{portal.badge}</span>
                </div>
                <h3 className="text-lg font-bold text-[#003366] mb-2">{portal.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{portal.desc}</p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100">
                <a href={portal.url} target="_blank" rel="noreferrer" className={linkCls}>Launch Official Portal →</a>
              </div>
            </div>
          ))}
        </div>
      )}

      {kbSubTab === 'acts' && (
        <div className="space-y-6">
          <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8">
            <span className="text-[11px] font-bold uppercase tracking-wider bg-blue-900 text-blue-200 px-3 py-1 rounded-full">Principal Central & Corporate Legislation</span>
            <h2 className="text-xl sm:text-2xl font-bold mt-2">Statutory Bare Acts & Key Litigative Sections</h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">Click the official repository link below any Act to open full statutory sections, chapters, and schedules.</p>
          </div>
          {BARE_ACTS_LIBRARY.map((act, idx) => (
            <div key={idx} className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 pb-4 border-b border-slate-100">
                <div>
                  <div className="text-xs font-bold text-blue-700 uppercase tracking-wider">{act.ministry}</div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#003366] mt-1">{act.actName}</h3>
                </div>
                <span className="text-xs font-bold bg-slate-100 text-slate-700 px-3.5 py-1.5 rounded-full shrink-0">{act.chapters}</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 mt-4 leading-relaxed">{act.overview}</p>
              <div className="mt-5 bg-slate-50 rounded-2xl p-5 border border-slate-200/80 grid grid-cols-1 md:grid-cols-2 gap-2.5">
                {act.keySections.map((sec, sIdx) => (
                  <div key={sIdx} className="flex items-start gap-2 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-blue-700 shrink-0 mt-0.5" />
                    <span>{sec}</span>
                  </div>
                ))}
              </div>
              <div className="mt-5 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
                <a href={act.officialUrl} target="_blank" rel="noreferrer" className={`${linkCls} gap-1.5`}>
                  Read Full Bare Act on Official Government Repository
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <button onClick={() => onWhatsApp(`Legal Opinion under ${act.actName}`)} className="text-xs font-bold text-slate-800 hover:text-blue-700 inline-flex items-center gap-1">
                  Request Section-Specific Opinion →
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {kbSubTab === 'rules' && (
        <div className="space-y-8">
          {STATUTORY_RULES_LIBRARY.map((group, gIdx) => (
            <div key={gIdx} className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm">
              <div className="bg-slate-900 text-white px-6 py-5 flex flex-wrap items-center justify-between gap-3">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-blue-300">{group.badge}</span>
                  <h2 className="text-lg sm:text-xl font-bold mt-0.5">{group.category}</h2>
                </div>
                <a href={group.officialPortalUrl} target="_blank" rel="noreferrer" className="text-xs font-bold bg-slate-800 hover:bg-blue-700 text-blue-200 hover:text-white px-3.5 py-2 rounded-xl border border-slate-700 inline-flex items-center gap-1.5 transition-colors">
                  Open Official Rules Portal
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
              <div className="divide-y divide-slate-200">
                {group.rules.map((r, rIdx) => (
                  <div key={rIdx} className="p-6 hover:bg-slate-50 transition-colors">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                      <span className="inline-block text-xs font-bold text-white bg-blue-700 px-3 py-1 rounded-lg">{r.ruleNo}</span>
                      <div className="flex items-center gap-4">
                        <a href={r.url} target="_blank" rel="noreferrer" className={linkCls}>
                          View Official Rule Text
                          <ExternalLink className="w-3 h-3" />
                        </a>
                        <button onClick={() => onWhatsApp(`${r.ruleNo} - ${r.title}`)} className="text-xs font-bold text-slate-700 hover:text-blue-700">Consult on Compliance →</button>
                      </div>
                    </div>
                    <h3 className="text-sm sm:text-base font-bold text-[#003366] mt-2">{r.title}</h3>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">{r.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {kbSubTab === 'utilities' && (
        <div className="space-y-8">
          <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm">
            <div className="bg-slate-900 text-white p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider bg-blue-900 text-blue-200 px-3 py-1 rounded-full">Ready Reckoner Utility • FY 2026–27</span>
                <h2 className="text-xl sm:text-2xl font-bold mt-2">TDS & TCS Rate Chart & Threshold Finder</h2>
              </div>
              <div className="relative w-full md:w-72">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                <input type="text" value={tdsSearch} onChange={(e) => setTdsSearch(e.target.value)} placeholder="Search 194C, 194J, Rent, Partner..." className="w-full pl-10 pr-4 py-2 text-xs bg-slate-800 border border-slate-700 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-blue-400" />
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200 text-[11px] font-bold uppercase tracking-wider text-slate-500">
                    <th className="py-3.5 px-5">Section</th>
                    <th className="py-3.5 px-5">Nature of Payment</th>
                    <th className="py-3.5 px-5">Annual Threshold</th>
                    <th className="py-3.5 px-5">Ind / HUF Rate</th>
                    <th className="py-3.5 px-5">Company / Firm</th>
                    <th className="py-3.5 px-5 text-right">Details / Portal</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-xs sm:text-sm">
                  {TDS_RATES_CHART.filter((row) => row.section.toLowerCase().includes(tq) || row.nature.toLowerCase().includes(tq)).map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-50">
                      <td className="py-3.5 px-5 font-bold text-blue-700 whitespace-nowrap">{row.section}</td>
                      <td className="py-3.5 px-5 font-medium text-slate-900">{row.nature}</td>
                      <td className="py-3.5 px-5 text-slate-600">{row.threshold}</td>
                      <td className="py-3.5 px-5 font-bold text-slate-900">{row.indRate}</td>
                      <td className="py-3.5 px-5 font-bold text-slate-900">{row.corpRate}</td>
                      <td className="py-3.5 px-5 text-right whitespace-nowrap">
                        <a href={row.url} target="_blank" rel="noreferrer" className={linkCls}>
                          Open Details
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-blue-700">Audit & Presumptive Applicability Matrix</span>
                <h2 className="text-xl font-bold text-[#003366] mt-1">Section 44AB Tax Audit & Presumptive Taxation (44AD / 44ADA) Limits</h2>
              </div>
              <a href="https://www.incometax.gov.in/iec/foportal/" target="_blank" rel="noreferrer" className={linkCls}>
                Official CBDT Utility Portal
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {AUDIT_AND_PRESUMPTIVE_MATRIX.map((item, idx) => (
                <div key={idx} className="bg-slate-50 border border-slate-200 rounded-2xl p-5 flex flex-col justify-between space-y-3">
                  <div className="space-y-1.5">
                    <h3 className="text-sm font-bold text-[#003366]">{item.provision}</h3>
                    <p className="text-xs font-semibold text-blue-800">{item.limit}</p>
                    <p className="text-xs text-slate-600"><strong>Requirement:</strong> {item.dueDate}</p>
                    <p className="text-[11px] text-slate-500"><strong>Eligible Entities:</strong> {item.applicability}</p>
                  </div>
                  <div className="pt-3 border-t border-slate-200/80 flex items-center justify-between">
                    <a href={item.url} target="_blank" rel="noreferrer" className={linkCls}>
                      View Statutory Form
                      <ExternalLink className="w-3 h-3" />
                    </a>
                    <button onClick={() => onWhatsApp(item.provision)} className="text-xs font-bold text-slate-800 hover:text-blue-700">Consult CA Desk →</button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-blue-700">Capital Gains Reference Utility</span>
                <h2 className="text-xl font-bold text-[#003366] mt-1">Notified Cost Inflation Index (CII) Table</h2>
              </div>
              <div className="flex items-center gap-4">
                <a href="https://incometaxindia.gov.in/Pages/utilities/cost-inflation-index.aspx" target="_blank" rel="noreferrer" className={linkCls}>
                  Official CBDT CII Notification
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <button onClick={() => setKbSubTab('calculators')} className="text-xs font-bold text-slate-800 hover:text-blue-700">Open Tax Calculators →</button>
              </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {CII_TABLE.map((c, idx) => (
                <div key={idx} className="bg-slate-50 border border-slate-200 rounded-xl p-3.5 text-center">
                  <div className="text-xs font-medium text-slate-500">{c.fy}</div>
                  <div className="text-lg font-extrabold text-slate-900 mt-1">{c.cii}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
