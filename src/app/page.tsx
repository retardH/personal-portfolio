import AboutMyself from '@/components/about';
import Contact from '@/components/contact';
import MyHistory from '@/components/history';
import IntroSection from '@/components/intro';
import MyProjects from '@/components/projects';
import SectionDivider from '@/components/section-divider';
import MySkills from '@/components/skills';
import { Toaster } from 'react-hot-toast';

export default function Home() {
  return (
    <div className="flex flex-col items-center py-24 sm:py-36">
      <IntroSection />
      <SectionDivider />
      <AboutMyself />
      <SectionDivider />
      <MyProjects />
      <SectionDivider />
      <MySkills />
      <SectionDivider />
      <MyHistory />
      <SectionDivider />
      <Contact />
      <Toaster />
    </div>
  );
}
