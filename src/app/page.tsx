import PageHeader from "./common/PageHeader";
import { TextBlock } from './common/TextBlock';
import { PageHeaderText } from "./common/PageHeaderText";

export default function Home() {
  return (
    <div>
      <PageHeader img={'bg/BE0A4513-opt.jpg'} height='h-80v' bgPosition="bg-[right_-12rem_top] md:bg-center">
        <PageHeaderText header="Hello, World!">
          <p className="text-2xl md:text-4xl text-zinc-200">I&apos;m Oleksiy Zelenyuk</p>
          <p className="text-zinc-200 italic text-base md:text-lg">
            Enthusiast, Enterpreneur, Adventurer
          </p>
        </PageHeaderText>
      </PageHeader>
      <TextBlock title="About me">
        <div className='flex flex-row intro'>
          <p className='px-2 py-10 text-xl'>
            I&apos;m passionate about creating beautiful compositions, whether it&apos;s a piece of software, a photograph, or a portion of music.
            I&apos;m a Software Architect with over 20 years of experience in the industry. I&apos;m also a keen photographer, but I have no talent in music, unfortunately :).
            I love to travel and explore the world. I&apos;m a big fan of the outdoors and love hiking, driving off-road, and skiing.
          </p>
        </div>
      </TextBlock>

      <PageHeader img={'bg/BE0A5400-opt.jpg'}  navigation={false} height='md:h-60v'>
        <PageHeaderText header="Capturing moments">
          <p className="text-4xl text-zinc-200">

          </p>
        </PageHeaderText>
      </PageHeader>
      <TextBlock title="Photography">
        <>
            <p className="pb-4">
              I&apos;ve been taking photos since I was a kid. I started with a film camera and then moved to digital. I&apos;ve been using Canon cameras for over 20 years now.
            </p>
            <p className="pb-4">
              I love to take photos of landscapes, nature, people, and animals. I also enjoy taking pictures of my family and friends, who have been waiting for their pictures for ages :)
            </p>
            <p className="pb-4">
              Capturing the moment, showing essential things, and telling a story, using focal length, focus, composition, and attention to detail are the key elements of a good photo, such as in a software architecture vision.
            </p>
        </>
      </TextBlock>

      <PageHeader img={'bg/BE0A4874-opt.jpg'} navigation={false} height='md:h-60v'>
        <PageHeaderText header="Exploring terrains">
          <p className="text-4xl text-zinc-200">

          </p>
        </PageHeaderText>
      </PageHeader>
      <TextBlock title='Offroading'>
        <>
          <p className="pb-4">
            Unfortunately, I didn&apos;t have a chance to offroad when I was a teenager. I could only dream about a Jeep or at least Lada Niva.
          </p>
          <p className="pb-4">
            I started offroading in 2019 when I bought my FJ Cruiser I&apos;m still driving and making more and more modifications.
          </p>
          <p className="pb-4">
            Planning the route, preparing the vehicle, and overcoming the obstacles, using the right tools, estimating resources, and making a backup plan are the key elements of a successful offroad trip, such as in a software discovery.
          </p>
        </>
      </TextBlock>
      <PageHeader img={'bg/BE0A1590-opt.jpg'} navigation={false} height='md:h-60v'>
        <PageHeaderText header="Crafting IT Solutions">
          <p className="text-4xl text-zinc-200">

          </p>
        </PageHeaderText>
      </PageHeader>
      <TextBlock title='Software Engineering'>
        <>
          <p className="pb-4">
            I started programming in school back in 1998, using C++ and Pascal. When I discovered web development, I was amazed by the cool things I could do with HTML and JavaScript. Then I realized I wanted to build the websites.
          </p>
          <p className="pb-4">
            I mastered graphics editors of the Corel package and started building cool and animated 90-ish websites. I quickly realized that not everything I could do with JS at that time (NodeJS hadn&apos;t been invented yet), so I learned Perl and then moved to PHP, also learned how to deploy it to a hosting platform and promote it in Yahoo and Google.
          </p>
          <p className="pb-4">
            It allowed me to start my small craft in the industry and build my own projects. So, in fact, I was a full-stack developer in the early 2000s before it became mainstream.
          </p>
          <p className="pb-4">
            Now, after 20 years of experience in the industry, I&apos;m a Software Architect, and I&apos;m still passionate about building software. I love to learn new technologies and apply them to solve real-world problems.
          </p>
        </>
      </TextBlock>
    </div>
  );
}
