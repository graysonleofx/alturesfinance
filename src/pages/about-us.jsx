import Header from '../components/Header';
import CTO from '../assets/CTO.jpg';
import MarketingHead from '../assets/HOM.jpg';
import SupportManager from '../assets/CS.jpg';

const coreValues = [
  {
    title: 'Safety Concepts',
    desc: 'Illustrative safety messaging for a fictional finance interface; no security certification is implied.',
    icon: (
      <svg className="w-7 h-7 text-primary" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M12 1l9 4v6c0 6-3.8 11-9 12-5.2-1-9-6-9-12V5l9-4z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M8 11c1.2-2 4.8-2 6 0" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
  {
    title: 'Innovation',
    desc: 'Example interface patterns and interactions created for a frontend portfolio project.',
    icon: (
      <svg className="w-7 h-7 text-primary" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M12 2v6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M5 8l14 2-2 6-10 2-2-10z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
  {
    title: 'Transparency',
    desc: 'Clear demo labels and illustrative content make the project purpose easy to understand.',
    icon: (
      <svg className="w-7 h-7 text-primary" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M3 12h18" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 3v18" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
  {
    title: 'Usable Design',
    desc: 'A responsive interface concept focused on clear navigation and accessible components.',
    icon: (
      <svg className="w-7 h-7 text-primary" viewBox="0 0 24 24" fill="none" aria-hidden>
        <circle cx="12" cy="8" r="3" stroke="currentColor" strokeWidth="1.2"/>
        <path d="M5 21c1.5-4 6-6 7-6s5.5 2 7 6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  }
];

const team = [
  { name: 'Sample Profile A', title: 'Example product role', img: CTO, alt: 'Illustrative profile photo' },
  { name: 'Sample Profile B', title: 'Example design role', img: MarketingHead, alt: 'Illustrative profile photo' },
  { name: 'Sample Profile C', title: 'Example support role', img: SupportManager, alt: 'Illustrative profile photo' }
];

const AboutUs = () => {
  return (
    <div className="min-h-screen items-center bg-gradient-hero from-white to-slate-50">
      <Header />

      <main className="px-4 sm:px-6 lg:px-8 py-12">
        {/* HERO */}
        <section aria-label="About hero" className=" max-w-7xl mx-auto" id='about-page'>
          <div className="relative bg-white overflow-hidden mt-6">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/80 pointer-events-none w-full shadow-lg" />
            <div className="grid grid-cols-1 lg:grid-cols-2 ">
              <div className="p-6 sm:p-4 lg:p-16 flex flex-col justify-center gap-6">
                <span className="inline-block text-xs font-semibold uppercase text-primary/90 bg-primary/10 px-3 py-1 rounded-full">About the Project</span>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight max-w-2xl">
                  A fictional finance interface built as a developer portfolio demo
                </h1>

                <p className="text-sm sm:text-base text-muted-foreground max-w-prose leading-relaxed">
                  Alturas Finance is a UI concept created to showcase frontend development and product design. It is not a real bank, and it does not offer financial services.
                </p>

                <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                  <a
                    href="#our-history"
                    className="inline-flex items-center justify-center px-4 py-2 rounded-md bg-primary text-white font-medium shadow-sm hover:shadow focus:outline-none focus:ring-2 focus:ring-primary/30 transition"
                  >
                    Learn Our Story
                  </a>
                  <a
                    href="#values"
                    className="inline-flex items-center justify-center px-4 py-2 rounded-md border border-slate-200 text-slate-800 bg-white hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-primary/10 transition"
                  >
                    Our Values
                  </a>
                </div>

                <div className="mt-4 flex flex-col sm:flex-row items-center gap-6">
                  <div className="flex items-baseline gap-2">
                    <div className="text-2xl sm:text-3xl font-bold text-slate-900">UI</div>
                    <div className="text-xs text-muted-foreground">demo project</div>
                  </div>
                  <div className="flex items-baseline gap-2">
                    <div className="text-2xl sm:text-3xl font-bold text-slate-900">Sample</div>
                    <div className="text-xs text-muted-foreground">illustrative data</div>
                  </div>
                  <div className="flex items-baseline gap-2">
                    <div className="text-2xl sm:text-3xl font-bold text-slate-900">No</div>
                    <div className="text-xs text-muted-foreground">real services</div>
                  </div>
                </div>
              </div>

              <div className="relative min-h-[260px] sm:min-h-[360px] lg:min-h-[420px]">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: 'url(https://via.placeholder.com/1200x800)' }}
                  role="img"
                  aria-hidden="true"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent" />

                <div className="absolute left-0 right-0 bottom-6">	
                  <div className="bg-white/95 backdrop-blur-sm rounded-lg p-4 sm:p-6 shadow-lg border border-slate-100">
                    <h4 className="text-sm sm:text-base font-semibold text-slate-900">Demo project</h4>
                    <p className="mt-1 text-xs sm:text-sm text-muted-foreground">
                      A fictional product interface created for a developer portfolio.
                    </p>
                    <div className="mt-3 flex gap-3">
                      <a className="text-xs inline-flex items-center px-3 py-1 rounded-md bg-primary/10 text-primary hover:bg-primary/20 transition" href="#contact">                      Project overview</a>
                      <a className="text-xs inline-flex items-center px-3 py-1 rounded-md border border-slate-200 text-slate-700 hover:bg-slate-50 transition" href="#values">See values</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* DIVIDER */}
        <div className="my-12 border-t border-slate-100" />

        {/* COMPANY HISTORY */}
        <section id="our-history" className="mb-12">
          <div
            className="bg-white rounded-xl shadow-sm p-6 sm:p-8 lg:p-10 max-w-7xl mx-auto"
            style={{ borderTopLeftRadius: '0', borderTopRightRadius: '0' }}
          >
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="flex-1">
                <h2 className="text-2xl sm:text-3xl font-bold mb-3">Project Background</h2>

                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-prose mb-4">
                  Alturas Finance is a fictional finance-product concept built as a developer UI demo and portfolio project.
                  The interface explores familiar account, activity, and support patterns without representing a real company
                  or financial institution.
                </p>

                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4 max-w-prose">
                  The project focuses on responsive layouts, reusable React components, and clear interface states. All
                  account balances, profile cards, and transaction examples are illustrative UI content.
                </p>

                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4 max-w-prose">
                  Forms and simulated interactions demonstrate common product flows only. Do not enter real credentials,
                  personal information, or payment details.
                </p>

                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-prose">
                  No accounts, payments, deposits, insurance, or financial support services are provided. The project is
                  presented solely as a portfolio demonstration of interface design and frontend implementation.
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-xs">Responsive UI</span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-xs">React components</span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-xs">Sample data</span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-xs">Portfolio project</span>
                </div>
              </div>

              <div className="w-full lg:w-1/3">
                <ul className="space-y-6">
                  <li className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center font-semibold text-primary text-sm">01</div>
                    <div>
                      <div className="text-sm font-medium text-slate-900">Finance UI Concept</div>
                      <div className="mt-1 text-sm text-muted-foreground">
                        Defined a fictional product brief and a set of common finance-interface screens for the demo.
                      </div>
                    </div>
                  </li>

                  <li className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center font-semibold text-primary text-sm">02</div>
                    <div>
                      <div className="text-sm font-medium text-slate-900">Responsive Layouts</div>
                      <div className="mt-1 text-sm text-muted-foreground">
                        Adapted the concept for desktop and mobile screen sizes with reusable layout patterns.
                      </div>
                    </div>
                  </li>

                  <li className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center font-semibold text-primary text-sm">03</div>
                    <div>
                      <div className="text-sm font-medium text-slate-900">Interaction Patterns</div>
                      <div className="mt-1 text-sm text-muted-foreground">
                        Added sample navigation, form states, and illustrative account activity for UI demonstration.
                      </div>
                    </div>
                  </li>

                  <li className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center font-semibold text-primary text-sm">04</div>
                    <div>
                      <div className="text-sm font-medium text-slate-900">Visual System</div>
                      <div className="mt-1 text-sm text-muted-foreground">
                        Applied a slate navy and emerald palette with consistent typography and component styling.
                      </div>
                    </div>
                  </li>

                  <li className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center font-semibold text-primary text-sm">05</div>
                    <div>
                      <div className="text-sm font-medium text-slate-900">Portfolio Implementation</div>
                      <div className="mt-1 text-sm text-muted-foreground">
                        Built the fictional experience as a frontend project; no financial institution or service is connected.
                      </div>
                    </div>
                  </li>

                  <li className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center font-semibold text-primary text-sm">06</div>
                    <div>
                      <div className="text-sm font-medium text-slate-900">Illustrative Only</div>
                      <div className="mt-1 text-sm text-muted-foreground">
                        All people, products, balances, and transactions shown are sample content for the demo.
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section id="values" className="mb-12">
          <h3 className="text-white text-xl sm:text-2xl font-bold mb-8 mt-12">Core Values</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((v) => (
              <article
                key={v.title}
                className="group p-6 rounded-lg bg-white shadow-sm hover:shadow-lg transition transform hover:-translate-y-1 flex flex-col h-full"
                aria-labelledby={`val-${v.title}`}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    {v.icon}
                  </div>
                  <div>
                    <h4 id={`val-${v.title}`} className="text-lg font-semibold">{v.title}</h4>
                    <p className="mt-2 text-sm text-muted-foreground">{v.desc}</p>
                  </div>
                </div>

                <div className="mt-auto pt-4">
                  <a href="#about-page" className="inline-flex items-center text-sm text-primary font-medium hover:underline">Learn more</a>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* TEAM */}
        <section aria-label="Team" className="mb-20">
          <div className="flex items-center justify-between mb-6 mb-8 mt-12">
            <h3 className="text-white text-xl sm:text-2xl font-bold">Sample Profile Cards</h3>
            <p className="text-sm text-muted-foreground hidden sm:block">Illustrative profile content used to demonstrate the layout.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pb-6">
            {team.map((m) => (
              <div
                key={m.name}
                className="flex flex-col sm:flex-row items-start gap-4 p-6 rounded-lg bg-white shadow-sm hover:shadow-md transition h-full"
                role="article"
                aria-label={`${m.name} - ${m.title}`}
              >
                <img
                  src={m.img}
                  alt={m.alt}
                  className="w-24 h-24 rounded-full object-cover flex-shrink-0"
                  width="96"
                  height="96"
                />
                <div className="flex-1">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <h4 className="text-lg font-semibold">{m.name}</h4>
                      <p className="text-sm text-muted-foreground">{m.title}</p>
                    </div>
                    <span className="hidden sm:inline-flex items-center px-2 py-1 rounded-md text-xs bg-primary/10 text-primary">Team</span>
                  </div>
                  <p className="mt-3 text-sm text-muted-foreground hidden sm:block">
                    Example profile card for the Alturas Finance portfolio demo; not an actual team member.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default AboutUs;
