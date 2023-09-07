"use client";
import logo from "../../../../public/imgs/logo.png";
import { motion } from "framer-motion";

export default function LogoMobileView() {
  return (
    <motion.div
      style={{ width: "20%", height: "20%", marginTop: "30px" }}
      initial={{ x: 0 }}
      transition={{
        delay: 1,
        duration: 1,
        ease: "easeInOut",
        times: [0, 1],
      }}
    >
      <motion.img
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{
          scale: [0.8, 1],
          opacity: [0, 1],
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          times: [0, 1],
        }}
        src={logo.src}
      />
    </motion.div>
  );
}
