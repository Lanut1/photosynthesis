import { TEXTS } from "@/constants/texts";
import styled from "@emotion/styled";

const BannerStyled = styled.div`
  font-family: var(--font-abcdiatype);
  font-size: 1rem;
  line-height: 115%;
  background-color: var(--neon-green);
  letter-spacing: -0.32px;
  text-transform: uppercase;
  text-align: center;
  position: fixed;
  top: 0;
  z-index: 100;
  padding: 0.75rem 4.25rem;
  width: 100%;
`;

const TopBanner = () => {
  return (
    <BannerStyled>
      {TEXTS.TOP_BANNER}
    </BannerStyled>
  );
};

export default TopBanner;
