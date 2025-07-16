import styled from "@emotion/styled";
import TitleM from "../typography/titleM";
import ParagraphM from "../typography/paragraphM";
import { TEXTS } from "@/constants/texts";

const GreenContainerStyled = styled.div`
  background-color: var(--forest-green);
  padding: 4rem 6rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;
`;

const TitleStyled = styled(TitleM)`
  color: var(--white);
  width: 35%;
  text-align: left;
`;
//TODO: add animation or picture
const AnimationStyled = styled.div`
  height: 17.5rem;
`;

const ParagraphStyled = styled(ParagraphM)`
  color: var(--white);
  align-self: flex-end;
  margin-right: 10%;
  width: 35%;
`;

const GreenSection = () => {
  return (
    <GreenContainerStyled>
      <TitleStyled>{TEXTS.GREEN.TITLE}</TitleStyled>
      <AnimationStyled/>
      <ParagraphStyled>{TEXTS.GREEN.DESCRIPTION}</ParagraphStyled>
    </GreenContainerStyled>
  );
};

export default GreenSection;
