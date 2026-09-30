import { T, useList } from "./editable";
import Hero from "./components/Hero";
import MenuSection from "./components/MenuSection";
import BookingSection from "./components/BookingSection";
import DirectionsSection from "./components/DirectionsSection";

export default function App() {
  const links = useList<{ label: string; href: string }>("nav.links");
  return (
    <div className="min-h-screen bg-ground text-ink font-body">
      <header className="mx-auto flex max-w-page items-center justify-between px-[var(--gutter)] py-6">
        <T k="site.name" as="a" href="/" className="font-display text-2xl" />
        <nav className="hidden items-center gap-7 text-sm md:flex">
          {links.map((l, i) => <T key={i} k={`nav.links.${i}.label`} as="a" href={l.href} />)}
          <T k="nav.cta.label" as="a" href="#book" className="rounded-full bg-accent px-5 py-3 font-semibold text-accent-ink" />
        </nav>
      </header>
      <main className="mx-auto max-w-page px-[var(--gutter)]">
        <Hero />
        <MenuSection />
        <BookingSection />
        <DirectionsSection />
      </main>
      <footer className="mx-auto max-w-page border-t border-line px-[var(--gutter)] py-10 text-sm text-ink-soft">
        <T k="footer.line" />
      </footer>
    </div>
  );
}
