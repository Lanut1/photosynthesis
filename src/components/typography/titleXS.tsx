import styled from "@emotion/styled";
import { DefaultTypographyProps } from "./types";

const TitleStyled = styled.h4`
  font-family: var(--font-suisse);
  font-size: 1.375rem;
  letter-spacing: -0.66px;
  line-height: 115%;
  text-align: center;
`;

const TitleXS = ({ children, className }: DefaultTypographyProps) => {
  return (
    <TitleStyled className={className}>
      {children}
    </TitleStyled>
  );
};

export default TitleXS;
