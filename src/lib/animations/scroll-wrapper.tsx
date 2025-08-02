'use client';
import { motion } from 'framer-motion';
import { useScrollInAnimation } from './useScrollAnimation';

import { ReactNode, HTMLAttributes } from 'react';

interface ScrollAnimationWrapperProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  y?: number;
  x?: number;
  delay?: number;
  tag?: keyof typeof motion;
}

const ScrollAnimationWrapper = ({
  children,
  y = 10,
  x = 0,
  delay = 0,
  tag = 'div',
  ...props
}: ScrollAnimationWrapperProps) => {
  const animation = useScrollInAnimation({ y, x, delay });
  const Tag = (motion[tag] as React.ElementType) || motion.div;

  return <Tag {...animation} {...props}>{children}</Tag>;
};

export default ScrollAnimationWrapper;