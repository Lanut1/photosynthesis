import styled from "@emotion/styled";
import TitleM from "../typography/titleM";
import { TEXTS } from "@/constants/texts";
import ConditionCard from "./sub/card";
import TitleL from "../typography/titleL";

const ConditionalSectionStyled = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8.375rem 6rem 7.438rem;
  gap: 2.5rem;
  align-items: center;
`;

const TitleMStyled = styled(TitleM)`
  text-align: left;
  align-self: flex-start;
`;

const CardsContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 5.875rem;
`;

const TitleContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  align-items: center;
  justify-items: flex-start;
`;

const TitleLStyled = styled(TitleL)`
  margin-left: -1rem;
  margin-right: -1rem;
`;

const ConditionalSection = () => {
  return (
    <ConditionalSectionStyled>
      <TitleMStyled>
        {TEXTS.CONDITION.TITLE_1}<br/>
        {TEXTS.CONDITION.TITLE_2}
      </TitleMStyled>
      <CardsContainer>
      {TEXTS.CONDITION.CARDS.map(card => (
        <ConditionCard
          key={card.NAME}
          icon={card.ICON}
          title={card.NAME}
          description={card.DESCRIPTION}
        />
      ))}
      </CardsContainer>
      <TitleContainerStyled>
        <TitleLStyled>{TEXTS.CONDITION.SEE}</TitleLStyled>
        <TitleM>{TEXTS.CONDITION.EVERYWHERE}</TitleM>
      </TitleContainerStyled>
    </ConditionalSectionStyled>
  );
};

export default ConditionalSection;
