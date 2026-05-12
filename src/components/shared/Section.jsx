import { motion } from "framer-motion";

export function Section({ children, className = "", ...props }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 34 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.16 }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      className={`relative mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 sm:py-24 ${className}`}
      {...props}
    >
      {children}
    </motion.section>
  );
}
