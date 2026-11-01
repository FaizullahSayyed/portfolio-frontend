import { useState } from 'react';
import { FiArrowDown, FiArrowUpRight } from 'react-icons/fi';
import heroPortrait from '../../assets/hero-cloudinary.png';

export default function Hero() {
  const [shouldPlayVideo] = useState(
    () => !window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  );

  return (
    <section
      id="home"
      className="section-atmosphere section-atmosphere--hero scroll-mt-20 overflow-hidden px-[18px] py-16 sm:px-6 sm:py-24"
    >
      <div className="mx-auto grid max-w-[1120px] items-center gap-12 md:grid-cols-[1.15fr_0.85fr] md:gap-16">
        <div>
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#e9e9ef] bg-white px-3.5 py-2 text-sm text-[#555563]">
            <span className="h-2 w-2 rounded-full bg-[#6c63ff]" aria-hidden="true" />
            Welcome to my portfolio
          </p>
          <h1 className="max-w-[680px] text-5xl leading-[1.08] font-bold tracking-[-0.06em] text-[#181824] sm:text-6xl md:text-7xl">
            Hi, I’m Faizulla.
            <span className="mt-2 block text-[#6c63ff]">I build for the web.</span>
          </h1>
          <p className="mt-6 max-w-[520px] text-lg leading-8 text-[#666675]">
            I enjoy turning thoughtful ideas into clear, useful digital experiences.
            Take a look around and get to know what I do.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#6c63ff] px-6 text-sm font-semibold text-white no-underline transition hover:bg-[#554be8] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#6c63ff]"
              href="#projects"
            >
              Explore my work <FiArrowUpRight className="ml-2 h-4 w-4" aria-hidden="true" />
            </a>
            <a
              className="inline-flex min-h-12 items-center px-2 text-sm font-medium text-[#181824] no-underline transition hover:text-[#6c63ff] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#6c63ff]"
              href="#about"
            >
              More about me <FiArrowDown className="ml-2 h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="relative mx-auto flex aspect-square w-[90vw] items-center justify-center overflow-hidden rounded-[2rem] border border-[#eeedf5] bg-[#f7f6ff] md:w-full">
          <div
            className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-[#dedbff]/70 blur-3xl"
            aria-hidden="true"
          />
          <video
            className="relative aspect-video h-auto w-full object-cover"
            src="/portfolio-preview.mp4"
            poster={heroPortrait}
            autoPlay={shouldPlayVideo}
            muted
            loop
            playsInline
            preload="metadata"
            aria-label="Portfolio introduction video"
            onLoadedMetadata={(event) => {
              const duration = event.currentTarget.duration;
              if (Number.isFinite(duration) && duration > 0) {
                event.currentTarget.playbackRate = Math.min(1, duration / 12);
              }
            }}
          />
          <div className="absolute right-4 bottom-5 rounded-2xl border border-[#eeedf5] bg-white px-4 py-3 shadow-[0_12px_40px_rgba(24,24,36,0.07)] sm:right-6 sm:bottom-7">
            <p className="text-xs font-medium tracking-wide text-[#666675]">DESIGN · BUILD · REFINE</p>
          </div>
        </div>
      </div>
    </section>
  );
}
