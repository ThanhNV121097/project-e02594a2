import { T, useList } from "../editable";

type MenuItem = { name: string; detail: string; price: string };

export default function MenuSection() {
  const items = useList<MenuItem>("menu.items");
  return (
    <section id="menu" className="border-t border-line py-20 md:py-28">
      <div className="grid gap-12 md:grid-cols-[0.75fr_1.25fr]">
        <T k="menu.heading" as="h2" className="text-[clamp(42px,6vw,82px)]" />
        <div className="space-y-8">
          {items.map((_, i) => (
            <div key={i} className="grid gap-2 border-b border-line pb-8 sm:grid-cols-[1fr_auto]">
              <div>
                <T k={`menu.items.${i}.name`} as="h3" className="font-body text-2xl tracking-normal" />
                <T k={`menu.items.${i}.detail`} as="p" className="mt-2 text-ink-soft" />
              </div>
              <T k={`menu.items.${i}.price`} as="p" className="text-xl text-ink" />
            </div>
          ))}
          <T k="menu.note" as="p" className="text-ink-soft" />
        </div>
      </div>
    </section>
  );
}
