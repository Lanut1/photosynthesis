import ParagraphXS from "@/components/typography/paragraphXS";
import TitleXS from "@/components/typography/titleXS";
import styled from "@emotion/styled";
import Image from "next/image";

interface ConditionCardProps {
  icon: string;
  title: string;
  description: string;
}

const CardStyled = styled.div`
  display: flex;
  flex: 1 1 320px;
  flex-direction: column;
  align-items: flex-start;
  padding: 3.25rem 1.5rem;
  border-right: 1px solid var(--gray);

  &:first-of-type {
    border-left: 1px solid var(--gray);
  }
`;

const IconWrapper = styled.div`
  background-color: var(--soft-green);
  align-self: center;
  border-radius: 1.75rem;
  padding: 1.2rem;
  margin-bottom: 3rem;
  width: 6.125rem;
  height: 6.125rem;

  img {
    width: 100%;
    height: 100%;
  }
`;

const TitleStyled = styled(TitleXS)`
  margin-bottom: 0.5rem;
`;

const DescriptionStyled = styled(ParagraphXS)`
  text-align: left;
  white-space: pre-wrap;
`;

const ConditionCard = ({ icon, title, description }: ConditionCardProps) => (
  <CardStyled>
    <IconWrapper>
      <Image height={98} width={98} src={icon} alt={title}/>
    </IconWrapper>
    <TitleStyled>{title}</TitleStyled>
    <DescriptionStyled>{description}</DescriptionStyled>
  </CardStyled>
);

export default ConditionCard;
