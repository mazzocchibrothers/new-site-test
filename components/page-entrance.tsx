"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export function PageEntrance() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Remove the overlay quickly but smoothly
    const timer = setTimeout(() => setVisible(false), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[9998] bg-[#0a0a14] pointer-events-none"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
      )}
    </AnimatePresence>
  );
}
