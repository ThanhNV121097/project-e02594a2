import { T, useContent } from "../editable";

export default function BookingSection() {
  const phone = useContent<string>("booking.phone");
  const email = useContent<string>("booking.email");
  return (
    <section id="book" className="py-20 md:py-28">
      <div className="rounded-[calc(var(--radius)*1.5)] bg-accent px-8 py-12 text-accent-ink md:px-14 md:py-16">
        <div className="grid gap-10 md:grid-cols-[1fr_1fr] md:items-end">
          <div>
            <T k="booking.heading" as="h2" className="text-[clamp(42px,6vw,86px)]" />
            <T k="booking.body" as="p" className="mt-6 max-w-[34ch] text-lg opacity-90" />
          </div>
          <div className="space-y-4 text-lg">
            <a href={`tel:${phone.replace(/\s/g, "")}`} className="block rounded-full bg-accent-ink px-6 py-4 font-semibold text-accent">
              <T k="booking.phoneLabel" /> <T k="booking.phone" />
            </a>
            <a href={`mailto:${email}`} className="block rounded-full border border-accent-ink/40 px-6 py-4">
              <T k="booking.emailLabel" /> <T k="booking.email" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
