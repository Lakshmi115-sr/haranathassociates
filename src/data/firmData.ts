import { Scale, FileCheck, Shield, Landmark } from 'lucide-react';
import type { ProblemSolution, ServiceCategory } from '../types';

// ============================================================================
// CLIENT PROBLEM-SOLVING PAGES
// ============================================================================
export const CLIENT_PROBLEMS: ProblemSolution[] = [
  {
    id: 'it-notice',
    question: 'Received an Income Tax Notice?',
    category: 'Direct Tax Litigation & Assessment',
    shortDesc:
      'Expert drafting, e-Proceedings representation, and appellate defense for Scrutiny (Sec 143(2)), Reassessment (Sec 148), and CIT(A) / ITAT appeals.',
    detailedOverview:
      'Receiving an Income Tax notice requires a legally sound, fact-backed response within statutory timelines. Leveraging both Chartered Accountancy (FCA) and Legal (LL.B.) qualifications, CA Haranath Babu personally oversees assessment replies, high-value transaction explanations, and appellate submissions.',
    howWeHelp: [
      'Detailed examination of Notice u/s 139(9), 142(1), 143(1), 143(2), or 148/148A.',
      'Reconciliation of AIS, TIS, Form 26AS, and bank statements with filed ITR.',
      'Drafting comprehensive legal and factual written submissions for Faceless Assessment (NFAC).',
      'Filing and arguing appeals before CIT(Appeals) and Income Tax Appellate Tribunal (ITAT).',
      'Stay of demand applications and penalty immunity proceedings u/s 270A / 271(1)(c).'
    ],
    documentsRequired: [
      'Copy of the Income Tax Notice & DIN reference',
      'Filed Income Tax Return (ITR-V) & Computation of Income',
      'AIS / TIS and Form 26AS statements for the relevant Assessment Year',
      'Bank statements & supporting documentary evidence'
    ],
    statutorySections: 'Sections 142(1), 143(2), 148, 246A & 253 of the Income Tax Act, 1961'
  },
  {
    id: 'gst-itc',
    question: 'Facing GST ITC Disallowance?',
    category: 'GST Notice, Audit & Appellate Representation',
    shortDesc:
      'Resolution for GSTR-2B vs GSTR-3B mismatches, DRC-01 show-cause notices, blocked credit disputes, and Section 73/74 departmental proceedings.',
    detailedOverview:
      'Input Tax Credit (ITC) disallowances and departmental show-cause notices can severely impact business working capital. Our GST desk conducts invoice-level reconciliations and prepares strong legal replies backed by High Court and GST Council precedents.',
    howWeHelp: [
      'Complete GSTR-2A / GSTR-2B vs GSTR-3B and Purchase Register reconciliation.',
      'Drafting legal replies to ASMT-10 discrepancy notices and DRC-01 Show Cause Notices.',
      'Representation before State and Central GST Adjudicating Authorities in Section 73 & 74 proceedings.',
      'Filing GST Appeals (APL-01) before the Joint Commissioner (Appeals) and GSTAT.',
      'Advisory on Rule 86A credit unblocking and GST registration revocation.'
    ],
    documentsRequired: [
      'Copy of Notice (ASMT-10 / DRC-01 / Audit Notice)',
      'GSTR-3B, GSTR-1, and GSTR-2B downloads for the disputed period',
      'Purchase tax invoices, e-Way bills, and vendor payment proofs',
      'GSTR-9 and GSTR-9C annual reconciliation statements (if applicable)'
    ],
    statutorySections: 'Sections 16, 73, 74 & 107 of the CGST / APGST Act, 2017'
  },
  {
    id: 'bank-finance',
    question: 'Planning to Obtain Bank Finance?',
    category: 'Syndication, CMA Data & Working Capital Advisory',
    shortDesc:
      'Structured CMA data preparation, Cash Credit (CC) & Term Loan proposals, and financial restructuring for MSMEs, traders, and corporates.',
    detailedOverview:
      'Banks and financial institutions evaluate loan proposals based on debt-service coverage, working capital cycles, and realistic financial ratios. We prepare bank-compliant financial dossiers that present your business fundamentals accurately.',
    howWeHelp: [
      'Preparation of Credit Monitoring Arrangement (CMA) data across historical and projected years.',
      'Structuring Working Capital (CC / OD) limits, Term Loans, and Letter of Credit / Bank Guarantee facilities.',
      'Ratio analysis (DSCR, Current Ratio, TOL/TNW) aligned with nationalized and private bank lending norms.',
      'Assistance in responding to bank credit queries, stock audit compliance, and limit renewals.',
      'Net Worth Certification for promoters and guarantors.'
    ],
    documentsRequired: [
      'Last 3 years Audited Financial Statements & ITRs',
      'Provisional balance sheet and current year GST turnover summary',
      'Existing sanction letters and loan repayment schedules',
      'Collateral property details and promoter KYC documents'
    ],
    statutorySections: 'RBI Prudential Norms, Tandon / Nayak Committee Working Capital Methods'
  },
  {
    id: 'project-report',
    question: 'Need a Project Report for Business Expansion?',
    category: 'Detailed Project Reports (DPR) & MSME Advisory',
    shortDesc:
      'Comprehensive technical and financial feasibility reports for new industrial units, cold storages, hospitals, educational institutions, and MSMEs.',
    detailedOverview:
      'Whether setting up a new manufacturing plant, expanding capacity, or applying for state/central capital subsidies, a rigorous Detailed Project Report (DPR) is essential for institutional approval and financial closure.',
    howWeHelp: [
      'End-to-end Detailed Project Report (DPR) covering technical feasibility and commercial viability.',
      'Multi-year cash flow projections, break-even analysis, IRR, and sensitivity modeling.',
      'Term loan structuring and capital expenditure (CapEx) scheduling.',
      'Guidance on MSME Udyam registration, state industrial incentives, and interest subsidy schemes.',
      'Entity selection advisory (Private Limited Company, LLP, or Registered Partnership).'
    ],
    documentsRequired: [
      'Quotation of plant, machinery, or civil construction estimates',
      'Land / lease documents and proposed capacity details',
      'Promoter profile and net worth statements',
      'Past business track record (for existing group expansions)'
    ],
    statutorySections: 'MSME Development Act & Institutional Appraisal Standards'
  }
];

// ============================================================================
// CORE PRACTICE AREAS
// ============================================================================
export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: 'direct-tax',
    title: 'Income Tax Consultancy, Scrutiny & Appeals',
    subtitle: 'Comprehensive tax consultancy, return filing, tax planning, and appellate representation.',
    icon: Scale,
    items: [
      'Income Tax Consultancy & Return Filing (Individuals, Firms, LLPs, Companies & Trusts)',
      'Income Tax Scrutiny and Appeals – CIT(A) and ITAT Representation',
      'Tax & Financial Planning for Individuals, Professionals & Corporates',
      'Capital Gains Tax Advisory & Exemption Structuring (Sec 54/54EC/54F)',
      'TDS and TCS Compliance, Quarterly Returns & Lower Deduction Certificates',
      'Tax Notices, Reassessments (Sec 148) and Litigation Management',
      'Online Consultancy Also Available for NRI & Outstation Clients'
    ]
  },
  {
    id: 'gst-indirect',
    title: 'GST Consultancy, Audits & Appeals',
    subtitle: 'End-to-end GST return filing, reconciliations, departmental audits, and appellate defense.',
    icon: FileCheck,
    items: [
      'GST Consultancy & Return Filing (Monthly, Quarterly & Annual GSTR-1, 3B, 9 & 9C)',
      'GST Audits and Appeals before Appellate Authorities & Tribunal',
      'GST Registration, Amendments & LUT Filings for Exporters',
      'GST Department Notices, Show Cause Replies (DRC-01) & Adjudication',
      'ITC Reconciliation (GSTR-2B vs Purchase Register) & Vendor Compliance',
      'Ongoing GST Advisory, HSN Classification and Departmental Representation'
    ]
  },
  {
    id: 'audit-assurance',
    title: 'Audit, Assurance & Visa Financial Certification',
    subtitle: 'Independent statutory, tax, systems audits (DISA), and financial certifications.',
    icon: Shield,
    items: [
      'Visa Financial Certification, Net Worth & Solvency Certificates for Overseas Travel/Students',
      'Statutory Audit under the Companies Act, 2013 & LLP Act',
      'Tax Audit under Section 44AB of the Income Tax Act',
      'Information Systems Audit & Cyber Controls Review – DISA (ICAI)',
      'Internal Audit, Risk Control Matrix & Standard Operating Procedures (SOPs)',
      'Charitable Trust, Society & Educational Institution Audits (Form 10B / 10BB)',
      'Foreign Remittance Certifications (Form 15CA / 15CB) & Turnover Certificates'
    ]
  },
  {
    id: 'advisory-finance',
    title: 'Bank Loans, DPR, Licensing & Wealth Guidance',
    subtitle: 'Project financing, business expansion strategies, registrations, and insurance advisory.',
    icon: Landmark,
    items: [
      'Bank Loan Project Reports & Detailed Project Reports (DPR) with CMA Data',
      'Business Expansion Strategies, Financial Structuring & Working Capital Advisory',
      'Licensing & Registration Services (Company, LLP, Partnership ROF, MSME Udyam, FSSAI, IEC)',
      'Wealth Maximization Guidance & Portfolio Tax Optimization',
      'Expert Advice on Life, Health, and Accidental Insurance',
      'Annual ROC / MCA Filings, Accounting Supervision & Virtual CFO Support'
    ]
  }
];

// ============================================================================
// SOCIAL MEDIA CHANNELS (svgPath = single SVG path on 24x24 viewBox; null = use chat icon)
// ============================================================================
export interface SocialChannel {
  id: string;
  name: string;
  handle: string;
  tagline: string;
  url: string;
  bgHover: string;
  iconBg: string;
  buttonLabel: string;
  svgPath: string | null;
}

export const SOCIAL_MEDIA_CHANNELS: SocialChannel[] = [
  {
    id: 'youtube',
    name: 'YouTube',
    handle: '@haranathbabu1278',
    tagline: 'CA Haranath Official Channel • 6.68K+ Subscribers • 458+ Videos on Tax & Business',
    url: 'https://www.youtube.com/@haranathbabu1278',
    bgHover: 'hover:border-red-600 hover:shadow-red-100',
    iconBg: 'bg-[#FF0000]',
    buttonLabel: 'Subscribe Channel',
    svgPath:
      'M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z'
  },
  {
    id: 'instagram',
    name: 'Instagram',
    handle: '@caharanath',
    tagline: 'Official reels on Income Tax saving, property tax rules & financial awareness',
    url: 'https://www.instagram.com/caharanath/',
    bgHover: 'hover:border-pink-600 hover:shadow-pink-100',
    iconBg: 'bg-gradient-to-tr from-amber-500 via-pink-600 to-purple-700',
    buttonLabel: 'Follow @caharanath',
    svgPath:
      'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z'
  },
  {
    id: 'facebook',
    name: 'Facebook',
    handle: 'CA Haranath Babu',
    tagline: 'Tax updates, firm announcements & client awareness posts',
    url: 'https://www.facebook.com/search/top?q=CA%20Haranath',
    bgHover: 'hover:border-blue-600 hover:shadow-blue-100',
    iconBg: 'bg-[#1877F2]',
    buttonLabel: 'Follow on Facebook',
    svgPath:
      'M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z'
  },
  {
    id: 'linkedin',
    name: 'LinkedIn',
    handle: 'CA Haranath Babu A.V.',
    tagline: 'Corporate governance, tax litigation insights & professional network',
    url: 'https://www.linkedin.com/search/results/all/?keywords=CA%20Haranath%20Babu%20Guntur',
    bgHover: 'hover:border-blue-700 hover:shadow-blue-100',
    iconBg: 'bg-[#0A66C2]',
    buttonLabel: 'Connect on LinkedIn',
    svgPath:
      'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z'
  },
  {
    id: 'whatsapp-channel',
    name: 'WhatsApp Desk',
    handle: '+91 98856 78619',
    tagline: 'Direct consultation & online advisory with CA Haranath Babu',
    url: 'https://wa.me/919885678619',
    bgHover: 'hover:border-emerald-600 hover:shadow-emerald-100',
    iconBg: 'bg-emerald-600',
    buttonLabel: 'Chat on WhatsApp',
    svgPath: null
  }
];

// ============================================================================
// KNOWLEDGE BANK DATASETS
// ============================================================================
export const STATUTORY_BULLETINS = [
  {
    ref: 'CBDT Circular / Sec 43B(h)',
    date: 'Direct Tax Advisory',
    category: 'Income Tax',
    title: 'MSME Timely Payment Compliance under Section 43B(h)',
    summary:
      'Sums payable to Micro and Small Enterprises beyond 15 days (or 45 days with written agreement) are allowed as deduction only in the year of actual payment. Verify vendor Udyam status before year-end audit.',
    link: 'https://incometaxindia.gov.in/Pages/communications/circulars.aspx'
  },
  {
    ref: 'CBIC Notification / Sec 128A',
    date: 'GST Amnesty & Litigation',
    category: 'GST',
    title: 'Waiver of Interest & Penalty for Section 73 Demand Notices',
    summary:
      'Conditional waiver of interest and penalties under Section 128A for demand notices issued u/s 73 pertaining to FY 2017-18 to 2019-20 where full tax principal is discharged within notified timelines.',
    link: 'https://taxinformation.cbic.gov.in/'
  },
  {
    ref: 'CBIC IMS & GSTR-2B Advisory',
    date: 'GST Portal Update',
    category: 'GST',
    title: 'Invoice Management System (IMS) for Recipient ITC Control',
    summary:
      'Taxpayers can now Accept, Reject, or Keep Pending supplier invoices directly on the GST portal IMS dashboard to accurately compute eligible GSTR-2B Input Tax Credit prior to filing GSTR-3B.',
    link: 'https://www.gst.gov.in/'
  },
  {
    ref: 'MCA Rule 11(g) Compliance',
    date: 'Company Law & Audit',
    category: 'MCA / Audit',
    title: 'Mandatory Audit Trail (Edit Log) in Accounting Software',
    summary:
      'Every company using accounting software must maintain a daily-backed-up audit trail (edit log) of each transaction and ensure the audit trail feature is not disabled at any point during the financial year.',
    link: 'https://www.mca.gov.in/'
  },
  {
    ref: 'CBDT Capital Gains & TDS Update',
    date: 'Finance Act Update',
    category: 'Income Tax',
    title: 'Rationalized LTCG (12.5%), STCG (20%) & Updated TDS Rates',
    summary:
      'Long-Term Capital Gains rate unified at 12.5% (with indexation grandfathering option for resident individuals/HUFs on land/building acquired prior to 23 July 2024) alongside reduced 2% TDS u/s 194M/194H/194O.',
    link: 'https://www.incometax.gov.in/'
  }
];

export interface StatutoryForm {
  code: string;
  desc: string;
  url: string;
}

export const STATUTORY_FORMS_LIST: Record<'incomeTax' | 'gst' | 'mca', StatutoryForm[]> = {
  incomeTax: [
    { code: 'ITR-1 (SAHAJ)', desc: 'For resident individuals having total income up to Rs. 50 lakh from salaries, one house property, and other sources.', url: 'https://www.incometax.gov.in/iec/foportal/downloads/income-tax-returns' },
    { code: 'ITR-2', desc: 'For individuals and HUFs not having income from business or profession (Capital Gains, Multiple Properties, Foreign Assets).', url: 'https://www.incometax.gov.in/iec/foportal/downloads/income-tax-returns' },
    { code: 'ITR-3', desc: 'For individuals and HUFs having income from proprietary business or profession (Audit & Non-Audit cases).', url: 'https://www.incometax.gov.in/iec/foportal/downloads/income-tax-returns' },
    { code: 'ITR-4 (SUGAM)', desc: 'For resident individuals, HUFs, and firms (other than LLP) opting for Presumptive Taxation u/s 44AD, 44ADA, or 44AE.', url: 'https://www.incometax.gov.in/iec/foportal/downloads/income-tax-returns' },
    { code: 'ITR-5 & ITR-6', desc: 'ITR-5 for Partnership Firms, LLPs, AOPs/BOIs; ITR-6 for Companies other than companies claiming exemption u/s 11.', url: 'https://www.incometax.gov.in/iec/foportal/downloads/income-tax-returns' },
    { code: 'Form 3CA / 3CB & 3CD', desc: 'Mandatory Tax Audit Report and 44-clause Statement of Particulars under Section 44AB of the Income Tax Act.', url: 'https://www.incometax.gov.in/iec/foportal/downloads/income-tax-forms' },
    { code: 'Form 15CA & 15CB', desc: 'Remitter declaration (15CA) and Chartered Accountant Certificate (15CB) for foreign remittances u/s 195.', url: 'https://www.incometax.gov.in/iec/foportal/downloads/income-tax-forms' },
    { code: 'Form 35 & Form 36', desc: 'Statutory appeal forms for filing appeals before CIT(Appeals) [Form 35] and Income Tax Appellate Tribunal (ITAT) [Form 36].', url: 'https://www.incometax.gov.in/iec/foportal/downloads/income-tax-forms' }
  ],
  gst: [
    { code: 'GST REG-01', desc: 'Application for new Goods & Services Tax (GST) Registration for regular, composition, or casual taxpayers.', url: 'https://www.gst.gov.in/' },
    { code: 'GSTR-1 & GSTR-3B', desc: 'Monthly/Quarterly return of outward supplies (GSTR-1) and summary return for ITC claim & tax payment (GSTR-3B).', url: 'https://www.gst.gov.in/download/returns' },
    { code: 'GSTR-9 & GSTR-9C', desc: 'Annual GST Return (GSTR-9) and Annual Audited Financial Reconciliation Statement (GSTR-9C).', url: 'https://www.gst.gov.in/download/returns' },
    { code: 'GST DRC-03 & DRC-06', desc: 'Intimation of voluntary/show-cause tax payment (DRC-03) and formal reply to Show Cause Notice DRC-01 (DRC-06).', url: 'https://www.gst.gov.in/' },
    { code: 'GST APL-01', desc: 'Statutory form for filing First Appeal before the GST Appellate Authority u/s 107.', url: 'https://www.gst.gov.in/' },
    { code: 'GST RFD-01', desc: 'Application for claiming refund of accumulated Input Tax Credit on exports, inverted duty structure, or excess cash balance.', url: 'https://www.gst.gov.in/' }
  ],
  mca: [
    { code: 'SPICe+ (INC-32)', desc: 'Integrated web form for Company Incorporation, DIN allotment, PAN, TAN, EPFO, ESIC, and GSTIN registration.', url: 'https://www.mca.gov.in/content/mca/global/en/mca/e-filing.html' },
    { code: 'Form AOC-4 & MGT-7', desc: 'Annual filing of Audited Financial Statements (AOC-4) and Annual Return (MGT-7 / 7A) for Companies.', url: 'https://www.mca.gov.in/' },
    { code: 'LLP Form 11 & Form 8', desc: 'Annual Return of LLP (Form 11 - due 30th May) and Statement of Account & Solvency (Form 8 - due 30th October).', url: 'https://www.mca.gov.in/' },
    { code: 'DIR-3 KYC & ADT-1', desc: 'Annual Director KYC verification (due 30th September) and Notice of Appointment of Statutory Auditor (ADT-1).', url: 'https://www.mca.gov.in/' }
  ]
};

export const OFFICIAL_QUICK_LINKS = [
  { title: 'Income Tax e-Filing Portal (CBDT)', desc: 'File ITR 1–7, view AIS/TIS & Form 26AS, respond to e-Proceedings notices (143(2)/148), and file CIT(A) Form 35 appeals.', url: 'https://www.incometax.gov.in/iec/foportal/', badge: 'Direct Tax' },
  { title: 'Goods & Services Tax Common Portal', desc: 'File GSTR-1, GSTR-3B, GSTR-9/9C, access Invoice Management System (IMS), GSTR-2B, and reply to DRC-01 notices.', url: 'https://www.gst.gov.in/', badge: 'Indirect Tax' },
  { title: 'Ministry of Corporate Affairs (MCA V3)', desc: 'Company & LLP incorporation (SPICe+ / FiLLiP), Master Data lookup, charge management, and annual ROC filings.', url: 'https://www.mca.gov.in/', badge: 'Corporate Law' },
  { title: 'TRACES — TDS Reconciliation (CPC)', desc: 'Download Form 16 / 16A certificates, Conso files, Justification Reports, and file online TDS correction statements.', url: 'https://www.tdscpc.gov.in/', badge: 'TDS / TCS' },
  { title: 'NIC e-Invoice & e-Way Bill Portal', desc: 'Generate IRN & QR codes for B2B e-Invoices, part-A/part-B e-Way bills, and verify HSN codes.', url: 'https://ewaybillgst.gov.in/', badge: 'GST Logistics' },
  { title: 'MSME Udyam Registration Portal', desc: 'Official Ministry of MSME portal for Udyam Registration certificates and MSME Samadhaan delayed payment protection.', url: 'https://udyamregistration.gov.in/', badge: 'MSME Advisory' },
  { title: 'ICAI UDIN Verification Portal', desc: 'Verify Unique Document Identification Numbers (UDIN) generated by Chartered Accountants for audit reports and certificates.', url: 'https://udin.icai.org/', badge: 'ICAI Assurance' },
  { title: 'Income Tax Appellate Tribunal (ITAT)', desc: 'Official e-Filing portal, cause lists, and judicial orders of the Income Tax Appellate Tribunal benches across India.', url: 'https://itat.gov.in/', badge: 'Appellate Forum' },
  { title: 'EPFO & ESIC Unified Employer Portal', desc: 'Monthly ECR filing, UAN management, and statutory labour compliance for commercial establishments and industries.', url: 'https://unifiedportal-emp.epfindia.gov.in/', badge: 'Labour Law' }
];

export const BARE_ACTS_LIBRARY = [
  {
    actName: 'The Income Tax Act, 1961 (As Amended by Finance Act)',
    ministry: 'Ministry of Finance • Department of Revenue (CBDT)',
    chapters: '23 Chapters • 298+ Sections • 14 Schedules',
    overview: 'Principal legislation governing the levy, assessment, collection, and appellate adjudication of Direct Income Tax in India.',
    keySections: [
      'Sec 10 & Sec 11–13: Exempt Incomes & Charitable Trust Taxation',
      'Sec 28–44DB: Profits & Gains of Business or Profession (Sec 43B(h) MSME, Sec 44AB Tax Audit, Sec 44AD/ADA Presumptive)',
      'Sec 45–55A: Capital Gains Computation & Sec 54 / 54EC / 54F Exemptions',
      'Sec 68–69D: Unexplained Cash Credits, Investments & High-Value Scrutiny',
      'Sec 139–154: Return Filing, Faceless Scrutiny (143(2)/143(3)), Reassessment (147/148) & Rectification',
      'Sec 192–206C: TDS & TCS Deduction, Deposit & Default Consequences',
      'Sec 246A & Sec 253: Appeals to CIT(Appeals) / JCIT(A) and Appellate Tribunal (ITAT)'
    ],
    officialUrl: 'https://incometaxindia.gov.in/pages/acts/income-tax-act.aspx'
  },
  {
    actName: 'The Central Goods and Services Tax (CGST) Act, 2017 & IGST Act, 2017',
    ministry: 'Central Board of Indirect Taxes and Customs (CBIC) & APGST Act',
    chapters: '21 Chapters • 174 Sections • 3 Schedules',
    overview: 'Comprehensive indirect tax statute governing intra-state and inter-state supply of goods and services, Input Tax Credit (ITC), and GST adjudication.',
    keySections: [
      'Sec 7 & Sec 9: Scope of Supply, Composite/Mixed Supply & Levy of GST (Forward & Reverse Charge)',
      'Sec 16, 17 & 18: Eligibility, Time Limits, GSTR-2B Matching & Blocked Input Tax Credit (Sec 17(5))',
      'Sec 22–30: Threshold Registration, Voluntary Registration, Cancellation & Revocation',
      'Sec 37–44: Furnishing of Returns, First Return, Annual Return (GSTR-9) & Reconciliation',
      'Sec 50: Interest on Delayed Tax Payment (Net Cash Liability Rule)',
      'Sec 61, 65, 73 & 74: Scrutiny of Returns (ASMT-10), Departmental Audit & Show Cause Demands (DRC-01)',
      'Sec 107 & Sec 112: Appeals to Appellate Authority (APL-01) and GST Appellate Tribunal (GSTAT)'
    ],
    officialUrl: 'https://taxinformation.cbic.gov.in/'
  },
  {
    actName: 'The Companies Act, 2013 & Limited Liability Partnership (LLP) Act, 2008',
    ministry: 'Ministry of Corporate Affairs (MCA)',
    chapters: '29 Chapters • 470 Sections • 7 Schedules',
    overview: 'Statutory framework regulating corporate incorporation, board governance, financial reporting, statutory audits, and ROC filings.',
    keySections: [
      'Sec 7 & Sec 12: Incorporation of Companies & Registered Office Verification',
      'Sec 92 & Sec 137: Annual Return (MGT-7) and Filing of Financial Statements (AOC-4)',
      'Sec 128–134: Books of Account, Financial Statements & Directors Responsibility Statement',
      'Sec 139–148: Appointment, Rotation, Powers & Duties of Statutory Auditors',
      'Sec 173, 185, 186 & 188: Board Meetings, Loans to Directors, Inter-Corporate Loans & Related Party Transactions'
    ],
    officialUrl: 'https://www.mca.gov.in/content/mca/global/en/acts-rules/ebooks/acts.html'
  },
  {
    actName: 'The Micro, Small and Medium Enterprises Development (MSMED) Act, 2006',
    ministry: 'Ministry of Micro, Small and Medium Enterprises',
    chapters: '6 Chapters • 32 Sections',
    overview: 'Protects MSMEs against delayed payments and provides statutory classification for priority sector lending and industrial subsidies.',
    keySections: [
      'Sec 7: Classification of Micro, Small, and Medium Enterprises based on Investment & Turnover',
      'Sec 15 & Sec 16: Buyer obligation to pay MSME suppliers within 15/45 days & compound interest at 3x RBI Bank Rate',
      'Sec 18: Reference to Micro and Small Enterprises Facilitation Council (MSEFC)',
      'Read with Income Tax Sec 43B(h): Disallowance of unpaid MSME dues in buyer tax audit'
    ],
    officialUrl: 'https://samadhaan.msme.gov.in/'
  },
  {
    actName: 'The Indian Partnership Act, 1932 & FEMA, 1999',
    ministry: 'Ministry of Law & Justice / Reserve Bank of India',
    chapters: 'Partnership Governance & Cross-Border Foreign Exchange Law',
    overview: 'Governs registered partnership deeds, partner remuneration/interest limits (Sec 40(b) of IT Act), and NRI/foreign remittance regulations.',
    keySections: [
      'Partnership Act Sec 4, 13 & 58: Partnership Deed Clauses, Partner Remuneration & Registrar of Firms (ROF) Registration',
      'Income Tax Sec 40(b) & 194T: Permissible book-profit limits for partner salary/interest and TDS applicability',
      'FEMA Sec 3–8 & LRS Rules: Liberalised Remittance Scheme, FDI Reporting (FC-GPR) & NRI Repatriation (Form 15CA/15CB)'
    ],
    officialUrl: 'https://www.indiacode.nic.in/'
  }
];

const IT_RULES_URL = 'https://incometaxindia.gov.in/pages/rules/income-tax-rules-1962.aspx';
const CBIC_URL = 'https://taxinformation.cbic.gov.in/';
const MCA_RULES_URL = 'https://www.mca.gov.in/content/mca/global/en/acts-rules/ebooks/rules.html';

export const STATUTORY_RULES_LIBRARY = [
  {
    category: 'Income Tax Rules, 1962',
    badge: 'Direct Tax Rules',
    officialPortalUrl: IT_RULES_URL,
    rules: [
      { ruleNo: 'Rule 2A & Rule 3', title: 'HRA Exemption & Valuation of Salary Perquisites', detail: 'Prescribes the statutory formula for House Rent Allowance exemption u/s 10(13A) and valuation of employer perquisites.', url: IT_RULES_URL },
      { ruleNo: 'Rule 5 & Appendix I', title: 'Block-Wise Income Tax Depreciation Schedule', detail: 'Defines WDV depreciation rates across Buildings (5%/10%), Furniture (10%), Plant & Machinery (15%), and Computers (40%).', url: IT_RULES_URL },
      { ruleNo: 'Rule 6DD', title: 'Exceptions to Cash Payment Disallowance u/s 40A(3)', detail: 'Lists specific circumstances (agricultural produce, banking holidays, rural areas) where cash payments exceeding Rs. 10,000 (Rs. 35,000 for transport) are exempt from disallowance.', url: IT_RULES_URL },
      { ruleNo: 'Rule 6G', title: 'Tax Audit Report Forms (3CA, 3CB & 3CD)', detail: 'Mandates Form 3CA/3CB accompanied by the 44-clause Form 3CD statement under Section 44AB.', url: IT_RULES_URL },
      { ruleNo: 'Rule 11UA', title: 'Fair Market Value (FMV) of Unquoted Shares', detail: 'Prescribes Net Asset Value (NAV) and DCF valuation methodologies for share transfers and Sec 56(2)(x) compliance.', url: IT_RULES_URL },
      { ruleNo: 'Rule 31, 31A & 37BB', title: 'TDS Quarterly Statements & Foreign Remittance (15CA/15CB)', detail: 'Governs quarterly TDS/TCS return due dates, Form 16/16A timelines, and mandatory CA certificate in Form 15CB for foreign remittances exceeding Rs. 5 Lakh.', url: IT_RULES_URL },
      { ruleNo: 'Rule 114E', title: 'Statement of Financial Transactions (SFT) & AIS Reporting', detail: 'Specifies high-value transactions (cash deposits, property purchases > Rs. 30L, mutual funds, credit cards) reported into the taxpayer AIS.', url: IT_RULES_URL }
    ]
  },
  {
    category: 'Central Goods & Services Tax (CGST) Rules, 2017',
    badge: 'GST Rules',
    officialPortalUrl: CBIC_URL,
    rules: [
      { ruleNo: 'Rule 36(4)', title: '100% GSTR-2B Matching for Input Tax Credit (ITC)', detail: 'Input Tax Credit can be availed in GSTR-3B only when the supplier furnishes the invoice in GSTR-1/IFF and it reflects in GSTR-2B.', url: CBIC_URL },
      { ruleNo: 'Rule 37 & Rule 37A', title: '180-Day Vendor Payment Rule & Reversal for Non-Filing by Supplier', detail: 'Requires reversal of ITC with interest if vendor invoice value + tax is not paid within 180 days from invoice date, or if the supplier fails to pay tax in GSTR-3B.', url: CBIC_URL },
      { ruleNo: 'Rule 42 & Rule 43', title: 'Proportionate Reversal of Common Input Tax Credit', detail: 'Mandatory formula for monthly and annual reversal of common ITC where a business supplies both taxable and exempt goods/services.', url: CBIC_URL },
      { ruleNo: 'Rule 86A & Rule 88B', title: 'Credit Ledger Blocking & Net Cash Interest Calculation', detail: 'Governs provisional blocking of ITC (Rule 86A) and interest @ 18% p.a. calculated strictly on net cash liability (Rule 88B).', url: CBIC_URL },
      { ruleNo: 'Rule 138', title: 'e-Way Bill Generation, Validity (200 km/day) & Part-B Rules', detail: 'Mandatory for movement of goods exceeding Rs. 50,000. Validity is 1 day for every 200 km for regular cargo.', url: 'https://ewaybillgst.gov.in/' }
    ]
  },
  {
    category: 'Companies (Accounts & Audit) Rules & CARO 2020',
    badge: 'Audit & MCA Rules',
    officialPortalUrl: MCA_RULES_URL,
    rules: [
      { ruleNo: 'Rule 11(g) — Companies (Audit and Auditors) Rules', title: 'Mandatory Audit Trail (Edit Log) Reporting by Statutory Auditor', detail: 'Requires every company to use accounting software with a tamper-proof audit trail operating throughout the year and requires the Statutory Auditor to report specifically on compliance.', url: MCA_RULES_URL },
      { ruleNo: 'CARO 2020 (21 Clauses)', title: 'Companies (Auditor’s Report) Order, 2020', detail: 'Detailed reporting on PPE title deeds, quarterly working capital stock statements submitted to banks, and statutory dues defaults.', url: MCA_RULES_URL }
    ]
  }
];

const IT_PORTAL = 'https://www.incometax.gov.in/iec/foportal/';

export const TDS_RATES_CHART = [
  { section: 'Sec 192', nature: 'Payment of Salary to Employees', threshold: 'Basic Exemption Limit', indRate: 'Slab Rates', corpRate: 'N/A', url: 'https://incometaxindia.gov.in/Pages/tps/tds-on-salaries.aspx' },
  { section: 'Sec 194A', nature: 'Interest other than Interest on Securities (Bank/FD/Others)', threshold: 'Rs. 40,000 / Rs. 50,000 (Sr. Citizen)', indRate: '10%', corpRate: '10%', url: IT_PORTAL },
  { section: 'Sec 194C', nature: 'Payment to Contractors & Sub-Contractors', threshold: 'Rs. 30,000 (Single) / Rs. 1,00,000 (Annual)', indRate: '1%', corpRate: '2%', url: IT_PORTAL },
  { section: 'Sec 194H', nature: 'Commission or Brokerage', threshold: 'Rs. 15,000 per annum', indRate: '2%', corpRate: '2%', url: IT_PORTAL },
  { section: 'Sec 194I', nature: 'Rent of Land/Building (10%) or Machinery (2%)', threshold: 'Rs. 2,40,000 per annum', indRate: '10% / 2%', corpRate: '10% / 2%', url: IT_PORTAL },
  { section: 'Sec 194IA', nature: 'Transfer of Immovable Property', threshold: 'Rs. 50,00,000 (Rs. 50 Lakh)', indRate: '1%', corpRate: '1%', url: 'https://www.tdscpc.gov.in/' },
  { section: 'Sec 194J', nature: 'Professional (10%) or Technical Services (2%)', threshold: 'Rs. 30,000 per annum', indRate: '10% / 2%', corpRate: '10% / 2%', url: IT_PORTAL },
  { section: 'Sec 194Q', nature: 'Purchase of Goods (Buyer Turnover > Rs. 10 Cr)', threshold: 'Purchases > Rs. 50 Lakh', indRate: '0.1%', corpRate: '0.1%', url: IT_PORTAL },
  { section: 'Sec 194T', nature: 'Remuneration, Commission or Interest to Partner', threshold: 'Rs. 20,000 per annum', indRate: '10%', corpRate: 'N/A', url: IT_PORTAL }
];

const FORMS_URL = 'https://www.incometax.gov.in/iec/foportal/downloads/income-tax-forms';
const RETURNS_URL = 'https://www.incometax.gov.in/iec/foportal/downloads/income-tax-returns';

export const AUDIT_AND_PRESUMPTIVE_MATRIX = [
  { provision: 'Section 44AB — Mandatory Tax Audit (Business)', limit: 'Turnover > Rs. 1 Crore (Enhanced to Rs. 10 Crore if cash receipts & cash payments are each <= 5%)', dueDate: '30th September of Assessment Year (Form 3CA/3CB - 3CD)', applicability: 'Proprietorships, Partnership Firms, LLPs, and Companies', url: FORMS_URL },
  { provision: 'Section 44AB — Mandatory Tax Audit (Profession)', limit: 'Gross Professional Receipts > Rs. 50 Lakh (or > Rs. 75 Lakh if cash receipts <= 5% and profit declared < 50%)', dueDate: '30th September of Assessment Year', applicability: 'Doctors, Engineers, Architects, Legal, Accounting, Technical & Interior Professionals', url: FORMS_URL },
  { provision: 'Section 44AD — Presumptive Business Taxation', limit: 'Turnover up to Rs. 2 Crore (Enhanced to Rs. 3 Crore if cash receipts <= 5% of total turnover)', dueDate: 'Min. Deemed Profit: 6% on Digital/Bank Receipts & 8% on Cash Receipts', applicability: 'Resident Individuals, Resident HUFs & Resident Partnership Firms (Excluding LLPs)', url: RETURNS_URL },
  { provision: 'Section 44ADA — Presumptive Professional Taxation', limit: 'Gross Receipts up to Rs. 50 Lakh (Enhanced to Rs. 75 Lakh if cash receipts <= 5%)', dueDate: 'Min. Deemed Profit: 50% of Gross Professional Receipts', applicability: 'Resident Individuals & Resident Partnership Firms (Excluding LLPs) in notified professions', url: RETURNS_URL }
];

export const CII_TABLE = [
  { fy: '2001-02 (Base)', cii: 100 },
  { fy: '2010-11', cii: 167 },
  { fy: '2015-16', cii: 254 },
  { fy: '2020-21', cii: 301 },
  { fy: '2022-23', cii: 331 },
  { fy: '2023-24', cii: 348 },
  { fy: '2024-25', cii: 363 },
  { fy: '2025-26', cii: 376 }
];
