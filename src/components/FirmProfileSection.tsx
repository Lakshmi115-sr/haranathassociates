import {
  Award, BadgeCheck, Building2, Compass, Eye, Globe2, Handshake, Lightbulb, Puzzle, ShieldCheck,
  Target, Users, CheckCircle2, Calendar, UserCheck
} from 'lucide-react';

const CORE_VALUES = [
  { label: 'Innovation', Icon: Lightbulb },
  { label: 'Goals', Icon: Target },
  { label: 'Teamwork', Icon: Puzzle },
  { label: 'Commitment', Icon: ShieldCheck },
  { label: 'Integrity', Icon: Handshake },
  { label: 'Customers', Icon: Users },
  { label: 'Responsibility', Icon: Globe2 }
];

const AT_A_GLANCE = [
  { value: '2003', label: 'Practicing Since' },
  { value: '19 Jan 2017', label: 'Firm Established' },
  { value: '017245S', label: 'ICAI Firm Reg. No.' },
  { value: '2 FCA', label: 'Partners' },
  { value: '4', label: 'Articled Assistants' },
  { value: '12', label: 'Audit Staff (incl. Ex-Bank Officers)' },
  { value: '8', label: 'Staff for Concurrent Audit' },
  { value: '2', label: 'Offices: Guntur & Vijayawada' }
];

const PARTNERS = [
  {
    name: 'CA. Haranath Babu A.V.',
    role: 'Managing Partner',
    quals: 'M.Com., MBA, FCA, B.L., DISA (ICAI)',
    ids: ['ICAI M.No. 212892', 'COP since 04-03-2003', 'Qualified in 2002 • 23+ years of experience'],
    points: [
      'Extensive statutory, concurrent, stock and internal audit experience with banks and corporates across Andhra Pradesh, Telangana, Karnataka, Tamil Nadu, Kerala, Odisha and West Bengal.',
      'Certified in the ICAI GST course, the Concurrent Audit of Banks course and the Diploma in Information Systems Audit (DISA).',
      'Has contributed articles to ICAI and addressed seminars on various platforms.',
      'Executive Committee member of the Tax Bar Association, Guntur, and active in youth motivation and cultural programmes with JCI India.'
    ]
  },
  {
    name: 'CA. Pratyusha P.',
    role: 'Partner',
    quals: 'B.Com., CMA, FCA',
    ids: ['ICAI M.No. 230037', 'COP since 25-06-2012', 'Qualified in 2012 • 13+ years of experience'],
    points: [
      'All India Rank holder in her academic career, known for approachable and client-friendly advice on tax matters.',
      'Experience in internal audit, statutory audit of banks, firms and companies, and revenue audit of banks.',
      'Handles monthly, quarterly and annual compliances including ROC forms, e-TDS, VAT, CST, GST and other statutory filings.',
      'Serving the firm in all its activities since January 2017.'
    ]
  }
];

const SERVICE_LINES = [
  { title: 'Assurance & Audit', items: ['Statutory, Internal & Concurrent Audit', 'Revenue & Stock Audit', 'Corporate governance compliance reporting', 'Management audits'] },
  { title: 'Taxation Advisory', items: ['Tax assessment & filing of returns', 'Direct tax planning', 'Indirect tax planning'] },
  { title: 'Risk Advisory', items: ['Risk-based internal & systems audit', 'Investigations', 'Standard operating policies & procedures', 'Operational, compliance & strategic risk review'] },
  { title: 'Business Advisory', items: ['Company formation & liquidation', 'Business & financial restructuring', 'Internal control design & IT systems implementation', 'Cost reduction & control consulting'] },
  { title: 'Core Financial Advisory', items: ['Feasibility studies & project financing', 'Financial / taxation due diligence', 'Business valuations', 'Sourcing of funds, merger & acquisition consulting'] },
  { title: 'Other Corporate Services', items: ['Outsourced accounting & operational processes', 'HR services: executive search & job descriptions', 'Internal fund management consulting', 'Field survey & stock audits'] }
];

const APPROACH = [
  'Understanding the client, their needs and expectations',
  'Meeting those expectations',
  'Planning, execution and performance of work',
  'Communicating results and recommendations',
  'Consistent communication for a lasting relationship and future needs',
  'Guiding clients in a better and more competitive way'
];

export default function FirmProfileSection() {
  return (
    <div className="space-y-10">
      {/* Firm at a glance */}
      <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm">
        <div className="text-xs font-bold uppercase tracking-wider text-blue-800 mb-1 inline-flex items-center gap-1.5">
          <Building2 className="w-3.5 h-3.5" />
          Firm Profile
        </div>
        <h2 className="text-xl sm:text-2xl font-bold text-[#003366]">Haranath & Associates at a Glance</h2>
        <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-3xl">
          A partnership firm of Chartered Accountants headquartered in Guntur with a branch in Vijayawada, networked with professional colleagues across Telangana, Tamil Nadu, Karnataka, Kerala, Odisha, West Bengal and Madhya Pradesh.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-6">
          {AT_A_GLANCE.map((s) => (
            <div key={s.label} className="bg-slate-50 border border-slate-200 rounded-2xl p-4 text-center">
              <div className="text-xl sm:text-2xl font-extrabold text-[#003366]">{s.value}</div>
              <div className="text-[11px] font-semibold text-slate-500 mt-1 leading-snug">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Vision, mission, values */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-slate-900 text-white rounded-2xl p-6">
          <Eye className="w-6 h-6 text-blue-400 mb-3" />
          <h3 className="text-base font-bold mb-2">Our Vision</h3>
          <p className="text-sm text-slate-300 leading-relaxed">To ensure the progress of our clients financially and socially.</p>
        </div>
        <div className="bg-white border border-slate-200 rounded-2xl p-6">
          <Compass className="w-6 h-6 text-blue-800 mb-3" />
          <h3 className="text-base font-bold text-[#003366] mb-2">Our Mission</h3>
          <p className="text-sm text-slate-600 leading-relaxed">We work smart every day to make Haranath & Associates the most respected service brand.</p>
        </div>
      </div>

      <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8">
        <h3 className="text-lg font-bold text-[#003366] mb-4">Our Core Values</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
          {CORE_VALUES.map(({ label, Icon }) => (
            <div key={label} className="bg-white border border-slate-200 rounded-2xl p-4 flex flex-col items-center text-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center">
                <Icon className="w-5 h-5" />
              </div>
              <span className="text-xs font-bold text-slate-800">{label}</span>
            </div>
          ))}
        </div>
        <p className="text-xs sm:text-sm text-slate-600 mt-5 leading-relaxed max-w-4xl">
          We believe in listening patiently, understanding quickly and going beyond simply stating what the law says: our focus is on finding the right solution for each client's circumstances, fully within the four corners of the law.
        </p>
      </div>

      {/* Partners */}
      <div>
        <h3 className="text-xl font-bold text-[#003366] mb-4 inline-flex items-center gap-2">
          <UserCheck className="w-5 h-5 text-blue-800" />
          Our Partners
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {PARTNERS.map((p) => (
            <div key={p.name} className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-7 shadow-sm">
              <div className="flex items-start justify-between gap-3 flex-wrap">
                <div>
                  <h4 className="text-lg font-extrabold text-[#003366]">{p.name}</h4>
                  <div className="text-xs font-bold text-blue-800 uppercase tracking-wider mt-0.5">{p.role}</div>
                  <div className="text-xs font-semibold text-slate-600 mt-1">{p.quals}</div>
                </div>
                <Award className="w-6 h-6 text-amber-600 shrink-0" />
              </div>
              <div className="flex flex-wrap gap-2 mt-4">
                {p.ids.map((id) => (
                  <span key={id} className="text-[11px] font-bold text-slate-700 bg-slate-100 border border-slate-200 px-3 py-1 rounded-full">{id}</span>
                ))}
              </div>
              <ul className="space-y-2.5 mt-5 pt-4 border-t border-slate-100">
                {p.points.map((pt, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-blue-800 shrink-0 mt-0.5" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Service lines */}
      <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8">
        <h3 className="text-xl font-bold text-[#003366] mb-1">Our Service Lines</h3>
        <p className="text-xs sm:text-sm text-slate-600 mb-6">Comprehensive and specialised professional services for present and future client needs.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {SERVICE_LINES.map((s) => (
            <div key={s.title} className="bg-white border border-slate-200 rounded-2xl p-5">
              <h4 className="text-sm font-extrabold text-[#003366] mb-3">{s.title}</h4>
              <ul className="space-y-2">
                {s.items.map((it) => (
                  <li key={it} className="flex items-start gap-2 text-xs text-slate-700">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-800 shrink-0 mt-0.5" />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Audit experience + approach */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8">
          <BadgeCheck className="w-6 h-6 text-blue-400 mb-3" />
          <h3 className="text-lg font-bold mb-2">Audit & Assurance Track Record</h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Over two decades of statutory, concurrent, stock and internal audit assignments for public sector banks, co-operative and regional rural banks, state-level institutions, listed and private companies and educational institutions, many of them continuing assignments.
          </p>
          <div className="grid grid-cols-2 gap-3 mt-5">
            {['Statutory Audit', 'Concurrent Audit', 'Stock Audit', 'Internal Audit'].map((t) => (
              <div key={t} className="bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-xs font-bold text-blue-200 flex items-center gap-2">
                <Calendar className="w-3.5 h-3.5 text-blue-400" />
                {t}
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm">
          <h3 className="text-lg font-bold text-[#003366] mb-4">Our Approach</h3>
          <ol className="space-y-3">
            {APPROACH.map((a, i) => (
              <li key={a} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                <span className="w-5 h-5 rounded-full bg-slate-900 text-white text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5">{i + 1}</span>
                <span>{a}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}
