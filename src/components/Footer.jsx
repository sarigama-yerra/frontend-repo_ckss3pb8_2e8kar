export default function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-800 bg-slate-900/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-400 text-sm">
            © {new Date().getFullYear()} BharatSign+. Built for inclusive ISL learning.
          </p>
          <div className="text-slate-400 text-sm">
            Accessibility-first • WCAG 2.2 • Open Collaboration
          </div>
        </div>
      </div>
    </footer>
  );
}
