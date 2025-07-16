import styled from "@emotion/styled";
import TitleM from "../typography/titleM";
import { TEXTS } from "@/constants/texts";
import Image from "next/image";
import Overlay from "./sub/overlay";

const HowWorksContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  padding: 5rem 6rem;
`;

const GridContainerStyled = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 1.3fr 0.75fr;
  grid-template-rows: repeat(2, 1fr);
  gap: 1rem;
  align-items: start;

  & > :nth-of-type(4) {
    align-self: end;
  }
  & > :nth-of-type(6) {
    align-self: center;
    border-radius: 5rem;
  }

`;

const ContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  border-radius: 1.25rem;
  overflow: hidden;

  img {
    height: 100%;
    width: 100%;
    object-fit: contain;
  }
`;
//TODO fix copypaste
const HowWorksSection = () => {
  return (
    <HowWorksContainerStyled>
      <TitleM>{TEXTS.HOW_WORKS.TITLE}</TitleM>
      <GridContainerStyled>
        <ContainerStyled><Image src="/images/plant.svg" alt="" width={0} height={0}/></ContainerStyled>
        <ContainerStyled>
          <Image src="/images/light-leave.svg" alt="" width={0} height={0}/>
          <Overlay tagTitle={TEXTS.HOW_WORKS.LIGHT_REACTION} description={TEXTS.HOW_WORKS.LIGHT_DETAILS}/>
        </ContainerStyled>
        <ContainerStyled><Image src="/images/leaves.svg" alt="" width={0} height={0}/></ContainerStyled>
        <ContainerStyled><Image src="/images/night-leaves.svg" alt="" width={0} height={0}/></ContainerStyled>
        <ContainerStyled>
          <Image src="/images/night-process.svg" alt="" width={0} height={0}/>
          <Overlay tagTitle={TEXTS.HOW_WORKS.NIGHT_REACTION} description={TEXTS.HOW_WORKS.NIGHT_DETAILS}/>
        </ContainerStyled>
        <ContainerStyled><Image src="/images/night-reaction.svg" alt="" width={0} height={0}/></ContainerStyled>
      </GridContainerStyled>

    </HowWorksContainerStyled>
  );
};

export default HowWorksSection;
