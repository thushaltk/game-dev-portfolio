"use client";
import logo from "../../../../public/imgs/logo.png";
import { motion } from "framer-motion";

export default function LogoTabView() {
  return (
    <motion.div
      style={{ width: "15%", height: "15%", marginTop: "25px" }}
      initial={{ x: 0 }}
      animate={{
        x: "-65%",
      }}
      transition={{
        delay: 2.5,
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
