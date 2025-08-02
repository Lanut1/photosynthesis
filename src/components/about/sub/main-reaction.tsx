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

  @media (max-width: 768px) {
    gap: 2.5rem;
  }
`;

const FormulaStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;

  svg {
    width: 100%;
  }

  @media (max-width: 768px) {
    width: 80%;
    flex-direction: column;
    gap: 1.125rem;
  }
`;

const UnionStyled = styled(Union)`
  @media (max-width: 768px) {
    transform: rotate(90deg);
  }
`;

const MainReaction = () => {
  return (
    <ReactionContainerStyled>
      <RoundTag>{TEXTS.MAIN_REACTION}</RoundTag>
      <FormulaStyled>
        <ReactionLeft />
        <UnionStyled />
        <ReactionRight />
      </FormulaStyled>
    </ReactionContainerStyled>
  );
}

export default MainReaction;
