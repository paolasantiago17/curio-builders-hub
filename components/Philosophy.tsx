export default function Philosophy() {
  return (
    <section
      id="philosophy"
      className="bg-white py-20 px-4 sm:px-6 lg:px-8 blueprint-border-b"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left: Section label + heading */}
          <div className="space-y-4">
            <p className="font-space-grotesk text-xs font-medium tracking-[0.15em] uppercase text-deep-navy/50">
              Blueprint 01: Community as a Service
            </p>
            <div className="relative inline-block">
              <h2 className="font-space-grotesk font-bold text-3xl sm:text-4xl text-deep-navy leading-tight">
                Our Philosophy
              </h2>
              <div
                className="absolute -bottom-1 left-0 h-[3px] w-full rounded-full"
                style={{
                  background: "linear-gradient(90deg, #e05c2d, #f5a623)",
                }}
              />
            </div>
          </div>

          {/* Right: Large quote */}
          <div className="pl-0 lg:pl-0 border-l-4 border-pearl-beige pl-6">
            <blockquote className="font-space-grotesk font-medium text-xl sm:text-2xl text-deep-navy leading-snug">
              &ldquo;We want to create a space for builders and founders so they
              can feel understood and not alone in their journey of building
              their projects and startups.&rdquo;
            </blockquote>
          </div>
        </div>

        {/* Two-column body text */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 border-l-4 border-pearl-beige pl-6 ml-0 lg:ml-0">
          <p className="font-manrope text-base text-deep-navy/70 leading-relaxed">
            It can feel lonely many times, especially when you&apos;re doing
            everything. That&apos;s why we want to create a space where founders
            can make connections with others who are going through the same
            experience, and learn what&apos;s needed to get to their next
            milestone.
          </p>
          <p className="font-manrope text-base text-deep-navy/70 leading-relaxed">
            Come to our space to unwind. Yes, we still encourage networking but
            more than that, whether you&apos;re a technical founder who hates
            sales, or a non-technical founder drowning in tech debt, we want you
            to see this as a space to meet and find connections.
          </p>
        </div>
      </div>
    </section>
  );
}
