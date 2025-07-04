import styled from "@emotion/styled";
import { DefaultTypographyProps } from "./types";

const TitleStyled = styled.h1`
  font-family: var(--font-suisse);
  font-size: 2.25rem;
  letter-spacing: -1.08px;
  line-height: 115%;
  text-align: center;
`;

const TitleS = ({ children, className }: DefaultTypographyProps) => {
  return (
    <TitleStyled className={className}>
      {children}
    </TitleStyled>
  );
};

export default TitleS;
