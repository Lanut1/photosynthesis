"use client";

import AboutSection from "@/components/about/about-section";
import ConditionalSection from "@/components/conditional/conditional-section";
import GreenSection from "@/components/green/green-section";
import HowWorksSection from "@/components/how-works/how-works-section";
import IntroSection from "@/components/intro/intro-section";
import LabSection from "@/components/lab/lab-section";
import TopBanner from "@/components/top-banner/top-banner";

export default function Home() {
  return (
    <>
      <TopBanner />
      <IntroSection />
      <AboutSection />
      <LabSection />
      <HowWorksSection/>
      <GreenSection/>
      <ConditionalSection/>
    </>
  );
}
