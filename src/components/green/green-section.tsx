import styled from "@emotion/styled";
import TitleM from "../typography/titleM";
import ParagraphM from "../typography/paragraphM";
import { TEXTS } from "@/constants/texts";
import { useIsMobile } from "../utils/useIsMobile";

const GreenContainerStyled = styled.div`
  background-color: var(--forest-green);
  padding: 4rem 6rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;
  
  @media (max-width: 768px) {
    padding: 2rem 0.75rem;
  }
`;

const TitleStyled = styled(TitleM)`
  color: var(--white);
  width: 35%;
  text-align: left;
  white-space: pre-wrap;

  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
  }
`;

const AnimationStyled = styled.div`
  height: 17.5rem;
`;

const ParagraphStyled = styled(ParagraphM)`
  color: var(--white);
  align-self: flex-end;
  margin-right: 10%;
  width: 35%;
  white-space: pre-wrap;
`;

const GreenSection = () => {
  const isMobile = useIsMobile();

  return (
    <GreenContainerStyled>
      <TitleStyled>{TEXTS.GREEN.TITLE}</TitleStyled>
      <AnimationStyled/>
      {!isMobile && <ParagraphStyled>{TEXTS.GREEN.DESCRIPTION}</ParagraphStyled>}
    </GreenContainerStyled>
  );
};

export default GreenSection;
