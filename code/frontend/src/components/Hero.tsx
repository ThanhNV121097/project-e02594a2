import { T } from "../editable";

export default function Hero() {
  return (
    <section className="grid min-h-[72vh] items-center gap-12 py-20 md:grid-cols-[1.05fr_0.95fr] md:py-28">
      <div>
        <T k="hero.headline" as="h1" className="max-w-[11ch] text-[clamp(60px,9vw,132px)]" />
        <T k="hero.sub" as="p" className="mt-7 max-w-[34ch] text-xl text-ink-soft md:text-2xl" />
        <T k="hero.cta.label" as="a" href="#book" className="mt-10 inline-flex rounded-full bg-accent px-7 py-4 text-base font-semibold text-accent-ink" />
      </div>
      <figure className="rounded-[calc(var(--radius)*1.4)] bg-surface p-4 shadow-[0_28px_80px_color-mix(in_srgb,var(--ink)_10%,transparent)]">
        <div className="aspect-[4/5] rounded-[var(--radius)] bg-[radial-gradient(circle_at_30%_25%,var(--surface)_0_13%,transparent_14%),radial-gradient(circle_at_68%_34%,var(--accent)_0_10%,transparent_11%),linear-gradient(140deg,color-mix(in_srgb,var(--accent)_20%,transparent),color-mix(in_srgb,var(--ink)_10%,transparent))]" />
        <T k="hero.imageCaption" as="figcaption" className="px-2 pt-4 text-sm text-ink-soft" />
      </figure>
    </section>
  );
}
