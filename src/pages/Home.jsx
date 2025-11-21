import Hero from "../components/Hero";

export default function Home() {
  return (
    <main>
      <Hero />
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-6 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "Research-driven",
              desc: "Built in collaboration with Deaf educators, interpreters, and hearing learners to ensure real-world usability.",
            },
            {
              title: "Gamified modules",
              desc: "Quizzes, matching, and timed exercises with points, badges, and streaks to keep learners motivated.",
            },
            {
              title: "Accessible by design",
              desc: "High contrast, keyboard-friendly, screen-reader support, and clear motion practices.",
            },
          ].map((card) => (
            <div key={card.title} className="rounded-2xl bg-slate-900/60 ring-1 ring-white/10 p-6 hover:ring-blue-400/40 transition-colors">
              <h3 className="text-white font-semibold text-lg">{card.title}</h3>
              <p className="mt-2 text-slate-300 text-sm leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
