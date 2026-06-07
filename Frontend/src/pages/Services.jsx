import { ArrowUpRight, Check, Zap, ShoppingBag, Globe } from "lucide-react";

const services = [
  {
    icon: Globe,
    eyebrow: "01 — Landing Pages",
    title: "Landing pages that convert visitors into buyers.",
    outcome: "Built to hit 5–12% conversion, not just look pretty.",
    bullets: [
      "Conversion-first copy & structure",
      "Sub-1s load time, 95+ Lighthouse",
      "A/B-ready sections, analytics wired in",
      "Launch in 7–10 days",
    ],
    span: "md:col-span-3",
  },
  {
    icon: ShoppingBag,
    eyebrow: "02 — Ecommerce",
    title: "Ecommerce stores built to sell, not just exist.",
    outcome: "Shopify & headless builds engineered for AOV and repeat orders.",
    bullets: [
      "Product pages that close the sale",
      "Optimized checkout & upsell flow",
      "Mobile-first, payment-ready",
      "Scales from 10 to 10k SKUs",
    ],
    span: "md:col-span-3",
  },
];

const stats = [
  { value: "+217%", label: "Avg. conversion lift" },
  { value: "7 days", label: "Typical launch window" },
  { value: "0.8s", label: "Median load time" },
  { value: "40+", label: "Sites shipped" },
];

const process = [
  { step: "01", title: "Strategy call", desc: "We map the goal, the buyer, and the offer. No fluff." },
  { step: "02", title: "Design & build", desc: "Wireframe → design → development in one tight sprint." },
  { step: "03", title: "Launch & optimize", desc: "Ship it, measure it, iterate on real data." },
];

const Services = () => {
  return (
    <section
      id="services"
      className="relative min-h-screen overflow-hidden bg-[#0b0c10] px-6 py-24 text-gray-300 md:px-12 md:py-32"
      style={{ fontFamily: "var(--font-body)" }}
    >
      {/* ambient glow */}
      <div className="pointer-events-none absolute -left-32 top-0 h-[400px] w-[400px] rounded-full bg-orange-500/20 blur-[140px]" />
      <div className="pointer-events-none absolute -bottom-32 -right-32 h-[400px] w-[400px] rounded-full bg-orange-600/15 blur-[140px]" />

      <div className="relative mx-auto max-w-6xl">

        {/* Header */}
        <div className="mb-20 grid grid-cols-1 gap-8 md:grid-cols-12 md:items-end">
          <div className="md:col-span-8">
            <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.5em] text-[#E85002]">
              ◆ What we do
            </p>
            <h2 className="text-4xl font-light leading-[1.05] tracking-tight text-white md:text-6xl">
              We build websites that{" "}
              <span
                className="italic text-[#E85002]"
                style={{ fontFamily: "var(--font-display)", fontWeight: 500 }}
              >
                make you money.
              </span>
            </h2>
            <div className="mt-6 h-px w-20 bg-[#E85002]" />
          </div>
          <div className="md:col-span-4">
            <p className="text-sm leading-relaxed text-gray-400">
              Two things, done exceptionally well: high-converting landing pages
              and ecommerce stores engineered for revenue. No bloated retainers,
              no agency theater.
            </p>
          </div>
        </div>

        {/* Service cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-6">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <article
                key={s.eyebrow}
                className={`group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/5 bg-[#16171d] p-8 transition-all duration-500 hover:-translate-y-1 hover:border-orange-500/30 hover:bg-[#1c1d25] md:p-10 ${s.span}`}
              >
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-orange-500/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <div>
                  <div className="mb-8 flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-orange-500/80">
                      {s.eyebrow}
                    </span>
                    <Icon className="h-5 w-5 text-orange-500/60" strokeWidth={1.5} />
                  </div>

                  <h3
                    className="mb-4 text-3xl font-light leading-tight tracking-tight text-white md:text-4xl"
                    style={{ fontFamily: "var(--font-display)", fontWeight: 500 }}
                  >
                    {s.title}
                  </h3>
                  <p className="mb-8 max-w-md text-base leading-relaxed text-gray-400">
                    {s.outcome}
                  </p>

                  <ul className="space-y-3">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-3 text-sm text-gray-300">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-orange-500" strokeWidth={2.5} />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href="#contact"
                  className="mt-10 inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.2em] text-white transition-colors hover:text-orange-400"
                >
                  See sample work
                  <ArrowUpRight
                    className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    strokeWidth={2}
                  />
                </a>
              </article>
            );
          })}
        </div>

        {/* Stats strip */}
        <div className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/5 bg-white/5 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="bg-[#0b0c10] p-8 transition-colors hover:bg-[#16171d]">
              <div
                className="text-4xl font-light tracking-tight text-white md:text-5xl"
                style={{ fontFamily: "var(--font-display)", fontWeight: 500 }}
              >
                {s.value}
              </div>
              <div className="mt-2 text-xs uppercase tracking-[0.2em] text-gray-500">
                {s.label}
              </div>
            </div>
          ))}
        </div>

        {/* Process */}
        <div className="mt-24">
          <p className="mb-10 text-[10px] font-bold uppercase tracking-[0.5em] text-[#E85002]">
            ◆ How it works
          </p>
          <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-white/5 bg-white/5 md:grid-cols-3">
            {process.map((p) => (
              <div key={p.step} className="bg-[#0b0c10] p-8">
                <div className="mb-6 flex items-center gap-3">
                  <span className="text-xs font-bold tracking-[0.3em] text-orange-500">
                    {p.step}
                  </span>
                  <span className="h-px flex-1 bg-white/10" />
                </div>
                <h4
                  className="mb-3 text-2xl font-light text-white"
                  style={{ fontFamily: "var(--font-display)", fontWeight: 500 }}
                >
                  {p.title}
                </h4>
                <p className="text-sm leading-relaxed text-gray-400">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 flex flex-col items-start justify-between gap-6 rounded-2xl border border-orange-500/20 bg-gradient-to-br from-[#16171d] to-[#0b0c10] p-10 md:flex-row md:items-center md:p-12">
          <div>
            <h3
              className="text-3xl font-light leading-tight text-white md:text-4xl"
              style={{ fontFamily: "var(--font-display)", fontWeight: 500 }}
            >
              Got a project that needs to{" "}
              <span className="italic text-[#E85002]">actually perform?</span>
            </h3>
            <p className="mt-3 text-sm text-gray-400">
              Free 20-min strategy call. We'll show you exactly what we'd change.
            </p>
          </div>
          <a
            href="mailto:hello@example.com"
            className="group inline-flex shrink-0 items-center gap-3 rounded-full bg-[#E85002] px-8 py-4 text-sm font-semibold uppercase tracking-[0.15em] text-white transition-all hover:bg-orange-400 hover:shadow-[0_0_40px_rgba(232,80,2,0.4)]"
          >
            <Zap className="h-4 w-4" strokeWidth={2.5} />
            Book a call
            <ArrowUpRight
              className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              strokeWidth={2.5}
            />
          </a>
        </div>

      </div>
    </section>
  );
};

export default Services;
