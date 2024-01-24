import IntroSection from "@/components/intro";
import SectionDivider from "@/components/section-divider";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <IntroSection />
      <SectionDivider />
    </div>
  );
}
