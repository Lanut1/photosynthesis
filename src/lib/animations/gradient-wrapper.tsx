import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const GradientWrapper = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef(null);

   const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["25vh start", "end end"],
  });

  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 1],
    ["#ffffff", "#363D42"],
  );

  return (
    <motion.div ref={ref} style={{ backgroundColor }}>
      {children}
    </motion.div>
  );
};

export default GradientWrapper;
