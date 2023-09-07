"use client";
import logo from "../../../../public/imgs/logo.png";
import { motion } from "framer-motion";

export default function LogoWebView() {
  return (
    <motion.div
      style={{ width: "10%", height: "10%" }}
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
