"use client";
import { Typography } from "@mui/material";
import me from "../../../../public/imgs/me_ai.jpg";
import { motion } from "framer-motion";

export default function IntroMobileView() {
  return (
    <div
      style={{
        width: "100%",
        height: "500px",
        backgroundColor: "black",
        position: "absolute",
        marginTop: "220px",
        paddingLeft: "50px",
        paddingRight: "50px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "500px",
          backgroundColor: "black",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <motion.img
            style={{ width: "250px", height: "300px", borderRadius: "30px" }}
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
            src={me.src}
          />
        </div>
        <motion.div
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
          style={{
            width: "100%",
            height: "100%",
            backgroundColor: "black",
            paddingTop: "30px",
          }}
        >
          <Typography
            style={{
              color: "white",
              fontSize: "13px",
              textAlign: "center",
              fontFamily: "Tenorite",
            }}
          >
            Greetings! I am Thushal Tharaka Kulatilake, often recognized as
            &nbsp;<strong>ThuzhalTK</strong> an aspiring game developer
            currently pursuing my undergraduate studies at the University of
            Kelaniya. Embarking on a journey through the realm of Information
            Communication Technology with a specialization in Games and
            Animation Development, I am a 23-year-old enthusiast passionate
            about the art and science of game creation. My creative journey has
            led me to dive into the captivating world of game development, where
            I have harnessed the power of Unity and Unreal Engine to craft
            engaging 2D and 3D games for both Android and PC platforms. As I
            continue to explore the endless possibilities within this dynamic
            field, I invite you to join me on this exciting venture and witness
            the magic of interactive storytelling and immersive gameplay
          </Typography>
        </motion.div>
      </div>
    </div>
  );
}
