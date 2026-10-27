import { FiMail } from 'react-icons/fi';

export default function Contact() {
  return (
    <section id="contact" className="section-atmosphere section-atmosphere--contact scroll-mt-20 px-[18px] pb-16 sm:px-6 sm:pb-24">
      <div className="mx-auto max-w-[1120px] overflow-hidden rounded-[2rem] bg-[#181824] px-6 py-12 sm:px-12 sm:py-16">
        <div className="grid items-end gap-8 md:grid-cols-[1fr_auto]">
          <div className="max-w-[660px]">
            <p className="mb-3 text-sm font-semibold tracking-[0.16em] text-[#aaa5ff] uppercase">Get in touch</p>
            <h2 className="text-3xl leading-tight font-bold tracking-[-0.04em] text-white sm:text-5xl">
              Have an idea?
              <span className="block text-[#aaa5ff]">Let’s make it happen.</span>
            </h2>
            <p className="mt-5 max-w-[520px] leading-7 text-white/70">
              I’m always happy to connect, exchange ideas, and hear about what you’re working on.
            </p>
          </div>
          <div className="inline-flex items-center gap-3 rounded-full border border-white/20 px-5 py-3 text-sm text-white/70">
            <FiMail className="h-4 w-4 text-[#aaa5ff]" aria-hidden="true" />
            <span>Contact details coming soon</span>
          </div>
        </div>
      </div>
    </section>
  );
}
