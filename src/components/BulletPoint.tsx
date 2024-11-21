import React from 'react';
import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface BulletPointProps {
  children: ReactNode;
  delay?: number;
}

export function BulletPoint({ children, delay = 0 }: BulletPointProps) {
  return (
    <motion.li
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay }}
      className="mb-2 flex items-start"
    >
      <span className="mr-2 mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500" />
      <span>{children}</span>
    </motion.li>
  );
}