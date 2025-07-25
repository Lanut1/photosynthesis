import styled from "@emotion/styled";
import { DefaultTypographyProps } from "./types";

const TitleStyled = styled.h3`
  font-family: var(--font-suisse);
  font-size: 2.25rem;
  letter-spacing: -1.08px;
  line-height: 115%;
  text-align: center;
  white-space: pre-wrap;

  @media (max-width: 768px) {
    font-size: 1.25rem;
    letter-spacing: -0.6px;
  }
`;

const TitleS = ({ children, className }: DefaultTypographyProps) => {
  return (
    <TitleStyled className={className}>
      {children}
    </TitleStyled>
  );
};

export default TitleS;
