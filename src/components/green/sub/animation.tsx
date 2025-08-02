import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform, useMotionValue, useVelocity, useAnimationFrame } from "framer-motion";
import { wrap } from "@motionone/utils";
import styled from "@emotion/styled";
import { AnimationPhotosysthesis } from "./photosynthesis";

const Section = styled.section`
  position: relative;
  width: calc(100% + 192px);
  color: var(--white);
  margin-right: -96px;
  margin-left: -96px;

  @media (max-width: 768px) {
    width: calc(100% + 24px);
    margin-right: -12px;
    margin-left: -12px;
  }
`;

const ParallaxWrapper = styled.div`
  overflow: hidden;
  letter-spacing: -2px;
  white-space: nowrap;
  display: flex;
  flex-wrap: nowrap;
`;

const Scroller = styled(motion.div)`
  text-transform: uppercase;
  font-size: 344px;
  line-height: 105%;
  display: flex;
  white-space: nowrap;
  flex-wrap: nowrap;
  opacity: 0.5;
`;

function ParallaxLetters({ baseVelocity = 3 }: { baseVelocity: number }) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false
  });

  const x = useTransform(baseX, (v) => `${wrap(-45, -20, v)}%`);
  const directionFactor = useRef(1);

  useAnimationFrame((_, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) directionFactor.current = 1;
    else if (velocityFactor.get() > 0) directionFactor.current = -1;

    moveBy += directionFactor.current * moveBy * velocityFactor.get();
    baseX.set(baseX.get() + moveBy);
  });

  return (
    <ParallaxWrapper>
      <Scroller style={{ x }}>
        {[...Array(4)].map((_, i) => (
          <AnimationPhotosysthesis key={i} />
        ))}
      </Scroller>
    </ParallaxWrapper>
  );
}

export default function Animation() {
  return (
    <Section>
      <ParallaxLetters baseVelocity={1} />
    </Section>
  );
}
