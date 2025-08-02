import { useMemo } from "react";

export const useScrollInAnimation = ({
  y = 50,
  x = 0,
  duration = 0.6,
  amount = 0.3,
  ease = "easeInOut",
  once = true,
  delay = 0,
} = {}) => {
  return useMemo(
    () => ({
      initial: { opacity: 0, y, x },
      whileInView: { opacity: 1, y: 0, x: 0 },
      viewport: { once, amount },
      transition: { duration, ease, delay },
    }),
    [y, x, duration, amount, ease, once, delay]
  );
};