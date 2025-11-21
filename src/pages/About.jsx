export default function About() {
  return (
    <main className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">About the Project</h1>
      <p className="mt-4 text-slate-300 leading-relaxed">
        BharatSign+ is a Gamified Learning Platform for Indian Sign Language (ISL) designed to make language learning engaging, inclusive, and accessible. Current platforms often lack interactivity and motivation; BharatSign+ addresses this by introducing gamification mechanics and accessibility-first design.
      </p>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="rounded-2xl bg-slate-900/60 ring-1 ring-white/10 p-6">
          <h2 className="text-xl font-semibold text-white">Problem Statement</h2>
          <p className="mt-2 text-slate-300 text-sm leading-relaxed">
            Many ISL learning tools lack interactive content and structured progression. This results in low learner engagement and limited measurable outcomes. There is also a gap in accessibility practices and inclusive content design.
          </p>
        </div>
        <div className="rounded-2xl bg-slate-900/60 ring-1 ring-white/10 p-6">
          <h2 className="text-xl font-semibold text-white">Importance of ISL</h2>
          <p className="mt-2 text-slate-300 text-sm leading-relaxed">
            ISL is vital for communication access for Deaf communities in India. Promoting ISL learning fosters inclusion, bridges communication gaps, and raises awareness about Deaf culture and linguistic diversity.
          </p>
        </div>
      </div>

      <div className="mt-8 rounded-2xl bg-slate-900/60 ring-1 ring-white/10 p-6">
        <h2 className="text-xl font-semibold text-white">Scope & Objectives</h2>
        <ul className="mt-3 space-y-2 text-slate-300 text-sm">
          <li>• Conduct user research with Deaf educators, interpreters, and hearing learners</li>
          <li>• Create inclusive interfaces for ISL exploration</li>
          <li>• Build gamified modules: quizzes, matching, timed exercises</li>
          <li>• Add points, badges, streaks, and progress tracking</li>
          <li>• Conduct accessibility testing (axe-core, Lighthouse)</li>
          <li>• Out of scope: Camera-based automatic gesture detection</li>
        </ul>
      </div>

      <div className="mt-8 rounded-2xl bg-slate-900/60 ring-1 ring-white/10 p-6">
        <h2 className="text-xl font-semibold text-white">Social Impact</h2>
        <p className="mt-2 text-slate-300 text-sm leading-relaxed">
          The platform promotes inclusive education by making ISL learning more approachable. By collaborating with Deaf educators and following WCAG 2.2, BharatSign+ aims to reduce barriers and increase awareness around accessibility.
        </p>
      </div>
    </main>
  );
}
