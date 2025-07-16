import styled from "@emotion/styled";
import TitleM from "../typography/titleM";
import { TEXTS } from "@/constants/texts";
import ConditionCard from "./sub/card";
import TitleL from "../typography/titleL";

const ConditionalSectionStyled = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10rem 6rem 6rem;
  gap: 3rem;
  align-items: center;
`;

const TitleMStyled = styled(TitleM)`
  text-align: left;
  align-self: flex-start;
`;


const CardsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 8rem;
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
          icon={card.ICON}
          title={card.NAME}
          description={card.DESCRIPTION}
        />
      ))}
      </CardsContainer>



      <TitleLStyled>{TEXTS.CONDITION.SEE}</TitleLStyled>
      <TitleM>{TEXTS.CONDITION.EVERYWHERE}</TitleM>

    </ConditionalSectionStyled>
  );
};

export default ConditionalSection;
