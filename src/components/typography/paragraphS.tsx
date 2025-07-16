import styled from "@emotion/styled";
import { DefaultTypographyProps } from "./types";

const ParagraphStyled = styled.p`
  font-family: var(--font-abcdiatype);
  font-size: 1.375rem;
  font-weight: 400;
  letter-spacing: -0.66px;
  line-height: 110%;
  text-align: center;
`;

const ParagraphS = ({ children, className }: DefaultTypographyProps) => {
  return (
    <ParagraphStyled className={className}>
      {children}
    </ParagraphStyled>
  );
}

export default ParagraphS;
