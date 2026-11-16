import { useMemo, useState } from 'react';

type CalcType = 'itr' | 'gst' | 'hra' | 'emi' | 'presumptive' | 'gratuity';

const inr = (n: number) => `₹${Math.round(n).toLocaleString('en-IN')}`;
const inputCls = 'w-full px-3 py-2 text-sm border border-slate-300 rounded-xl';
const labelCls = 'block text-xs font-bold text-slate-700 mb-1';

export default function CalculatorsSuite() {
  const [activeCalc, setActiveCalc] = useState<CalcType>('itr');

  const [grossIncome, setGrossIncome] = useState(1500000);
  const [deductions80C, setDeductions80C] = useState(150000);
  const [deductions80D, setDeductions80D] = useState(50000);
  const [hraExemption, setHraExemption] = useState(120000);

  const [gstAmount, setGstAmount] = useState(100000);
  const [gstRate, setGstRate] = useState(18);
  const [gstMode, setGstMode] = useState<'exclusive' | 'inclusive'>('exclusive');

  const [basicSalary, setBasicSalary] = useState(600000);
  const [hraReceived, setHraReceived] = useState(240000);
  const [rentPaid, setRentPaid] = useState(180000);

  const [loanPrincipal, setLoanPrincipal] = useState(2500000);
  const [loanRate, setLoanRate] = useState(8.5);
  const [loanYears, setLoanYears] = useState(10);

  const [presumptiveTurnover, setPresumptiveTurnover] = useState(12000000);
  const [digitalReceiptsPct, setDigitalReceiptsPct] = useState(80);

  const [gratuityBasic, setGratuityBasic] = useState(80000);
  const [gratuityYears, setGratuityYears] = useState(12);

  const taxComparison = useMemo(() => {
    const newTaxable = Math.max(0, grossIncome - 75000);
    let newTax = 0;
    if (newTaxable > 1200000) {
      if (newTaxable > 400000) newTax += Math.min(newTaxable - 400000, 400000) * 0.05;
      if (newTaxable > 800000) newTax += Math.min(newTaxable - 800000, 400000) * 0.1;
      if (newTaxable > 1200000) newTax += Math.min(newTaxable - 1200000, 400000) * 0.15;
      if (newTaxable > 1600000) newTax += Math.min(newTaxable - 1600000, 400000) * 0.2;
      if (newTaxable > 2000000) newTax += Math.min(newTaxable - 2000000, 400000) * 0.25;
      if (newTaxable > 2400000) newTax += (newTaxable - 2400000) * 0.3;
    }
    const totalNewTax = Math.round(newTax * 1.04);

    const oldTaxable = Math.max(0, grossIncome - 50000 - deductions80C - deductions80D - hraExemption);
    let oldTax = 0;
    if (oldTaxable > 500000) {
      if (oldTaxable > 250000) oldTax += Math.min(oldTaxable - 250000, 250000) * 0.05;
      if (oldTaxable > 500000) oldTax += Math.min(oldTaxable - 500000, 500000) * 0.2;
      if (oldTaxable > 1000000) oldTax += (oldTaxable - 1000000) * 0.3;
    }
    const totalOldTax = Math.round(oldTax * 1.04);

    return {
      totalNewTax,
      totalOldTax,
      recommended: totalNewTax <= totalOldTax ? 'New Tax Regime' : 'Old Tax Regime',
      savings: Math.abs(totalOldTax - totalNewTax)
    };
  }, [grossIncome, deductions80C, deductions80D, hraExemption]);

  const tabs: { id: CalcType; label: string }[] = [
    { id: 'itr', label: 'Income Tax (Old vs New Regime)' },
    { id: 'gst', label: 'GST Calculator' },
    { id: 'hra', label: 'HRA Exemption (Rule 2A)' },
    { id: 'presumptive', label: 'Sec 44AD Presumptive Profit' },
    { id: 'emi', label: 'Business Loan / EMI' },
    { id: 'gratuity', label: 'Gratuity Calculator' }
  ];

  // GST
  const gstTaxable = gstMode === 'exclusive' ? gstAmount : gstAmount / (1 + gstRate / 100);
  const gstTax = gstMode === 'exclusive' ? (gstAmount * gstRate) / 100 : gstAmount - gstTaxable;
  const gstTotal = gstTaxable + gstTax;

  // HRA
  const rentMinus10Pct = Math.max(0, rentPaid - basicSalary * 0.1);
  const exemptHra = Math.min(hraReceived, rentMinus10Pct, basicSalary * 0.4);
  const taxableHra = Math.max(0, hraReceived - exemptHra);

  // Presumptive
  const digitalPart = (presumptiveTurnover * digitalReceiptsPct) / 100;
  const cashPart = presumptiveTurnover - digitalPart;
  const deemedProfit = digitalPart * 0.06 + cashPart * 0.08;

  // EMI
  const r = loanRate / 12 / 100;
  const n = loanYears * 12;
  const emi = r > 0 ? (loanPrincipal * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1) : loanPrincipal / n;

  return (
    <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm">
      <div className="flex flex-wrap gap-2 pb-6 border-b border-slate-200 mb-6">
        {tabs.map((c) => (
          <button
            key={c.id}
            onClick={() => setActiveCalc(c.id)}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeCalc === c.id ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            {c.label}
          </button>
        ))}
      </div>

      {activeCalc === 'itr' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-4">
            <h3 className="text-lg font-bold text-[#003366]">Income Tax Regime Comparator (AY 2026–27)</h3>
            <div>
              <label className={labelCls}>Gross Annual Income (Rs.)</label>
              <input type="number" value={grossIncome} onChange={(e) => setGrossIncome(Number(e.target.value))} className={inputCls} />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div>
                <label className={labelCls}>Sec 80C (Rs.)</label>
                <input type="number" value={deductions80C} onChange={(e) => setDeductions80C(Number(e.target.value))} className={inputCls} />
              </div>
              <div>
                <label className={labelCls}>Sec 80D (Rs.)</label>
                <input type="number" value={deductions80D} onChange={(e) => setDeductions80D(Number(e.target.value))} className={inputCls} />
              </div>
              <div>
                <label className={labelCls}>HRA / 24(b) (Rs.)</label>
                <input type="number" value={hraExemption} onChange={(e) => setHraExemption(Number(e.target.value))} className={inputCls} />
              </div>
            </div>
          </div>
          <div className="lg:col-span-6 bg-slate-900 text-white rounded-2xl p-6 space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-800 p-4 rounded-xl">
                <div className="text-xs text-slate-400">New Regime Tax</div>
                <div className="text-xl font-extrabold text-blue-400 mt-1">{inr(taxComparison.totalNewTax)}</div>
              </div>
              <div className="bg-slate-800 p-4 rounded-xl">
                <div className="text-xs text-slate-400">Old Regime Tax</div>
                <div className="text-xl font-extrabold text-white mt-1">{inr(taxComparison.totalOldTax)}</div>
              </div>
            </div>
            <div className="bg-blue-950 border border-blue-700 rounded-xl p-4">
              <div className="text-xs font-bold text-blue-300 uppercase">Recommended Option</div>
              <div className="text-base font-bold text-white mt-0.5">
                {taxComparison.recommended} saves you {inr(taxComparison.savings)}
              </div>
            </div>
          </div>
        </div>
      )}

      {activeCalc === 'gst' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-4">
            <h3 className="text-lg font-bold text-[#003366]">GST Inclusive & Exclusive Calculator</h3>
            <div>
              <label className={labelCls}>Invoice Amount (Rs.)</label>
              <input type="number" value={gstAmount} onChange={(e) => setGstAmount(Number(e.target.value))} className={inputCls} />
            </div>
            <div className="flex gap-2">
              {[5, 12, 18, 28].map((rt) => (
                <button
                  key={rt}
                  onClick={() => setGstRate(rt)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold ${gstRate === rt ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-700'}`}
                >
                  {rt}% GST
                </button>
              ))}
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setGstMode('exclusive')}
                className={`px-4 py-2 rounded-xl text-xs font-bold ${gstMode === 'exclusive' ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-700'}`}
              >
                GST Exclusive
              </button>
              <button
                onClick={() => setGstMode('inclusive')}
                className={`px-4 py-2 rounded-xl text-xs font-bold ${gstMode === 'inclusive' ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-700'}`}
              >
                GST Inclusive
              </button>
            </div>
          </div>
          <div className="lg:col-span-6 bg-slate-900 text-white rounded-2xl p-6 space-y-3">
            <div className="flex justify-between text-sm"><span className="text-slate-400">Taxable Value:</span><span className="font-bold">{inr(gstTaxable)}</span></div>
            <div className="flex justify-between text-sm"><span className="text-slate-400">CGST ({gstRate / 2}%):</span><span className="font-bold">{inr(gstTax / 2)}</span></div>
            <div className="flex justify-between text-sm"><span className="text-slate-400">SGST ({gstRate / 2}%):</span><span className="font-bold">{inr(gstTax / 2)}</span></div>
            <div className="pt-3 border-t border-slate-700 flex justify-between text-lg font-extrabold text-blue-400">
              <span>Total Invoice Value:</span><span>{inr(gstTotal)}</span>
            </div>
          </div>
        </div>
      )}

      {activeCalc === 'hra' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-4">
            <h3 className="text-lg font-bold text-[#003366]">HRA Exemption Calculator (Sec 10(13A) & Rule 2A)</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div>
                <label className={labelCls}>Annual Basic + DA</label>
                <input type="number" value={basicSalary} onChange={(e) => setBasicSalary(Number(e.target.value))} className={inputCls} />
              </div>
              <div>
                <label className={labelCls}>Annual HRA Received</label>
                <input type="number" value={hraReceived} onChange={(e) => setHraReceived(Number(e.target.value))} className={inputCls} />
              </div>
              <div>
                <label className={labelCls}>Annual Rent Paid</label>
                <input type="number" value={rentPaid} onChange={(e) => setRentPaid(Number(e.target.value))} className={inputCls} />
              </div>
            </div>
          </div>
          <div className="lg:col-span-6 bg-slate-900 text-white rounded-2xl p-6 space-y-3">
            <div className="flex justify-between text-sm"><span className="text-slate-400">Exempt HRA u/s 10(13A):</span><span className="font-bold text-emerald-400">{inr(exemptHra)}</span></div>
            <div className="flex justify-between text-sm"><span className="text-slate-400">Taxable HRA Component:</span><span className="font-bold text-white">{inr(taxableHra)}</span></div>
          </div>
        </div>
      )}

      {activeCalc === 'presumptive' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-4">
            <h3 className="text-lg font-bold text-[#003366]">Section 44AD Presumptive Business Income Calculator</h3>
            <div>
              <label className={labelCls}>Annual Business Turnover (Rs.)</label>
              <input type="number" value={presumptiveTurnover} onChange={(e) => setPresumptiveTurnover(Number(e.target.value))} className={inputCls} />
            </div>
            <div>
              <label className={labelCls}>Digital / Bank Receipts Percentage ({digitalReceiptsPct}%)</label>
              <input type="range" min={0} max={100} value={digitalReceiptsPct} onChange={(e) => setDigitalReceiptsPct(Number(e.target.value))} className="w-full" />
            </div>
          </div>
          <div className="lg:col-span-6 bg-slate-900 text-white rounded-2xl p-6 space-y-3">
            <div className="flex justify-between text-sm"><span className="text-slate-400">6% on Digital Turnover:</span><span className="font-bold">{inr(digitalPart * 0.06)}</span></div>
            <div className="flex justify-between text-sm"><span className="text-slate-400">8% on Cash Turnover:</span><span className="font-bold">{inr(cashPart * 0.08)}</span></div>
            <div className="pt-3 border-t border-slate-700 flex justify-between text-lg font-extrabold text-blue-400">
              <span>Min. Presumptive Profit u/s 44AD:</span><span>{inr(deemedProfit)}</span>
            </div>
          </div>
        </div>
      )}

      {activeCalc === 'emi' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-4">
            <h3 className="text-lg font-bold text-[#003366]">Term Loan / Working Capital EMI Calculator</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div>
                <label className={labelCls}>Loan Amount (Rs.)</label>
                <input type="number" value={loanPrincipal} onChange={(e) => setLoanPrincipal(Number(e.target.value))} className={inputCls} />
              </div>
              <div>
                <label className={labelCls}>Interest Rate (% p.a.)</label>
                <input type="number" step="0.1" value={loanRate} onChange={(e) => setLoanRate(Number(e.target.value))} className={inputCls} />
              </div>
              <div>
                <label className={labelCls}>Tenure (Years)</label>
                <input type="number" value={loanYears} onChange={(e) => setLoanYears(Number(e.target.value))} className={inputCls} />
              </div>
            </div>
          </div>
          <div className="lg:col-span-6 bg-slate-900 text-white rounded-2xl p-6 space-y-3">
            <div className="flex justify-between text-lg font-extrabold text-blue-400">
              <span>Monthly EMI:</span>
              <span>{n > 0 ? inr(emi) : '₹0'} / month</span>
            </div>
          </div>
        </div>
      )}

      {activeCalc === 'gratuity' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-4">
            <h3 className="text-lg font-bold text-[#003366]">Gratuity Exemption Calculator (Sec 10(10))</h3>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className={labelCls}>Last Drawn Monthly Basic + DA</label>
                <input type="number" value={gratuityBasic} onChange={(e) => setGratuityBasic(Number(e.target.value))} className={inputCls} />
              </div>
              <div>
                <label className={labelCls}>Completed Years of Service</label>
                <input type="number" value={gratuityYears} onChange={(e) => setGratuityYears(Number(e.target.value))} className={inputCls} />
              </div>
            </div>
          </div>
          <div className="lg:col-span-6 bg-slate-900 text-white rounded-2xl p-6">
            <div className="flex justify-between text-lg font-extrabold text-blue-400">
              <span>Statutory Gratuity (15/26 Formula):</span>
              <span>{inr((gratuityBasic * 15 * gratuityYears) / 26)}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
