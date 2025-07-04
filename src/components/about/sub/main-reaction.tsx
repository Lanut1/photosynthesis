import { TEXTS } from "@/constants/texts";
import styled from "@emotion/styled";
import ReactionLeft from "./graphics/reaction-left";
import Union from "./graphics/union";
import ReactionRight from "./graphics/reaction-right";

const ReactionContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
`;

const TitleStyled = styled.div`
  font-family: var(--font-ibmplexmono);
  color: var(--forest-green);
  font-size: 0.875rem;
  line-height: 115%;
  letter-spacing: -0.42px;
  border-radius: 3.125rem;
  padding: 0.5rem 1.25rem;
  border: 2px solid var(--forest-green);
`;

const FormulaStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
`;

const MainReaction = () => {
  return (
    <ReactionContainerStyled>
      <TitleStyled>{TEXTS.MAIN_REACTION}</TitleStyled>
      <FormulaStyled>
        <ReactionLeft />
        <Union />
        <ReactionRight />
      </FormulaStyled>
    </ReactionContainerStyled>
  );
}

export default MainReaction;
