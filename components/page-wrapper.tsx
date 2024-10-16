"use client";

import { motion, AnimatePresence } from "framer-motion";

type Props = {
  children: React.ReactNode;
};

export const PageWrapper = ({ children }: Props) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 15 }}
        transition={{durantion: 1 , delay: 0.25 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};
