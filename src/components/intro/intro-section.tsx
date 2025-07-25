import styled from "@emotion/styled";
import TitleL from "../typography/titleL";
import { TEXTS } from "@/constants/texts";
import ImageBlock from "./sub/image-block";

const ContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.875rem;
  padding: 4.688rem 6rem;
  
  @media (max-width: 768px) {
    padding: 1.25rem 0.75rem 2.5rem;
    gap: 1.875rem;
  }
`;

const ImagesContainerStyled = styled.div`
  display: flex;
  gap: 1.25rem;
  justify-content: center;
  align-items: flex-start;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const IntroSection = () => {
  return (
    <ContainerStyled>
      <TitleL>{TEXTS.TITLE}</TitleL>
      <ImagesContainerStyled>
        <ImageBlock image="/images/intro-photosynthesis.png" text={TEXTS.INTRO.DEFINITION}/>
        <ImageBlock image="/images/intro-vintage.png" text={TEXTS.INTRO.ENERGY}/>
      </ImagesContainerStyled>
    </ContainerStyled>
  );
};

export default IntroSection;
