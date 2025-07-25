import styled from "@emotion/styled";
import { DefaultTypographyProps } from "./types";

const TitleStyled = styled.h2`
  font-family: var(--font-suisse);
  font-size: 3.25rem;
  letter-spacing: -1.56px;
  line-height: 115%;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 2.5rem;
    letter-spacing: -1.2px;
  }
`;

const TitleM = ({ children, className }: DefaultTypographyProps) => {
  return (
    <TitleStyled className={className}>
      {children}
    </TitleStyled>
  );
};

export default TitleM;
