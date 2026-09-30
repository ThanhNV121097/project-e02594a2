import { T } from "../editable";

export default function DirectionsSection() {
  return (
    <section id="directions" className="grid gap-10 border-t border-line py-20 md:grid-cols-[0.8fr_1.2fr] md:py-28">
      <div>
        <T k="directions.heading" as="h2" className="text-[clamp(42px,6vw,82px)]" />
      </div>
      <div className="grid gap-8 md:grid-cols-[1fr_0.8fr]">
        <div>
          <T k="directions.address" as="p" className="text-2xl leading-snug" />
          <T k="directions.hours" as="p" className="mt-5 text-ink-soft" />
          <T k="directions.mapLabel" as="a" href="https://www.google.com/maps/search/?api=1&query=42%20Nguyen%20Dinh%20Chieu%20District%203%20Ho%20Chi%20Minh%20City" className="mt-8 inline-flex rounded-full border border-line px-6 py-3 font-semibold" />
        </div>
        <div className="min-h-64 rounded-[var(--radius)] bg-[linear-gradient(135deg,rgba(143,47,31,0.18),rgba(29,33,26,0.08)),linear-gradient(90deg,transparent_48%,var(--line)_49%_51%,transparent_52%),linear-gradient(0deg,transparent_48%,var(--line)_49%_51%,transparent_52%)] bg-[length:auto,72px_72px,72px_72px]" />
      </div>
    </section>
  );
}
