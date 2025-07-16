import ParagraphXS from "@/components/typography/paragraphXS";
import TitleXS from "@/components/typography/titleXS";
import styled from "@emotion/styled";
import Image from "next/image";
import { ReactNode } from "react";

interface ConditionCardProps {
  icon: string;
  title: string;
  description: string;
}

const CardStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1.5rem;
  min-width: 220px;
  border-right: 1px solid #DADADA;

  &:first-of-type {
    border-left: 1px solid #DADADA;
  }
`;

const IconWrapper = styled.div`
  background-color: #E3F3D1;
  align-self: center;
  border-radius: 28px;
  padding: 1.2rem;
  margin-bottom: 3rem;
  width: 98px;
  height: 98px;

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
