import PageHeader from "../common/PageHeader";
import { ServiceItem } from "../common/ServiceItem";
import { TextBlock } from "../common/TextBlock";
import { PageHeaderText } from "../common/PageHeaderText";

export default function CV() {
  return (
    <div>
      {/* <PageHeader img={'bg/BE0A1380-opt.jpg'}> */}
      <PageHeader img={'bg/BE0A1532-opt.jpg'}>
        <PageHeaderText header="Oleksiy Zelenyuk">
          <p className="md:text-4xl text-zinc-200 italic">Solutions Architect, Engineering Manager, AI enthusiast</p>
          <p className="text-center">
            <a href="/files/cv.pdf"
              target="_blank"
              className="rounded-full p-1 text-gray-400 hover:text-white"
            >
              <span className="sr-only">Download PDF</span>
              <svg className="inline-block bg-black rounded-lg bg-opacity-50 py-1 md:block hover:fill-zinc-100 fill-yellow-500 h-20 w-20 md:h-12 md:w-12" aria-hidden="true" data-prefix="fab" data-icon="linkedin" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg="">
                <g>
                  <path className="st0" d="M378.413,0H208.297h-13.182L185.8,9.314L57.02,138.102l-9.314,9.314v13.176v265.514 c0,47.36,38.528,85.895,85.896,85.895h244.811c47.353,0,85.881-38.535,85.881-85.895V85.896C464.294,38.528,425.766,0,378.413,0z  M432.497,426.105c0,29.877-24.214,54.091-54.084,54.091H133.602c-29.884,0-54.098-24.214-54.098-54.091V160.591h83.716 c24.885,0,45.077-20.178,45.077-45.07V31.804h170.116c29.87,0,54.084,24.214,54.084,54.092V426.105z"/>
                  <path className="st0" d="M171.947,252.785h-28.529c-5.432,0-8.686,3.533-8.686,8.825v73.754c0,6.388,4.204,10.599,10.041,10.599 c5.711,0,9.914-4.21,9.914-10.599v-22.406c0-0.545,0.279-0.817,0.824-0.817h16.436c20.095,0,32.188-12.226,32.188-29.612 C204.136,264.871,192.182,252.785,171.947,252.785z M170.719,294.888h-15.208c-0.545,0-0.824-0.272-0.824-0.81v-23.23 c0-0.545,0.279-0.816,0.824-0.816h15.208c8.42,0,13.447,5.027,13.447,12.498C184.167,290,179.139,294.888,170.719,294.888z"/>
                  <path className="st0" d="M250.191,252.785h-21.868c-5.432,0-8.686,3.533-8.686,8.825v74.843c0,5.3,3.253,8.693,8.686,8.693h21.868 c19.69,0,31.923-6.249,36.81-21.324c1.76-5.3,2.723-11.681,2.723-24.857c0-13.175-0.964-19.557-2.723-24.856 C282.113,259.034,269.881,252.785,250.191,252.785z M267.856,316.896c-2.318,7.331-8.965,10.459-18.21,10.459h-9.23 c-0.545,0-0.824-0.272-0.824-0.816v-55.146c0-0.545,0.279-0.817,0.824-0.817h9.23c9.245,0,15.892,3.128,18.21,10.46 c0.95,3.128,1.62,8.56,1.62,17.93C269.476,308.336,268.805,313.768,267.856,316.896z"/>
                  <path className="st0" d="M361.167,252.785h-44.812c-5.432,0-8.7,3.533-8.7,8.825v73.754c0,6.388,4.218,10.599,10.055,10.599 c5.697,0,9.914-4.21,9.914-10.599v-26.351c0-0.538,0.265-0.81,0.81-0.81h26.086c5.837,0,9.23-3.532,9.23-8.56 c0-5.028-3.393-8.553-9.23-8.553h-26.086c-0.545,0-0.81-0.272-0.81-0.817v-19.425c0-0.545,0.265-0.816,0.81-0.816h32.733 c5.572,0,9.245-3.666,9.245-8.553C370.411,256.45,366.738,252.785,361.167,252.785z"/>
                </g>
              </svg>
            </a>
          </p>
        </PageHeaderText>
      </PageHeader>

      <TextBlock title="Summary of Qualifications">
        <>
        <div className='flex flex-row'>
          <p className='px-2 py-10 text-xl'>
            I&apos;m an Engineering Manager and Solutions Architect with 17+ years of experience leading distributed teams and building scalable systems across SaaS, fintech, and iGaming. I combine hands-on technical expertise (Ruby, Python, Node.js, PostgreSQL, Docker/Kubernetes, AWS) with strong people leadership, coaching, and process management. My focus is on empowering teams, aligning engineering with product strategy, and ensuring delivery efficiency in remote-first environments. Passionate about innovation, I explore AI and automation to drive both technical excellence and business value.
          </p>
        </div>
        <ServiceItem
          title='Practices & Principles'
          items={[
            'ATAM (Architecture Tradeoff Analysis Method)',
            'Domain-Driven Design',
            'Team Topologies & Convey\'s Law',
            'C4 Model',
            'Archimate and TOGAF',
            'Radical Simplicity',
            'Clean Architecture',
            'Infrastructure as Code',
            '12 Factor Agents',
          ]}
        >
          <p className="pb-4">Some of my favorite architectural tools and practices that guide my approach to system design and team leadership.</p> 
        </ServiceItem>
        </>
      </TextBlock>

      <PageHeader img={'bg/BE0A9747-opt.jpg'} navigation={false} height='md:h-50v'>
        <PageHeaderText header="Interpersonal effectiveness">
          Soft skills in software encompass the ability to communicate effectively,
          empathize with others, and collaborate seamlessly.
        </PageHeaderText>
      </PageHeader>

      <TextBlock title="Soft Skills">
        <>
        <div className='flex flex-row'>
          <p className='px- py-10 text-xl'>
            Software Architect balances on the edge between business and technology, which requires a wide range of soft skills.
          </p>
        </div>
        <ServiceItem title='Leadership' items={[
          'Engineering Management',
          'Technical Leadership',
          'Technical Ownership',
          'Mentoring',
          'Delegation',
        ]}>
          <p className="pb-4">
            I guide teams toward successful project completion, using a “leader to leader” approach focusing on mentorship, fostering professional growth, and delegating leadership and responsibility.
          </p>
          <p className="pb-4">
            Experienced in mentoring team members, nurturing their professional development, and growing future leaders within the organization.
          </p>
        </ServiceItem>
        <ServiceItem title='Communication' items={[
          'Written Communication',
          'Verbal Communication',
          'Presentation Skills',
          'Public Speaking',
          'Collaboration',
        ]}>
          <p className="pb-4">
            Architect&apos;s position requires excellent written and verbal communication skills. Ability to explain complex technical concepts to non-technical stakeholders, business to business communication, and public speaking.
          </p>
          <p className="pb-4">
            Track record of fostering a cooperative working environment and leveraging team strengths to achieve project goals.
          </p>
        </ServiceItem>
        <ServiceItem title='Goal-orientation' items={[
          'Pragmatic approach',
          'Critical Thinking',
          'Tradeoff Analysis',
          'Decision Making',
          'Mitigation Planning',
        ]}>
          <p className="pb-4">
            Strong analytical skills and a systematic problem-solving approach ensure efficient and effective solutions.
          </p>
          <p className="pb-4">
            Making strategic decisions based on thoroughly evaluating complex issues considering different aspects, dimensions, and tradeoffs.
          </p>
        </ServiceItem>
        </>
      </TextBlock>

      <PageHeader img={'bg/BE0A9450-opt.jpg'} navigation={false} height='md:h-50v'>
        <PageHeaderText header="Getting hands dirty!">
          <p>No Plan Survives First Contact With the Enemy</p>
          <p>&mdash; Helmuth von Moltke</p>
        </PageHeaderText>
      </PageHeader>

      <TextBlock title="Hard Skills">
        <>
        <div className='flex flex-row'>
          <p className='px-2 py-10 text-xl'>
            I&apos;ve worked on a wide range of projects, from small startups to large-scale enterprise systems and each type of project requires different toolset.
            To avoid academic ivory tower discussions, I prefer to get my hands dirty and use the tools I&apos;m talking about on real projects.
          </p>
        </div>
        <ServiceItem title='Methodologies and Practices I follow' items={[
          'Architecture Tradeoff Analysis',
          'Domain Driven Design',
          'Clean Architecture',
          'C4 Model',
          'Agile/Scrum',
          'Extreme Programming',
        ]}>
          My approach is pragmatic and based on the best practices of the industry. I follow the ATAM and DDD principles for system design. I prefer C4 model for architecture visualization. I&apos;m a big fan of the Clean Architecture approach and Uncle Bob&apos;s SOLID principles.
        </ServiceItem>
        <ServiceItem title='Tech Stack' items={[
          'TypeScript, Python, Golang, Ruby',
          'Node.js, NestJS, Django, Ruby on Rails',
          'LangChain/LangGraph, LlamaIndex',
          'React, Angular, AngularJS',
          'CloudFlare Workers',
          'PostgreSQL/PGVector, Redis, Neo4J, ClickHouse, DynamoDB, MongoDB',
          'NATS, RabbitMQ, SQS, Celery',
          'AWS, Azure',
          'REST/OpenAPI, GraphQL/Apollo, gRPC/Protobuf',
          'Terraform/Terragrunt, ECS/Fargate, Lambda, Kubernetes/Helm',
        ]}>
          <p className='pb-4'>
            Comprehensive technology stack covering languages, frameworks, AI automation, databases, cloud platforms, and DevOps tools.
          </p>
        </ServiceItem>
        <ServiceItem title='Languages' items={[
          'English: C1',
          'Ukrainian: Native',
          'Russian: Native',
          'Spanish: A2',
        ]}>
          <p className='pb-4'>
            Multilingual capabilities enabling effective communication across diverse international teams and projects.
          </p>
        </ServiceItem>
        </>
      </TextBlock>

      <PageHeader img={'bg/BE0A1380-opt.jpg'} navigation={false} height='md:h-50v'>
        <PageHeaderText header="Employment history">
          <p></p>
        </PageHeaderText>
      </PageHeader>

      <TextBlock title="Job Experience">
        <>
        <div className='flex flex-row'>
          <p className='px-2 py-10 text-xl'>
            I worked for a number of companies, from small startups to large enterprises.
            I&apos;ve been fortunate to wear many hats: from full-stack developer to software architect.
            My experience spans both front-end and back-end development, guiding software architecture, 
            and leading dynamic teams. My approach is deeply rooted in collaboration, ensuring that 
            solutions not only address technical requirements but also deliver genuine value to users.
            Alongside my technical work, I&apos;ve become well-acquainted with cloud services and have always
            been an advocate for continuous learning and improvement in our ever-evolving field.
          </p>
        </div>
        <ServiceItem
          title='Solution/Enterprise Architect, Consultant, Researcher'
          subtitle='Self-employed, JKO Connect (contract-based) | August 2023 – Present'
          items={[
            'Agentic AI Projects',
            'Fintech Architecture',
            'iGaming Optimization',
            'LangChain/LangGraph',
            'Python/Django',
            'Terraform/Terragrunt',
            'AWS',
            'Postgres/PGVector',
            'Golang',
            'Kubernetes',
            'CloudFlare Workers',
            'TOGAF/Archimate',
          ]}
        >
          <p className='pb-4'>
            My most recent and impactful experience as an architect has been with JKO Connect, a consultancy where I helped clients overcome their most pressing technical challenges. Fintech and iGaming companies relied on me not only for architecture expertise, but also for guidance through their most complex digital transformations.
          </p>
          <p className='pb-4'>
            After years as an IT consultancy, JKO Connect pivoted to an Agentic AI company, where I led the infrastructure and delivery of PoCs for AI agentic workflows in the Legal and Compliance industry. I designed and implemented cost-efficient cloud infrastructure and CI/CD pipelines to enable rapid delivery of tailored solutions for prospective clients.
          </p>
          <p>
            When I joined as a consultant and architect for an Irish fintech company, my work quickly grew from a short-term technical advisor to a mix of strategy, leadership, hands-on design, to a top management role. I delivered an Architecture Vision documentation outlining a detailed technical assessment of all platforms, a consolidation plan with estimates, roadmap, and a proposed team structure to meet SLA requirements.
          </p>
        </ServiceItem>

        <ServiceItem
          title='Director of Architecture at CreatorIQ'
          subtitle='May 2022 - June 2023'
          items={[
            'Architecture Governance',
            'Architecture Review',
            'Architecture Documentation',
            'Technical Leadership',
            'Mentoring',
            'Project Discovery',
            'Proof of Concept development',
            'API Design',
            'PHP/Laravel',
            'NodeJS/NestJS',
            'GraphQL',
            'AWS/Serverless',
          ]}
        >
          <p className='pb-4'>
            CreatorIQ is a leading platform for Influencer marketing, providing B2B SaaS for brands and marketing agencies for making campaigns in digital marketing.
          </p>
          <p>
            As Director of Architecture, I analyzed and documented functional and non-functional requirements, assessed the current state of architecture, influenced and mentored teams and grew team leaders, and improved and maintained project documentation. Worked on productizing external API and introduced new features like webhooks, GraphQL, etc.
          </p>
        </ServiceItem>

        <ServiceItem
          title='Leading Engineering Manager / Backend Architect'
          subtitle='CareerKarma | Jan 2021 - May 2022'
          items={[
            'Engineering Management',
            'Performance Optimization',
            'Infrastructure Migration',
            'Security Audit',
            'Technical Leadership',
            'React/React Native',
            'NodeJS/Prisma',
            'GraphQL',
            'Postgres',
            'AWS/Kubernetes',
            'DataDog',
          ]}
        >
          <p className='pb-4'>
            As an Engineering Manager at CareerKarma, I led the backend and Infrastructure team. Conducted project assessment and tradeoff analysis. Planned and executed significant legacy migrations, security audit and implementation, performance issues discovery, and mitigation. Managed staffing engineers and managers. Handled people management.
          </p>
          <p>
            We successfully migrated from AWS Beanstalk to Kubernetes. We significantly increased the performance of application and database layers, which allowed the company to introduce new major features, such as audio rooms. And, as a result, raise a new round of investments.
          </p>
        </ServiceItem>
        
        <ServiceItem
          title='Engineering Manager / Architect'
          subtitle='Influencer.com | Mar 2020 - Mar 2021'
          items={[
            'Legacy Migration',
            'Performance Optimization',
            'Infrastructure Migration',
            'System Design',
            'Architecture Review',
            'NodeJS',
            'GraphQL',
            'Postgres',
            'React',
            'AngularJS',
          ]}
        >
          <p className='pb-4'>My first product company experience was with a beautiful, motivated team and a prominent CTO. We produced a new face of product in two web applications on React, took over and migrated legacy applications from the other team, and created GraphQL layer API. My team and I improved database, backend, and frontend performance. The team had been deeply involved in requirement gathering and writing user stories.</p>
          <p>Problems solved: Legacy Migration (AngularJS → React, Monolith → Microservices, REST → GraphQL), Performance Optimization, Infrastructure Migration, System Design, Architecture Review.</p>
        </ServiceItem>
        <ServiceItem
          title='Software Architect at SoftServe'
          subtitle='Jan 2017 - Mar 2020'
          items={[
            'Consulting',
            'Project Discovery',
            'Project Assessment',
            'Strategy Planning',
            'Scope Estimation',
            'Security Audit',
            'Technical Leadership',
            'Angular',
            'React',
            'NodeJS',
            'Neo4J',
            'AWS',
            'Azure',
          ]}
        >
          <p className='pb-4'>I joined SoftServe for the second time as an architect, but I studied how to do it right there. Thanks to the Architecture Rampup Program, which Software Engineering Institute, Carnegie Mellon University, led. I was involved in over a dozen projects in different business domains during this period and worked with many smart people in the &quot;Centre of Excellence,&quot; which was a specific department dedicated to presales, discovery, and the most complex problems other departments couldn&apos;t solve, such as performance issues, high complexity, complex integrations, new and/or unfamiliar technologies, etc.</p>
          <p className='pb-4'>I learned and am certified in key methodologies I use now, including Architectural Tradeoff Analysis, the core discipline of Software Architecture.</p>
        </ServiceItem>

        <ServiceItem
          title='Tech Lead at Symphony Solutions'
          subtitle='Jan 2015 - Jan 2017'
          items={[
            'Technical Leadership',
            'Application Architecture',
            'JavaScript',
            'React',
            'AngularJS',
            'NodeJS',
            'Redis',
            'AWS',
            'Docker',
          ]}
        >
          A fantastic experience on a sports betting project for a UK-based customer was the atmosphere of a product company for the first time for me, where the hosting company made this atmosphere even much better. Here was my dream team and my first experience as a full-stack developer and de-facto application architect, including React frontend, NodeJS backend, event-driven architecture, and scalable microservice infrastructure. We produced awesome animated widgets of sports visualization that were the greatest visual part of the sportsbook.
        </ServiceItem>

        <ServiceItem
          title='Software Developer at SoftServe'
          subtitle='Nov 2011 - Dec 2014'
          items={[
            'Frontend development',
            'JavaScript',
            'AngularJS',
            'BackboneJS',
            'HTML',
            'CSS',
          ]}
        >
          Developed and maintained user-friendly web applications and mentored junior developers.
        </ServiceItem>

        <ServiceItem
          title='Own online projects'
          subtitle='Self-employed | 2008-2010'
          items={[
            'PHP',
            'MySQL',
            'SEO optimisation',
          ]}
        >
          My first job was my own startup in tourism. I co-founded and developed end-to-end. We created a web application for booking tours and excursions. I was responsible for the whole technical part, including the architecture, development, and deployment. I was also involved in the business part, including marketing, sales, and customer support.
        </ServiceItem>
        </>
      </TextBlock>

      <PageHeader img={'bg/BE0A6393-opt.jpg'} navigation={false} height='md:h-50v'>
        <PageHeaderText header="Education">
          <p></p>
        </PageHeaderText>
      </PageHeader>

      <TextBlock title="Education">
        <>
        <div className='flex flex-row'>
          <p className='px-2 py-10 text-xl'>
            Here&apos;s a list of my formal education and certifications. I&apos;m also a lifelong learner and have completed numerous online courses and individually and at work.
          </p>
        </div>

        <ServiceItem
          title='Building AI Agents with Multimodal Models'
          subtitle='May 2025'
        >
          NVIDIA
        </ServiceItem>
        <ServiceItem
          title='AWS Certified Solutions Architect – Associate'
          subtitle='April 14, 2023'
        >
          Amazon Web Services
        </ServiceItem>
        <ServiceItem
          title='Software Architecture Principles and Practices'
          subtitle='2019'
        >
            Software Engineering Institute, Carnegie Mellon University
        </ServiceItem>
        <ServiceItem
          title='B.Sc. in Computer Science'
          subtitle='2010'
        >
          Yalta Management University
        </ServiceItem>
        </>
      </TextBlock>
    </div>
  );
}
