import { useState } from 'react';
import type { ChangeEvent, FormEvent } from 'react';
import { Briefcase, CheckCircle2, Users, GraduationCap, Handshake } from 'lucide-react';
import { careersFormEndpoint, firmEmail } from '../config/firmConfig';

const inputCls = 'w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-xl bg-white focus:outline-none focus:border-blue-700';
const labelCls = 'block text-xs font-bold text-slate-700 mb-1';
const MAX_RESUME_BYTES = 1024 * 1024; // 1 MB

const emptyForm = {
  firstName: '', lastName: '', email: '', mobile: '', gender: '', position: '', dob: '',
  qualification: '', portfolio: '', lastCompany: '', expYears: '', expMonths: '', comments: ''
};

export default function CareersPage() {
  const [form, setForm] = useState(emptyForm);
  const [resume, setResume] = useState<File | null>(null);
  const [error, setError] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'mailto'>('idle');

  const set = (k: keyof typeof emptyForm) => (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const onFile = (e: ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0] || null;
    if (f && f.size > MAX_RESUME_BYTES) {
      setError('Resume must be 1 MB or smaller.');
      setResume(null);
      e.target.value = '';
      return;
    }
    setError('');
    setResume(f);
  };

  const summary = () =>
    [
      `Name: ${form.firstName} ${form.lastName}`,
      `Email: ${form.email}`,
      `Mobile: ${form.mobile}`,
      `Gender: ${form.gender}`,
      `Date of Birth: ${form.dob}`,
      `Position applying for: ${form.position}`,
      `Highest Qualification: ${form.qualification}`,
      `Portfolio / LinkedIn: ${form.portfolio}`,
      `Last company: ${form.lastCompany}`,
      `Experience: ${form.expYears || 0} year(s) ${form.expMonths || 0} month(s)`,
      `Comments: ${form.comments}`,
      `Resume file: ${resume ? resume.name : '(please attach)'}`
    ].join('\n');

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!resume) {
      setError('Please upload your resume (max 1 MB).');
      return;
    }
    setError('');

    if (careersFormEndpoint) {
      try {
        setStatus('sending');
        const data = new FormData();
        Object.entries(form).forEach(([k, v]) => data.append(k, v));
        data.append('resume', resume);
        const res = await fetch(careersFormEndpoint, { method: 'POST', body: data, headers: { Accept: 'application/json' } });
        if (!res.ok) throw new Error('Request failed');
        setStatus('sent');
        setForm(emptyForm);
        setResume(null);
      } catch {
        setStatus('idle');
        setError('Could not send the application. Please email your resume to ' + firmEmail);
      }
      return;
    }

    const subject = `Job Application - ${form.position || 'Haranath & Associates'} - ${form.firstName} ${form.lastName}`;
    window.location.href = `mailto:${firmEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
      summary() + '\n\n(Please attach your resume to this email before sending.)'
    )}`;
    setStatus('mailto');
  };

  return (
    <section className="max-w-[96%] mx-auto px-4 sm:px-6 py-10 space-y-10">
      <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-800 mb-2">
            <Briefcase className="w-3.5 h-3.5" />
            Careers at Haranath & Associates
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#003366] tracking-tight">Grow Your Career With a Practicing Chartered Accountancy Firm</h1>
          <p className="text-sm sm:text-base text-slate-700 mt-3 leading-relaxed">
            We work across taxation, GST, statutory and bank audits, project finance and advisory. If you value learning, integrity and partner-led mentoring, we would like to meet you. Apply using the form below and we will contact you for a face-to-face interview.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
          {[
            { Icon: GraduationCap, title: 'Articleship & Training', text: 'Hands-on exposure to audit, tax and compliance assignments under experienced partners.' },
            { Icon: Users, title: 'Audit & Accounts Team', text: 'Opportunities for audit assistants, accountants and tax executives.' },
            { Icon: Handshake, title: 'Integrity First', text: 'A professional culture built on honest work, teamwork and continuous learning.' }
          ].map(({ Icon, title, text }) => (
            <div key={title} className="bg-white border border-slate-200 rounded-2xl p-5">
              <div className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center mb-3">
                <Icon className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-[#003366]">{title}</h3>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm">
        <h2 className="text-xl sm:text-2xl font-bold text-[#003366] text-center">Apply Here</h2>
        <p className="text-xs sm:text-sm text-slate-600 text-center mt-1 mb-6">Fields marked * are required.</p>

        {status === 'sent' && (
          <div className="mb-6 flex items-start gap-2 bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm rounded-xl p-4">
            <CheckCircle2 className="w-5 h-5 shrink-0" />
            Thank you! Your application has been submitted. We will contact you if your profile matches an opening.
          </div>
        )}
        {status === 'mailto' && (
          <div className="mb-6 bg-blue-50 border border-blue-200 text-blue-900 text-sm rounded-xl p-4">
            Your email app has opened with your details filled in. Please <strong>attach your resume</strong> and press Send to complete your application.
          </div>
        )}

        <form onSubmit={onSubmit} className="space-y-4 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div><label className={labelCls}>First name *</label><input required className={inputCls} value={form.firstName} onChange={set('firstName')} /></div>
            <div><label className={labelCls}>Last name *</label><input required className={inputCls} value={form.lastName} onChange={set('lastName')} /></div>
            <div><label className={labelCls}>Email *</label><input required type="email" className={inputCls} value={form.email} onChange={set('email')} /></div>
            <div><label className={labelCls}>Mobile No *</label><input required type="tel" className={inputCls} value={form.mobile} onChange={set('mobile')} /></div>
            <div>
              <label className={labelCls}>Gender *</label>
              <select required className={inputCls} value={form.gender} onChange={set('gender')}>
                <option value="">Select..</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other / Prefer not to say</option>
              </select>
            </div>
            <div><label className={labelCls}>Position you are applying for</label><input className={inputCls} value={form.position} onChange={set('position')} placeholder="e.g. Article Assistant, Audit Executive" /></div>
            <div><label className={labelCls}>Date of Birth *</label><input required type="date" className={inputCls} value={form.dob} onChange={set('dob')} /></div>
            <div><label className={labelCls}>Highest Qualification</label><input className={inputCls} value={form.qualification} onChange={set('qualification')} /></div>
            <div><label className={labelCls}>Portfolio website / LinkedIn</label><input type="url" className={inputCls} value={form.portfolio} onChange={set('portfolio')} placeholder="https://" /></div>
            <div>
              <label className={labelCls}>Upload Resume * (max size 1 MB)</label>
              <input type="file" accept=".pdf,.doc,.docx" onChange={onFile} className="w-full text-sm border border-slate-300 rounded-xl bg-white file:mr-3 file:px-4 file:py-2.5 file:border-0 file:bg-slate-900 file:text-white file:text-xs file:font-bold file:cursor-pointer" />
            </div>
            <div><label className={labelCls}>Last company you worked for</label><input className={inputCls} value={form.lastCompany} onChange={set('lastCompany')} /></div>
            <div>
              <label className={labelCls}>Years of Experience</label>
              <div className="grid grid-cols-2 gap-3">
                <select className={inputCls} value={form.expYears} onChange={set('expYears')}>
                  <option value="">Select Year</option>
                  {Array.from({ length: 31 }, (_, i) => <option key={i} value={i}>{i} {i === 1 ? 'year' : 'years'}</option>)}
                </select>
                <select className={inputCls} value={form.expMonths} onChange={set('expMonths')}>
                  <option value="">Select Month</option>
                  {Array.from({ length: 12 }, (_, i) => <option key={i} value={i}>{i} {i === 1 ? 'month' : 'months'}</option>)}
                </select>
              </div>
            </div>
          </div>
          <div>
            <label className={labelCls}>Reference / Comments / Questions</label>
            <textarea rows={4} className={inputCls} value={form.comments} onChange={set('comments')} />
          </div>

          {error && <div className="text-sm text-red-700 bg-red-50 border border-red-200 rounded-xl px-4 py-2.5">{error}</div>}

          <div className="text-center pt-2">
            <button type="submit" disabled={status === 'sending'} className="bg-slate-900 hover:bg-blue-900 disabled:opacity-60 text-white font-semibold text-sm px-10 py-3 rounded-xl transition-colors">
              {status === 'sending' ? 'Sending…' : 'Send Application'}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
