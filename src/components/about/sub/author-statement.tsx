import TitleS from "@/components/typography/titleS";
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
`;

const AvatarStyled = styled(Image)`
  border-radius: 50%; 
  object-fit: cover;
`;

const AuthorStatement = () => {
  return (
    <ContainerStyled>
      <AvatarStyled
        src="/images/author.svg"
        alt="Photo of the author"
        width={116}
        height={116}
      />
      <TitleS>
        {TEXTS.ABOUT}
      </TitleS>
    </ContainerStyled>
  );
};

export default AuthorStatement;
