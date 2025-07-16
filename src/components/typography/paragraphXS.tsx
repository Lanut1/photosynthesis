import styled from "@emotion/styled";
import { DefaultTypographyProps } from "./types";

const ParagraphStyled = styled.p`
  font-family: var(--font-abcdiatype);
  font-size: 1rem;
  font-weight: 400;
  letter-spacing: -0.48px;
  line-height: 115%;
  text-align: center;
`;

const ParagraphXS = ({ children, className }: DefaultTypographyProps) => {
  return (
    <ParagraphStyled className={className}>
      {children}
    </ParagraphStyled>
  );
}

export default ParagraphXS;
