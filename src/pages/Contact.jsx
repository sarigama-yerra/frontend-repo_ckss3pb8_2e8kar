import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setStatus('Thanks! Your message has been recorded for this demo.');
  }

  return (
    <main className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">Contact</h1>
      <p className="mt-3 text-slate-300">For educators, collaborators, and institutions interested in BharatSign+.</p>

      <form onSubmit={handleSubmit} className="mt-8 space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-slate-200">Name</label>
          <input id="name" name="name" required value={form.name} onChange={handleChange} className="mt-1 w-full rounded-lg bg-slate-900/60 text-white ring-1 ring-white/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400" />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-slate-200">Email</label>
          <input id="email" type="email" name="email" required value={form.email} onChange={handleChange} className="mt-1 w-full rounded-lg bg-slate-900/60 text-white ring-1 ring-white/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400" />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-slate-200">Message</label>
          <textarea id="message" name="message" rows="5" required value={form.message} onChange={handleChange} className="mt-1 w-full rounded-lg bg-slate-900/60 text-white ring-1 ring-white/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400" />
        </div>
        <button type="submit" className="inline-flex items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 text-white px-5 py-3 font-medium shadow-lg shadow-blue-500/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60">
          Send Message
        </button>
      </form>

      {status && <p className="mt-4 text-green-300">{status}</p>}

      <div className="mt-10 rounded-2xl bg-slate-900/60 ring-1 ring-white/10 p-6">
        <h2 className="text-xl font-semibold text-white">Collaboration</h2>
        <p className="mt-2 text-slate-300 text-sm">
          We welcome collaboration with ISLRTC, institutions, Deaf educators, interpreters, and accessibility professionals. Let’s build an inclusive learning experience together.
        </p>
      </div>
    </main>
  );
}
