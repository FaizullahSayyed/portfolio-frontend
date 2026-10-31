import { FaDocker, FaGithub, FaLinkedin } from 'react-icons/fa';
import { FiMail, FiPhone } from 'react-icons/fi';

const socialLinks = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/faizulla', icon: FaLinkedin },
  { label: 'GitHub', href: 'https://github.com/FaizullahSayyed', icon: FaGithub },
  { label: 'Docker Hub', href: 'https://hub.docker.com/u/faizulla', icon: FaDocker },
];

export default function Contact() {
  return (
    <section id="contact" className="section-atmosphere section-atmosphere--contact scroll-mt-20 px-[18px] pb-16 sm:px-6 sm:pb-24">
      <div className="mx-auto max-w-[1120px] overflow-hidden rounded-[2rem] bg-[#181824] px-6 py-12 sm:px-12 sm:py-16">
        <div className="grid items-center gap-10 md:grid-cols-[1fr_auto]">
          <div className="max-w-[660px]">
            <p className="mb-3 text-sm font-semibold tracking-[0.16em] text-[#aaa5ff] uppercase">Get in touch</p>
            <h2 className="text-3xl leading-tight font-bold tracking-[-0.04em] text-white sm:text-5xl">
              Have an idea?
              <span className="block text-[#aaa5ff]">Let’s make it happen.</span>
            </h2>
            <p className="mt-5 max-w-[520px] leading-7 text-white/70">
              I’m always happy to connect, exchange ideas, and hear about what you’re working on.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                className="inline-flex min-h-11 items-center gap-2.5 rounded-full border border-white/20 px-5 text-sm font-medium text-white transition hover:border-[#aaa5ff] hover:bg-white/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#aaa5ff]"
                href="mailto:faizs7412@gmail.com"
              >
                <FiMail className="h-4 w-4 text-[#aaa5ff]" aria-hidden="true" />
                faizs7412@gmail.com
              </a>
              <a
                className="inline-flex min-h-11 items-center gap-2.5 rounded-full border border-white/20 px-5 text-sm font-medium text-white transition hover:border-[#aaa5ff] hover:bg-white/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#aaa5ff]"
                href="tel:+918888117697"
              >
                <FiPhone className="h-4 w-4 text-[#aaa5ff]" aria-hidden="true" />
                +91 8888117697
              </a>
            </div>
          </div>
          <div className="flex flex-col items-center gap-3">
            <p className="m-0 text-sm font-semibold tracking-[0.14em] text-white/70 uppercase">Follow me</p>
            <nav className="contact-social-orbit" aria-label="Social media profiles">
              {socialLinks.map(({ label, href, icon: Icon }, index) => (
                <a
                  key={label}
                  className={`contact-social-orbit__link contact-social-orbit__link--${index + 1}`}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Visit my ${label} profile (opens in a new tab)`}
                  title={label}
                >
                  <Icon className="h-12 w-12" aria-hidden="true" />
                </a>
              ))}
              <span className="contact-social-orbit__center" aria-hidden="true">
                Let’s connect
              </span>
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
}
