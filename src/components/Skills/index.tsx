import {
  FiCloud,
  FiDatabase,
  FiMonitor,
  FiServer,
  FiShield,
} from 'react-icons/fi';

const skillGroups = [
  {
    title: 'Frontend',
    icon: FiMonitor,
    skills: ['React 19', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'Vite', 'Tailwind CSS 4', 'React Icons'],
  },
  {
    title: 'Backend',
    icon: FiServer,
    skills: ['Node.js', 'Express 5', 'REST APIs'],
  },
  {
    title: 'Database',
    icon: FiDatabase,
    skills: ['PostgreSQL (Supabase)', 'pg connection pooling', 'SQL'],
  },
  {
    title: 'Validation & security',
    icon: FiShield,
    skills: ['Zod', 'bcryptjs', 'Master-password authentication', 'CORS'],
  },
  {
    title: 'Deployment & tools',
    icon: FiCloud,
    skills: ['Vercel', 'Docker', 'dotenv', 'Git', 'npm', 'Oxlint', 'TypeScript compiler'],
  },
];

export default function Skills() {
  return (
    <section className="section-atmosphere section-atmosphere--skills px-[18px] py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-[1120px]">
        <div className="mb-8 max-w-[600px]">
          <p className="mb-3 text-sm font-semibold tracking-[0.16em] text-[#6c63ff] uppercase">What I work with</p>
          <h2 className="text-3xl font-bold tracking-[-0.04em] text-[#181824] sm:text-4xl">Technologies I use to build and ship.</h2>
          <p className="mt-4 leading-7 text-[#666675]">
            From responsive React interfaces to secure APIs, PostgreSQL, and cloud deployment.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map(({ title, icon: Icon, skills: groupSkills }) => (
            <section
              key={title}
              className="rounded-2xl border border-[#e9e9ef] bg-white p-5"
              aria-label={title}
            >
              <h3 className="mb-4 flex items-center gap-2 text-sm font-semibold text-[#343442]">
                <Icon className="h-4 w-4 text-[#6c63ff]" aria-hidden="true" />
                {title}
              </h3>
              <ul className="m-0 flex list-none flex-wrap gap-2 p-0">
                {groupSkills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-full border border-[#e9e9ef] bg-[#fafaff] px-3 py-1.5 text-xs font-medium text-[#555563]"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}
