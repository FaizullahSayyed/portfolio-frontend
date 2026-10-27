import {
  FiCode,
  FiEye,
  FiLayers,
  FiMonitor,
  FiSettings,
  FiZap,
} from 'react-icons/fi';

const skills = [
  { label: 'React', icon: FiLayers },
  { label: 'TypeScript', icon: FiCode },
  { label: 'JavaScript', icon: FiZap },
  { label: 'HTML & CSS', icon: FiSettings },
  { label: 'Responsive UI', icon: FiMonitor },
  { label: 'Accessibility', icon: FiEye },
];

export default function Skills() {
  return (
    <section className="section-atmosphere section-atmosphere--skills px-[18px] py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-[1120px]">
        <div className="mb-8 max-w-[600px]">
          <p className="mb-3 text-sm font-semibold tracking-[0.16em] text-[#6c63ff] uppercase">What I work with</p>
          <h2 className="text-3xl font-bold tracking-[-0.04em] text-[#181824] sm:text-4xl">Tools for thoughtful experiences.</h2>
          <p className="mt-4 leading-7 text-[#666675]">
            A growing toolkit for designing, building, and polishing the web.
          </p>
        </div>
        <ul className="m-0 flex list-none flex-wrap gap-3 p-0">
          {skills.map(({ label, icon: Icon }) => (
            <li
              key={label}
              className="inline-flex items-center gap-2.5 rounded-full border border-[#e9e9ef] bg-white px-5 py-3 text-sm font-medium text-[#343442] transition hover:border-[#c9c5ff] hover:bg-[#f7f6ff]"
            >
              <Icon className="h-4 w-4 text-[#6c63ff]" aria-hidden="true" />
              {label}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
