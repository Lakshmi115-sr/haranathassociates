import type { ComplianceDeadline } from '../types';

type Cat = ComplianceDeadline['category'];

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const MONTHLY_HORIZON_DAYS = 125; // recurring monthly items: next ~4 months
const LONG_HORIZON_DAYS = 366; // quarterly / annual items: next 12 months

const fy = (startYear: number) => `FY ${startYear}-${String(startYear + 1).slice(-2)}`;
const ay = (startYear: number) => `AY ${startYear}-${String(startYear + 1).slice(-2)}`;

export function generateUpcomingComplianceDates(): ComplianceDeadline[] {
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const out: ComplianceDeadline[] = [];
  const seen = new Set<string>();

  const fmt = (d: Date) => `${String(d.getDate()).padStart(2, '0')} ${MONTHS[d.getMonth()]} ${d.getFullYear()}`;
  const daysLeft = (d: Date) => Math.ceil((d.getTime() - today.getTime()) / 86400000);

  const add = (
    key: string,
    date: Date,
    horizon: number,
    category: Cat,
    title: string,
    formCode: string,
    periodLabel: string,
    description: string,
    penaltyNote: string
  ) => {
    const dl = daysLeft(date);
    if (dl < 0 || dl > horizon) return;
    const id = `${key}-${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
    if (seen.has(id)) return;
    seen.add(id);
    out.push({ id, exactDateStr: fmt(date), sortDate: date, daysLeft: dl, title, formCode, category, periodLabel, description, penaltyNote });
  };

  for (let offset = 0; offset <= 13; offset++) {
    const base = new Date(today.getFullYear(), today.getMonth() + offset, 1);
    const y = base.getFullYear();
    const m = base.getMonth(); // 0 = Jan
    const prev = new Date(y, m - 1, 1);
    const pl = `${MONTHS[prev.getMonth()]} ${prev.getFullYear()}`;
    const D = (day: number) => new Date(y, m, day);
    const lastDay30 = Math.min(30, new Date(y, m + 1, 0).getDate());
    const isQuarterStartMonth = m % 3 === 0; // Jan, Apr, Jul, Oct
    const H = MONTHLY_HORIZON_DAYS;
    const L = LONG_HORIZON_DAYS;

    // ------------------------------------------------------------------
    // MONTHLY RECURRING
    // ------------------------------------------------------------------
    if (m !== 3) {
      add('tds', D(7), H, 'Income Tax & TDS', `TDS / TCS Monthly Deposit (${pl})`, 'Challan ITNS 281', `For ${pl}`,
        `Due date for depositing Tax Deducted at Source (TDS) and Tax Collected at Source (TCS) for ${pl}.`,
        'Interest @ 1.5% per month u/s 201(1A) for late deposit.');
    } else {
      add('tds-mar', D(30), H, 'Income Tax & TDS', 'TDS / TCS Deposit for March (Year-End)', 'Challan ITNS 281', `For Mar ${y}`,
        'Last date for depositing TDS / TCS deducted in March (non-government deductors).',
        'Interest @ 1.5% per month u/s 201(1A) for late deposit.');
    }

    add('gstr78', D(10), H, 'GST', `GSTR-7 (GST TDS) & GSTR-8 (e-Commerce TCS) (${pl})`, 'GSTR-7 / GSTR-8', `For ${pl}`,
      'Monthly return for tax deductors at source and e-commerce operators collecting tax at source.',
      'Late fee u/s 47 per day of delay.');

    add('pt-ap', D(10), H, 'Labour & ROC', `Professional Tax (A.P.) Monthly Payment (${pl})`, 'PT Challan', `For ${pl}`,
      `Monthly remittance of Professional Tax deducted from employees' salaries for ${pl}.`,
      'Interest and penalty under the A.P. Tax on Professions Act.');

    add('gstr1', D(11), H, 'GST', `GSTR-1 Outward Supplies Return (${pl})`, 'Form GSTR-1', `For ${pl}`,
      'Monthly return of outward taxable supplies for regular taxpayers so buyers receive GSTR-2B credit on time.',
      'Late fee u/s 47 and buyer ITC reflection delay.');

    if (isQuarterStartMonth) {
      const qEnd = new Date(y, m, 0);
      add('gstr1-q', D(13), H, 'GST', `GSTR-1 Quarterly Return — QRMP (Quarter ended ${MONTHS[qEnd.getMonth()]} ${qEnd.getFullYear()})`, 'GSTR-1 (QRMP)', `Quarter ended ${MONTHS[qEnd.getMonth()]} ${qEnd.getFullYear()}`,
        'Quarterly return of outward supplies for taxpayers opted under the QRMP scheme.',
        'Late fee u/s 47 per day of delay.');
    } else {
      add('iff', D(13), H, 'GST', `GST IFF B2B Invoice Upload (${pl})`, 'QRMP IFF', `For ${pl}`,
        'Invoice Furnishing Facility (IFF) for taxpayers under the QRMP scheme to pass credit to B2B recipients.',
        'Ensures B2B recipients see invoices in GSTR-2B.');
    }

    add('gstr56', D(13), H, 'GST', `GSTR-5 (Non-Resident) & GSTR-6 (ISD) Returns (${pl})`, 'GSTR-5 / GSTR-6', `For ${pl}`,
      'Monthly returns for non-resident taxable persons and Input Service Distributors.',
      'Late fee u/s 47 per day of delay.');

    add('pf', D(15), H, 'Labour & ROC', `EPF & ESI Monthly Contribution (${pl})`, 'ECR Challan', `For ${pl}`,
      `Monthly remittance of Provident Fund (EPF) and Employee State Insurance (ESI) dues for ${pl}.`,
      'Disallowance of employee share u/s 36(1)(va) if delayed.');

    if (isQuarterStartMonth) {
      add('cmp08', D(18), H, 'GST', 'GST CMP-08 Quarterly Statement (Composition Dealers)', 'Form CMP-08', `Quarter ended ${MONTHS[new Date(y, m, 0).getMonth()]} ${new Date(y, m, 0).getFullYear()}`,
        'Quarterly statement-cum-challan for payment of tax by composition taxpayers.',
        'Interest u/s 50 and late fee for delay.');
    }

    add('gstr3b', D(20), H, 'GST', `GSTR-3B Summary Return & Tax Payment (${pl})`, 'Form GSTR-3B', `For ${pl}`,
      'Monthly summary GST return covering outward tax liability, eligible GSTR-2B ITC claim, and net tax payment.',
      'Interest @ 18% p.a. u/s 50 on net cash liability.');

    if (isQuarterStartMonth) {
      add('gstr3b-q', D(22), H, 'GST', `GSTR-3B Quarterly Return — QRMP (Quarter ended ${MONTHS[new Date(y, m, 0).getMonth()]} ${new Date(y, m, 0).getFullYear()})`, 'GSTR-3B (QRMP)', `Quarter ended ${MONTHS[new Date(y, m, 0).getMonth()]} ${new Date(y, m, 0).getFullYear()}`,
        'Quarterly GSTR-3B for QRMP taxpayers in Andhra Pradesh (22nd of the month following the quarter).',
        'Interest @ 18% p.a. u/s 50 on net cash liability.');
    } else {
      add('pmt06', D(25), H, 'GST', `GST PMT-06 Monthly Tax Payment — QRMP (${pl})`, 'Challan PMT-06', `For ${pl}`,
        'Monthly payment of tax by QRMP taxpayers in the first two months of the quarter.',
        'Interest @ 18% p.a. u/s 50 on delayed payment.');
    }

    add('tds-prop', D(lastDay30), H, 'Income Tax & TDS', `TDS on Property, Rent (Individuals) & Contractor Payments — 26QB / 26QC / 26QD (${pl})`, 'Form 26QB / 26QC / 26QD', `For ${pl}`,
      'Challan-cum-statement for TDS on property purchase (194-IA), rent paid by individuals/HUFs (194-IB) and payments to resident contractors/professionals by individuals/HUFs (194M).',
      'Interest u/s 201(1A) and late fee u/s 234E.');

    // ------------------------------------------------------------------
    // QUARTERLY
    // ------------------------------------------------------------------
    const quarterMap: Record<number, { q: string; fyStart: number; range: string }> = {
      6: { q: 'Q1', fyStart: y, range: 'Apr–Jun' },
      9: { q: 'Q2', fyStart: y, range: 'Jul–Sep' },
      0: { q: 'Q3', fyStart: y - 1, range: 'Oct–Dec' },
      4: { q: 'Q4', fyStart: y - 1, range: 'Jan–Mar' }
    };
    const qi = quarterMap[m];

    if (qi) {
      const lastDay = m === 4 ? 31 : m === 6 ? 31 : m === 9 ? 31 : 31;
      add('tds-ret', D(lastDay), L, 'Income Tax & TDS', `Quarterly TDS Return — ${qi.q} (${qi.range})`, 'Form 24Q / 26Q / 27Q', `${qi.q} ${fy(qi.fyStart)}`,
        `Quarterly statement of tax deducted at source for ${qi.range} (${fy(qi.fyStart)}).`,
        'Late fee u/s 234E @ Rs. 200 per day + penalty u/s 271H.');
      add('tcs-ret', D(15), L, 'Income Tax & TDS', `Quarterly TCS Return — ${qi.q} (${qi.range})`, 'Form 27EQ', `${qi.q} ${fy(qi.fyStart)}`,
        `Quarterly statement of tax collected at source for ${qi.range} (${fy(qi.fyStart)}).`,
        'Late fee u/s 234E @ Rs. 200 per day + penalty u/s 271H.');
    }

    const certMap: Record<number, string> = { 7: 'Q1 (Apr–Jun)', 10: 'Q2 (Jul–Sep)', 1: 'Q3 (Oct–Dec)', 5: 'Q4 (Jan–Mar)' };
    if (certMap[m]) {
      add('tds-cert', D(15), L, 'Income Tax & TDS', `TDS Certificates (Form 16A / 27D) — ${certMap[m]}`, 'Form 16A / 27D', certMap[m],
        'Issue of quarterly TDS / TCS certificates to deductees and collectees.',
        'Rs. 100 per day of delay u/s 272A(2)(g).');
    }

    // ------------------------------------------------------------------
    // ANNUAL & FIXED MILESTONES (month index, day)
    // ------------------------------------------------------------------
    const fixed = (mm: number, dd: number, fn: () => void) => { if (m === mm) { void dd; fn(); } };

    fixed(2, 15, () => add('adv4', D(15), L, 'Income Tax & TDS', 'Advance Tax — 4th & Final Installment (100%)', 'Challan ITNS 280', fy(y - 1),
      'Final installment (100% of estimated annual Income Tax liability) for the financial year.', 'Interest @ 1% p.m. u/s 234B & 234C for default.'));
    fixed(2, 31, () => add('taxsave', D(31), L, 'Income Tax & TDS', 'Last Date for Tax-Saving Investments (80C / 80D / 80G)', 'Old Regime', fy(y - 1),
      'Final date to complete eligible investments and payments to claim deductions for the financial year under the Old Regime.', 'Deduction lost if missed.'));
    fixed(3, 30, () => add('msme1a', D(30), L, 'Labour & ROC', 'MSME Form-1 — Half-Yearly Return (Oct–Mar)', 'Form MSME-1', `Oct ${y - 1} – Mar ${y}`,
      'Half-yearly return of outstanding payments to micro and small enterprise suppliers beyond 45 days.', 'Penalty under Companies Act for non-filing.'));
    fixed(3, 30, () => add('gstr4', D(30), L, 'GST', 'GSTR-4 Annual Return (Composition Dealers)', 'Form GSTR-4', fy(y - 1),
      'Annual return for taxpayers registered under the composition scheme.', 'Late fee u/s 47 per day of delay.'));
    fixed(4, 30, () => add('llp11', D(30), L, 'Labour & ROC', 'LLP Annual Return', 'LLP Form 11', fy(y - 1),
      'Annual Return of Limited Liability Partnerships for the financial year.', 'Additional fee of Rs. 100 per day of delay.'));
    fixed(4, 31, () => add('sft', D(31), L, 'Annual & Audit', 'Statement of Financial Transactions (SFT)', 'Form 61A / 61B', fy(y - 1),
      'Annual reporting of specified high-value transactions by banks, registrars, mutual funds and other reporting entities.', 'Penalty u/s 271FA per day of default.'));
    fixed(5, 15, () => add('adv1', D(15), L, 'Income Tax & TDS', 'Advance Tax — 1st Installment (15% Cumulative)', 'Challan ITNS 280', fy(y),
      'Payment of first installment (15% of estimated annual Income Tax liability).', 'Interest @ 1% p.m. u/s 234C for deferment.'));
    fixed(5, 15, () => add('form16', D(15), L, 'Income Tax & TDS', 'Form 16 — Salary TDS Certificate to Employees', 'Form 16', fy(y - 1),
      'Last date for employers to issue Form 16 (Part A & B) to employees for the previous financial year.', 'Rs. 100 per day of delay u/s 272A(2)(g).'));
    fixed(5, 30, () => add('dpt3', D(30), L, 'Labour & ROC', 'Return of Deposits (DPT-3)', 'Form DPT-3', fy(y - 1),
      'Annual return of deposits / outstanding receipts of money for companies.', 'Penalty under Companies Act for delay.'));
    fixed(6, 31, () => add('itr1', D(31), L, 'Annual & Audit', 'Income Tax Return (ITR) Filing — Non-Audit Taxpayers', 'ITR-1 / ITR-2 / ITR-4', ay(y),
      'Annual due date for filing Income Tax Returns for individuals, salaried taxpayers, and presumptive businesses.', 'Late fee up to Rs. 5,000 u/s 234F + interest u/s 234A.'));
    fixed(8, 15, () => add('adv2', D(15), L, 'Income Tax & TDS', 'Advance Tax — 2nd Installment (45% Cumulative)', 'Challan ITNS 280', fy(y),
      'Payment of second installment (up to 45% of estimated annual Income Tax liability).', 'Interest @ 1% per month for deferment u/s 234C.'));
    fixed(8, 30, () => add('taxaudit', D(30), L, 'Annual & Audit', 'Tax Audit Report Filing (Section 44AB)', 'Form 3CA / 3CB - 3CD', ay(y),
      'Statutory deadline for uploading Tax Audit Report u/s 44AB certified by Chartered Accountant.', 'Penalty u/s 271B up to 0.5% of turnover (Max Rs. 1.50 Lakh).'));
    fixed(8, 30, () => add('trust', D(30), L, 'Annual & Audit', 'Audit Report for Trusts & Institutions (Section 12A / 10(23C))', 'Form 10B / 10BB', ay(y),
      'Audit report of charitable trusts, societies and educational institutions, to be filed one month before the ITR due date.', 'Loss of exemption / additional tax for non-filing.'));
    fixed(8, 30, () => add('dir3', D(30), L, 'Labour & ROC', 'Director KYC (Annual)', 'Form DIR-3 KYC', fy(y),
      'Annual KYC verification for all directors holding a DIN.', 'Late fee of Rs. 5,000 and DIN deactivation.'));
    fixed(9, 15, () => add('adt1', D(15), L, 'Labour & ROC', 'Appointment of Auditor — Intimation (within 15 days of AGM)', 'Form ADT-1', fy(y - 1),
      'Notice of appointment of statutory auditor to the Registrar, within 15 days of the AGM (assuming AGM on 30 Sep).', 'Additional fee for delay.'));
    fixed(9, 30, () => add('msme1b', D(31), L, 'Labour & ROC', 'MSME Form-1 — Half-Yearly Return (Apr–Sep)', 'Form MSME-1', `Apr – Sep ${y}`,
      'Half-yearly return of outstanding payments to micro and small enterprise suppliers beyond 45 days.', 'Penalty under Companies Act for non-filing.'));
    fixed(9, 30, () => add('itr3', D(31), L, 'Annual & Audit', 'Income Tax Return (ITR) — Tax Audit & Corporate Assessees', 'ITR-3 / ITR-5 / ITR-6', ay(y),
      'Due date for filing Income Tax Returns for companies, LLPs, firms, and proprietary businesses subject to audit.', 'Late fee u/s 234F + loss carry-forward restrictions.'));
    fixed(9, 31, () => add('3ceb', D(31), L, 'Annual & Audit', 'Transfer Pricing Report (Section 92E)', 'Form 3CEB', ay(y),
      'Accountant\'s report on international / specified domestic transactions with associated enterprises.', 'Penalty u/s 271BA of Rs. 1 Lakh.'));
    fixed(9, 30, () => add('aoc4', D(30), L, 'Labour & ROC', 'Financial Statements Filing (within 30 days of AGM)', 'Form AOC-4', fy(y - 1),
      'Filing of audited financial statements with the Registrar (assuming AGM on 30 Sep).', 'Additional fee of Rs. 100 per day of delay.'));
    fixed(9, 30, () => add('llp8', D(30), L, 'Labour & ROC', 'LLP Statement of Account & Solvency', 'LLP Form 8', fy(y - 1),
      'Annual Statement of Account and Solvency of Limited Liability Partnerships.', 'Additional fee of Rs. 100 per day of delay.'));
    fixed(10, 29, () => add('mgt7', D(29), L, 'Labour & ROC', 'Annual Return of Company (within 60 days of AGM)', 'Form MGT-7 / 7A', fy(y - 1),
      'Annual return of the company, filed within 60 days of the AGM (assuming AGM on 30 Sep).', 'Additional fee of Rs. 100 per day of delay.'));
    fixed(10, 30, () => add('itr92e', D(30), L, 'Annual & Audit', 'ITR Filing (Transfer Pricing / Sec 92E Cases)', 'ITR-6 / Form 3CEB', ay(y),
      'Due date for furnishing Income Tax Return for assessees required to furnish Form 3CEB under Section 92E.', 'Late fee u/s 234F + Interest u/s 234A.'));
    fixed(10, 30, () => add('itc164', D(30), L, 'GST', 'Last Date to Claim Previous-Year ITC (Section 16(4))', 'GSTR-3B', fy(y - 1),
      'Last date to claim Input Tax Credit for invoices of the previous financial year (or the date of filing the annual return, if earlier).', 'ITC permanently lost if missed.'));
    fixed(11, 15, () => add('adv3', D(15), L, 'Income Tax & TDS', 'Advance Tax — 3rd Installment (75% Cumulative)', 'Challan ITNS 280', fy(y),
      'Payment of third installment (up to 75% of estimated annual Income Tax liability).', 'Interest @ 1% per month for deferment u/s 234C.'));
    fixed(11, 31, () => add('gstr9', D(31), L, 'Annual & Audit', 'GST Annual Return & Reconciliation Statement', 'GSTR-9 & GSTR-9C', fy(y - 1),
      'Filing of Annual GST Return (GSTR-9) and Self-Certified Audit Reconciliation Statement (GSTR-9C).', 'Mandatory turnover & ITC reconciliation across books vs GST portal.'));
    fixed(11, 31, () => add('belated', D(31), L, 'Annual & Audit', 'Belated & Revised Income Tax Return Deadline', 'Sec 139(4) / 139(5)', ay(y),
      'Final statutory date to file a Belated ITR or revise an already filed ITR for the current Assessment Year.', 'Post 31 Dec, only ITR-U with additional tax applies.'));
  }

  return out.sort((a, b) => a.sortDate.getTime() - b.sortDate.getTime() || a.title.localeCompare(b.title));
}
