export default function Timeline() {
  const phases = [
    {
      title: "Month 1",
      items: [
        "User research with Deaf educators, interpreters, hearing learners",
        "Low-fidelity prototypes and flows",
        "Define gamification logic and activity types",
      ],
    },
    {
      title: "Weeks 5–8",
      items: [
        "Functional prototype with 10–20 activities",
        "Dashboard with progress tracking, badges, streaks",
        "Accessibility-compliant UI and user feedback report",
      ],
    },
  ];

  const schedule = [
    { week: "Week 1", label: "Research planning, interviews, benchmarking" },
    { week: "Week 2", label: "Personas, journey maps, information architecture" },
    { week: "Week 3", label: "Wireframes & low-fi prototypes" },
    { week: "Week 4", label: "Gamification rules, scoring, badge system" },
    { week: "Week 5", label: "Build quiz & flashcard modules" },
    { week: "Week 6", label: "Matching, timed challenges, streak logic" },
    { week: "Week 7", label: "Dashboard, progress tracking, polish" },
    { week: "Week 8", label: "Accessibility testing (axe-core, Lighthouse), feedback report" },
  ];

  return (
    <main className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">Project Timeline</h1>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        {phases.map((p) => (
          <div key={p.title} className="rounded-2xl bg-slate-900/60 ring-1 ring-white/10 p-6">
            <h2 className="text-xl font-semibold text-white">{p.title}</h2>
            <ul className="mt-3 space-y-2 text-slate-300 text-sm">
              {p.items.map((i) => (
                <li key={i}>• {i}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <h2 className="mt-10 text-2xl font-semibold text-white">8-week Schedule</h2>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        {schedule.map((row) => (
          <div key={row.week} className="rounded-xl bg-slate-900/60 ring-1 ring-white/10 p-4">
            <p className="text-slate-200 font-medium">{row.week}</p>
            <p className="text-slate-300 text-sm">{row.label}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 rounded-2xl bg-blue-500/10 ring-1 ring-blue-400/30 p-6">
        <p className="text-slate-200 text-sm">
          Additional references: ISLRTC, WCAG 2.2, gamification frameworks. Collaborate closely with Deaf educators.
        </p>
      </div>
    </main>
  );
}
