export default function About() {
  return (
    <section id="about" className="section-atmosphere section-atmosphere--about scroll-mt-20 border-y border-[#eeedf5] px-[18px] py-16 sm:px-6 sm:py-24">
      <div className="mx-auto grid max-w-[1120px] gap-8 md:grid-cols-[0.7fr_1.3fr] md:gap-16">
        <div>
          <p className="mb-3 text-sm font-semibold tracking-[0.16em] text-[#6c63ff] uppercase">A little about me</p>
          <h2 className="text-3xl leading-tight font-bold tracking-[-0.04em] text-[#181824] sm:text-4xl">
            Curious by nature.
            <span className="block text-[#666675]">Thoughtful by design.</span>
          </h2>
        </div>
        <div className="space-y-5 text-base leading-8 text-[#5f5f70] sm:text-lg">
          <p>
            I’m Faizulla, a developer who cares about making the web feel simple,
            welcoming, and useful. I like bringing structure to ideas and shaping
            them into experiences people can enjoy using.
          </p>
          <p>
            This portfolio is a growing collection of what I’m learning and
            building. I’m always interested in good problems, thoughtful
            collaboration, and opportunities to make something better.
          </p>
        </div>
      </div>
    </section>
  );
}
