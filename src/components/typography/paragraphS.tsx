import styled from "@emotion/styled";
import { DefaultTypographyProps } from "./types";

const ParagraphStyled = styled.p`
  font-family: var(--font-abcdiatype);
  font-size: 1.375rem;
  font-weight: 400;
  letter-spacing: -0.66px;
  line-height: 110%;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 0.875rem;
    letter-spacing: -0.42px;
  }
`;

const ParagraphS = ({ children, className }: DefaultTypographyProps) => {
  return (
    <ParagraphStyled className={className}>
      {children}
    </ParagraphStyled>
  );
}

export default ParagraphS;
