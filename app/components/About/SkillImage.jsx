"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function SkillImage({ src, alt }) {
  const randomDuration = Math.random() * (2.5 - 1) + 1;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{
          opacity: 1,
          scale: 1,
          transition: { duration: randomDuration, ease: "easeOut" },
        }}
        viewport={{}}
      >
        <Image src={src} alt={alt} width={50} height={50} />
      </motion.div>
    </motion.div>
  );
}
