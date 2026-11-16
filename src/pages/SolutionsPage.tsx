import { CheckCircle2, FileText } from 'lucide-react';
import { CLIENT_PROBLEMS } from '../data/firmData';
import type { ProblemSolution } from '../types';

interface Props {
  selectedProblem: ProblemSolution | null;
  setSelectedProblem: (p: ProblemSolution) => void;
  onWhatsApp: (topic?: string) => void;
}

export default function SolutionsPage({ selectedProblem, setSelectedProblem, onWhatsApp }: Props) {
  const activeProblem = selectedProblem || CLIENT_PROBLEMS[0];

  return (
    <section className="max-w-[96%] mx-auto px-4 sm:px-6 py-10">
      <div className="mb-8">
        <div className="text-xs font-bold uppercase tracking-wider text-blue-800 mb-1">Dedicated Client Advisory Pages</div>
        <h1 className="text-2xl sm:text-3xl font-bold text-[#003366]">Problem-Specific Representation & Financial Solutions</h1>
      </div>

      <div className="flex flex-wrap gap-2 mb-8">
        {CLIENT_PROBLEMS.map((problem) => (
          <button
            key={problem.id}
            onClick={() => setSelectedProblem(problem)}
            className={`px-4 py-2.5 rounded-xl text-xs font-bold border transition-all ${
              activeProblem.id === problem.id
                ? 'bg-slate-900 text-white border-slate-900'
                : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
            }`}
          >
            {problem.question}
          </button>
        ))}
      </div>

      <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8 space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-blue-800 bg-blue-50 border border-blue-200 px-3 py-1 rounded-full">
                {activeProblem.category}
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#003366] mt-3">{activeProblem.question}</h2>
              <p className="text-sm sm:text-base text-slate-700 mt-3 leading-relaxed">{activeProblem.detailedOverview}</p>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 p-6">
              <h3 className="text-base font-bold text-[#003366] mb-4">How CA Haranath Babu & Our Practice Resolve This Matter:</h3>
              <ul className="space-y-3">
                {activeProblem.howWeHelp.map((step, i) => (
                  <li key={i} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                    <span className="w-5 h-5 rounded-full bg-slate-900 text-white text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-4 space-y-5">
            <div className="bg-white rounded-2xl border border-slate-200 p-6">
              <h3 className="text-sm font-bold text-[#003366] mb-3 flex items-center gap-2">
                <FileText className="w-4 h-4 text-blue-800" />
                Documents Required for Review
              </h3>
              <ul className="space-y-2.5">
                {activeProblem.documentsRequired.map((doc, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-slate-600">
                    <CheckCircle2 className="w-4 h-4 text-blue-800 shrink-0 mt-0.5" />
                    <span>{doc}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-slate-900 text-white rounded-2xl p-6 space-y-4">
              <h3 className="text-base font-bold">Schedule a Confidential Review</h3>
              <button
                onClick={() => onWhatsApp(activeProblem.question)}
                className="w-full bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold py-3 rounded-xl transition-colors"
              >
                Book Consultation via WhatsApp
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
