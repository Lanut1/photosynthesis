import { useIsMobile } from "../utils/useIsMobile";
import AuthorStatement from "./sub/author-statement";
import MainReaction from "./sub/main-reaction";
import styled from "@emotion/styled";

const SectionStyled = styled.div`
  position: relative;
  min-height: fit-content;
  display: flex;
  flex-direction: column;
  gap: 17.875rem;
  padding: 5rem 6rem 17.813rem;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 50%;
    height: 65%;
    background-image: url('/images/molecule-left.svg');
    background-repeat: no-repeat;
    background-size: contain;
    background-position: left center;
    opacity: 1;
    z-index: -2;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    right: 0;
    width: 35%;
    height: 35%;
    background-image: url('/images/molecule-right.svg');
    background-repeat: no-repeat;
    background-size: contain;
    background-position: right center;
    opacity: 1;
    z-index: -2;
    transform: scale(1.8) translateY(35%);
    transform-origin: right bottom;
  }

  @media (max-width: 768px) {
    padding: 5rem 0.75rem 26.5rem;

    &::before {
      transform: scale(0.9) translateX(-27%) translateY(12%);
    }

    &::after {
      transform: scale(1.4) translateY(15%) translateX(25%);
    }
  }
`;

const OverlayStyled = styled.span`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 10%;
  background: linear-gradient(
    to top,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 0.95) 10%,
    rgba(255, 255, 255, 0.85) 20%,
    rgba(255, 255, 255, 0.7) 40%,
    rgba(255, 255, 255, 0.4) 70%,
    transparent 100%
  );
  z-index: -1;
  pointer-events: none;
`;

const AboutSection = () => {
  const isMobile = useIsMobile();

  return (
    <SectionStyled>
      <AuthorStatement/>
      {!isMobile && (
        <>
          <MainReaction/>
          <OverlayStyled/>
        </>
      )}
    </SectionStyled>
  );
};

export default AboutSection;
