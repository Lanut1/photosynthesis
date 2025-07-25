import { TEXTS } from "@/constants/texts";
import styled from "@emotion/styled";
import ReactionLeft from "./graphics/reaction-left";
import Union from "./graphics/union";
import ReactionRight from "./graphics/reaction-right";
import RoundTag from "@/components/tag/round-tag";

const ReactionContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
`;

const FormulaStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;

  @media (max-width: 768px) {
    width: 80%;
  }
`;

const MainReaction = () => {
  return (
    <ReactionContainerStyled>
      <RoundTag>{TEXTS.MAIN_REACTION}</RoundTag>
      <FormulaStyled>
        <ReactionLeft />
        <Union />
        <ReactionRight />
      </FormulaStyled>
    </ReactionContainerStyled>
  );
}

export default MainReaction;
