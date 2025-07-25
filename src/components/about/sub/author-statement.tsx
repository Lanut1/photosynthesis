import TitleS from "@/components/typography/titleS";
import { useIsMobile } from "@/components/utils/useIsMobile";
import { TEXTS } from "@/constants/texts";
import styled from "@emotion/styled";
import Image from "next/image";

const ContainerStyled = styled.div`
  background-color: var(--soft-green);
  color: var(--forest-green);
  padding: 10rem;
  border-radius: 15.625rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.5rem;
  
  @media (max-width: 768px) {
    border-radius: 5rem;
    padding: 7.5rem 1.25rem;
  }
`;

const AvatarStyled = styled(Image)`
  border-radius: 50%; 
  object-fit: cover;

  @media (max-width: 768px) {
    width: 3.25rem;
    height: 3.25rem;
  }
`;

const AuthorStatement = () => {
  const isMobile = useIsMobile();
  const text = isMobile ? TEXTS.ABOUT_MOBILE : TEXTS.ABOUT_DESKTOP;

  return (
    <ContainerStyled>
      <AvatarStyled
        src="/images/author.svg"
        alt="Photo of the author"
        width={116}
        height={116}
      />
      <TitleS>
        {text}
      </TitleS>
    </ContainerStyled>
  );
};

export default AuthorStatement;
