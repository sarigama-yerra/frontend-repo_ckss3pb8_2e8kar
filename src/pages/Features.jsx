export default function Features() {
  return (
    <main className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">Platform Features</h1>
      <p className="mt-3 text-slate-300 leading-relaxed max-w-3xl">
        A modern ISL learning platform that blends gamification with accessibility. Explore vocabulary cards, interactive quizzes, timed challenges, and inclusive UI patterns.
      </p>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="rounded-2xl bg-slate-900/60 ring-1 ring-white/10 p-6">
          <h2 className="text-xl font-semibold text-white">Gamification Elements</h2>
          <ul className="mt-3 space-y-2 text-slate-300 text-sm">
            <li>• Points for completing activities</li>
            <li>• Badges for milestones</li>
            <li>• Streaks for consistent practice</li>
            <li>• Progress tracking and dashboard</li>
          </ul>
        </div>

        <div className="rounded-2xl bg-slate-900/60 ring-1 ring-white/10 p-6">
          <h2 className="text-xl font-semibold text-white">Learning Modules</h2>
          <ul className="mt-3 space-y-2 text-slate-300 text-sm">
            <li>• Quizzes with instant feedback</li>
            <li>• Vocabulary flashcards with visuals</li>
            <li>• Matching and sorting interactions</li>
            <li>• Timed exercises for mastery</li>
          </ul>
        </div>

        <div className="rounded-2xl bg-slate-900/60 ring-1 ring-white/10 p-6">
          <h2 className="text-xl font-semibold text-white">Accessibility</h2>
          <ul className="mt-3 space-y-2 text-slate-300 text-sm">
            <li>• High contrast colors and readable typography</li>
            <li>• Keyboard navigation and focus states</li>
            <li>• Screen reader friendly labels</li>
            <li>• Tested with axe-core and Lighthouse</li>
          </ul>
        </div>

        <div className="rounded-2xl bg-slate-900/60 ring-1 ring-white/10 p-6">
          <h2 className="text-xl font-semibold text-white">Tech Stack</h2>
          <ul className="mt-3 space-y-2 text-slate-300 text-sm">
            <li>• Frontend: React + TailwindCSS</li>
            <li>• Backend: Node.js or FastAPI; DB via Firebase or MongoDB</li>
            <li>• Design: Figma prototypes</li>
            <li>• Accessibility Testing: axe-core, Lighthouse</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
