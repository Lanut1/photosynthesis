"use client";

import AboutSection from "@/components/about/about-section";
import IntroSection from "@/components/intro/intro-section";
import TopBanner from "@/components/top-banner/top-banner";
import styled from "@emotion/styled";

const ContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 10rem;
`;

export default function Home() {
  return (
    <>
      <TopBanner />
      <ContainerStyled>
        <IntroSection />
      </ContainerStyled>
      <AboutSection />
    </>

  );
}
