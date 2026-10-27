import { FiRefreshCw, FiSearch, FiTarget } from 'react-icons/fi';

const steps = [
  {
    number: '01',
    title: 'Understand',
    description: 'Start with the people, the problem, and what a useful outcome looks like.',
    icon: FiSearch,
  },
  {
    number: '02',
    title: 'Shape',
    description: 'Break the idea into clear pieces and choose a considered way forward.',
    icon: FiTarget,
  },
  {
    number: '03',
    title: 'Improve',
    description: 'Build, get feedback, and refine the details that make an experience feel right.',
    icon: FiRefreshCw,
  },
];

export default function EngineeringApproach() {
  return (
    <section className="section-atmosphere section-atmosphere--approach px-[18px] py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-[1120px]">
        <div className="mb-10 max-w-[620px]">
          <p className="mb-3 text-sm font-semibold tracking-[0.16em] text-[#6c63ff] uppercase">How I work</p>
          <h2 className="text-3xl font-bold tracking-[-0.04em] text-[#181824] sm:text-4xl">Good work comes from good thinking.</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {steps.map(({ number, title, description, icon: Icon }) => (
            <article key={number} className="rounded-3xl border border-[#e9e9ef] bg-white p-6 sm:p-8">
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-[#6c63ff]">{number}</span>
                <span className="grid h-11 w-11 place-items-center rounded-2xl bg-[#f1f0ff] text-[#6c63ff]">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
              </div>
              <h3 className="mt-5 text-xl font-semibold text-[#181824]">{title}</h3>
              <p className="mt-3 leading-7 text-[#666675]">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
