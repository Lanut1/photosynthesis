"use client";

import AboutSection from "@/components/about/about-section";
import ConditionalSection from "@/components/conditional/conditional-section";
import GreenSection from "@/components/green/green-section";
import HowWorksSection from "@/components/how-works/how-works-section";
import IntroSection from "@/components/intro/intro-section";
import LabSection from "@/components/lab/lab-section";
import TopBanner from "@/components/top-banner/top-banner";
import styled from "@emotion/styled";

const ContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 6rem;
`;

export default function Home() {
  return (
    <>
      <TopBanner />
      <ContainerStyled>
        <IntroSection />
      </ContainerStyled>
      <AboutSection />
      <LabSection />
      <HowWorksSection/>
      <GreenSection/>
      <ConditionalSection/>
    </>

  );
}
