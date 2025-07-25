import styled from "@emotion/styled";
import { DefaultTypographyProps } from "./types";

const TitleStyled = styled.h1`
  font-family: var(--font-hardman);
  font-size: 7.188rem;
  letter-spacing: -2.3px;
  line-height: 80%;
  text-align: center;
  
  @media (max-width: 768px) {
    font-size: 2.813rem;
    letter-spacing: -0.9px;
    word-break: break-word;
  }
`;

const TitleL = ({ children, className }: DefaultTypographyProps) => {
  return (
    <TitleStyled className={className}>
      {children}
    </TitleStyled>
  );
};

export default TitleL;
