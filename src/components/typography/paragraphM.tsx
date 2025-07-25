import styled from "@emotion/styled";
import { DefaultTypographyProps } from "./types";

const ParagraphStyled = styled.p`
  font-family: var(--font-abcdiatype);
  font-size: 1.5rem;
  font-weight: 400;
  letter-spacing: -0.72px;
  line-height: 115%;
  text-align: left;
  white-space: pre-wrap;

  @media (max-width: 768px) {
    font-size: 0.875rem;
    letter-spacing: -0.42px;
  }
`;

const ParagraphM = ({ children, className }: DefaultTypographyProps) => {
  return (
    <ParagraphStyled className={className}>
      {children}
    </ParagraphStyled>
  );
}

export default ParagraphM;
