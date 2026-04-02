export default function CTA() {
  return (
    <section className="bg-periwinkle/20 py-20 px-4 sm:px-6 lg:px-8 blueprint-border-b">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <h2 className="font-space-grotesk font-bold text-3xl sm:text-4xl lg:text-5xl text-deep-navy leading-tight">
          Ready to build in{" "}
          <span className="text-wisteria">good company</span>?
        </h2>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="https://luma.com/curio"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center font-manrope font-medium text-sm bg-wisteria text-white px-8 py-3.5 rounded-full hover:bg-deep-navy transition-colors"
          >
            Join the Community
          </a>
          <a
            href="/community"
            className="inline-flex items-center justify-center font-manrope font-medium text-sm border-2 border-deep-navy/30 text-deep-navy px-8 py-3.5 rounded-full hover:border-deep-navy transition-colors"
          >
            See the Community Board
          </a>
        </div>
      </div>
    </section>
  );
}
