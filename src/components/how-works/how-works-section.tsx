import styled from "@emotion/styled";
import TitleM from "../typography/titleM";
import { TEXTS } from "@/constants/texts";
import Image from "next/image";
import Overlay from "./sub/overlay";
import gridItems from "./sub/grid-items.config";

const HowWorksContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4.563rem;
  padding: 5rem 6rem 8.375rem;
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

const HowWorksSection = () => {
  return (
    <HowWorksContainerStyled>
      <TitleM>{TEXTS.HOW_WORKS.TITLE}</TitleM>
      <GridContainerStyled>
        {gridItems.map(item => (
          <ContainerStyled key={item.id}>
            <Image src={item.src} alt={item.alt} width={0} height={0}/>
            {item.overlay?.description && <Overlay tagTitle={item.overlay.tagTitle} description={item.overlay.description}/>}
          </ContainerStyled>
        ))}
      </GridContainerStyled>

    </HowWorksContainerStyled>
  );
};

export default HowWorksSection;
