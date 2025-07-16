import AuthorStatement from "./sub/author-statement";
import MainReaction from "./sub/main-reaction";
import styled from "@emotion/styled";

//TODO: check paddings on the page and this container
const SectionStyled = styled.div`
  position: relative;
  min-height: fit-content;
  display: flex;
  flex-direction: column;
  gap: 15rem;
  padding: 5rem 6rem;
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
    opacity: 0.9;
    z-index: -1;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    right: 0;
    width: 70%;
    height: 45%;
    background-image: url('/images/molecule-right.svg');
    background-repeat: no-repeat;
    background-size: contain;
    background-position: right center;
    opacity: 0.9;
    z-index: -1;
  }
`;

const AboutSection = () => {
  return (
    <SectionStyled>
      <AuthorStatement/>
      <MainReaction/>
    </SectionStyled>
  );
};

export default AboutSection;
