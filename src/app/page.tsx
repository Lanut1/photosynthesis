import IntroSection from "@/components/intro/intro-section";
import TopBanner from "@/components/top-banner/top-banner";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <TopBanner/>
      <IntroSection/>
    </div>
  );
}
