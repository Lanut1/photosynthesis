import RoundTag from "@/components/tag/round-tag";
import ParagraphS from "@/components/typography/paragraphS";
import styled from "@emotion/styled";

interface OverlayProps {
  tagTitle: string;
  description: string;
}

const OverlayStyled = styled.div`
  position: absolute;
  z-index: 1;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(253, 253, 253, 0.2);
  backdrop-filter: blur(4px);
  border-radius: 7.5rem;
  padding: 6.25rem 3.25rem;
  display: flex;
  width: 90%;
  flex-direction: column;
  gap: 1.5rem;
  align-items: center;

  @media (max-width: 768px) {
    padding: 4.188rem 1rem;
    border-radius: 5rem;
  }
`;

const RoundTagStyled = styled(RoundTag)`
  border-color: var(--white);
  color: var(--white);
`;

const ParagraphStyled = styled(ParagraphS)`
  color: var(--white);
  white-space: pre-wrap;
`;

const Overlay = ({ tagTitle, description }: OverlayProps) => {
  return (
    <OverlayStyled>
      <RoundTagStyled>{tagTitle}</RoundTagStyled>
      <ParagraphStyled>{description}</ParagraphStyled>
    </OverlayStyled>
  );
};

export default Overlay;
