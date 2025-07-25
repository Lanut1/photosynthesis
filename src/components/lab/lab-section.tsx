import styled from "@emotion/styled";
import TitleM from "../typography/titleM";
import { TEXTS } from "@/constants/texts";
import ParagraphM from "../typography/paragraphM";
import Image from "next/image";

const LabSectionStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  padding: 2rem 6rem 5rem;

  @media (max-width: 768px) {
    padding: 6.5rem 0.75rem 2rem;
    gap: 2.5rem;
  }
`;

const TextContainerStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1.5rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1.25rem;
  }
`;

const TitleStyled = styled(TitleM)`
  white-space: nowrap;
`;

const ParagraphStyled = styled(ParagraphM)`
  width: 50%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const ImageContainerStyled = styled.div`
  display: flex;
  gap: 1.25rem;
  justify-content: center;
  align-items: flex-start;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LabProcessStyled = styled.div`
  width: 40%;
  min-height: 200px;

  img {
    object-fit: contain;
    width: 100%;
    height: 100%;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const LabCanvasStyled = styled.div`
  width: 60%;
  min-height: 200px;
  
  img {
    object-fit: contain;
    width: 100%;
    height: 100%;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const LabSection = () => {
  return (
    <LabSectionStyled>
      <TextContainerStyled>
        <TitleStyled>
          {TEXTS.LAB.TITLE}
        </TitleStyled>
        <ParagraphStyled>
          {TEXTS.LAB.DESCRIPTION}
        </ParagraphStyled>
      </TextContainerStyled>
      <ImageContainerStyled>
        <LabProcessStyled>
          <Image height={0} width={0} alt="Lab image" src="/images/lab-process.svg"/>
        </LabProcessStyled>
        <LabCanvasStyled>
          <Image height={0} width={0} alt="Lab image" src="/images/lab-canvas.svg"/>
        </LabCanvasStyled>
      </ImageContainerStyled>
    </LabSectionStyled>
  );
};

export default LabSection;
