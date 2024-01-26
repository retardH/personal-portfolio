import AboutMyself from "@/components/about";
import IntroSection from "@/components/intro";
import MyProjects from "@/components/projects";
import SectionDivider from "@/components/section-divider";
import MySkills from "@/components/skills";

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
    </div>
  );
}
