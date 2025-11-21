import Spline from '@splinetool/react-spline';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(56,189,248,0.15),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(59,130,246,0.12),transparent_60%)]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-8 pb-12 md:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="relative z-10">
            <p className="inline-flex items-center gap-2 rounded-full bg-slate-800/70 ring-1 ring-white/10 px-3 py-1 text-xs font-medium text-slate-200 mb-4">
              Inclusive • Accessible • Playful Learning
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
              BharatSign+
            </h1>
            <p className="mt-4 text-lg text-slate-200 leading-relaxed max-w-xl">
              Gamified Learning Platform for Indian Sign Language (ISL) Education. Designed to boost motivation and make learning inclusive through quizzes, challenges, and accessibility-first design.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link to="/features" className="inline-flex items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 text-white px-5 py-3 font-medium shadow-lg shadow-blue-500/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60">
                Explore Features
              </Link>
              <Link to="/about" className="inline-flex items-center justify-center rounded-lg bg-slate-800/80 text-slate-100 px-5 py-3 font-medium ring-1 ring-white/10 hover:bg-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60">
                About the Project
              </Link>
            </div>
          </div>

          <div className="relative h-[360px] sm:h-[460px] md:h-[520px] lg:h-[560px] xl:h-[620px] w-full">
            <div className="absolute inset-0 rounded-2xl overflow-hidden ring-1 ring-white/10 bg-slate-900">
              <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
