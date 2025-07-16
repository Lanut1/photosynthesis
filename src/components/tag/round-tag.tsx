import styled from "@emotion/styled";
import { ReactNode } from "react";

interface RoundTagProps {
  children: ReactNode;
  className?: string;
}

const RoundTagStyled = styled.div`
  font-family: var(--font-ibmplexmono);
  color: var(--forest-green);
  font-size: 0.875rem;
  line-height: 115%;
  letter-spacing: -0.42px;
  border-radius: 3.125rem;
  padding: 0.5rem 1.25rem;
  border: 2px solid var(--forest-green);
`;

const RoundTag = ({children, className}: RoundTagProps) => {
  return (
    <RoundTagStyled className={className}>
      {children}
    </RoundTagStyled>
  );
};

export default RoundTag;
