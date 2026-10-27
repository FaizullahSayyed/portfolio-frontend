const navigation = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  return (
    <footer className="border-t border-[#e9e9ef] bg-white px-[18px] py-7 sm:px-6">
      <div className="mx-auto flex max-w-[1120px] flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <a
          className="w-fit text-lg font-bold tracking-[-0.04em] text-[#181824] no-underline"
          href="#home"
        >
          Faizulla Syed<span className="text-[#6c63ff]">.</span>
        </a>
        <nav aria-label="Footer navigation">
          <ul className="m-0 flex list-none flex-wrap gap-x-5 gap-y-2 p-0">
            {navigation.map(({ label, href }) => (
              <li key={href}>
                <a
                  className="text-sm text-[#666675] no-underline transition hover:text-[#6c63ff] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6c63ff]"
                  href={href}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <p className="m-0 text-sm text-[#898997]">© 2026 Faizulla Syed</p>
      </div>
    </footer>
  );
}
