"use client";
import Logo from "./logo/page";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const [loading, setLoading] = useState<boolean>(false);
  const [loading2, setLoading2] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 100);
    setTimeout(() => {
      setLoading2(true);
    }, 9500);
  }, []);

  return (
    <>
      <div
        style={{ height: "100%", width: "100%", position: "absolute" }}
        className="flex flex-col items-center justify-center bg-black"
      >
        <motion.div
          initial={{ y: 0 }}
          animate={{
            y: "-43%",
            scale: 0.5,
          }}
          transition={{
            delay: 7.5,
            duration: 1,
            ease: "easeInOut",
            times: [0, 1],
          }}
          className="flex w-full h-full items-center justify-center"
        >
          <Logo />
          {loading ? (
            <div
              className="w-fit absolute"
              style={{ paddingLeft: "250px", paddingTop: "80px" }}
            >
              <motion.h1
                style={{ fontFamily: "tenorite" }}
                className="text-5xl"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{
                  scale: [0.9, 1],
                  opacity: [0, 1],
                }}
                transition={{
                  duration: 1,
                  delay: 4,
                  ease: "easeInOut",
                  times: [0, 1],
                }}
              >
                THUZHALTK
              </motion.h1>
            </div>
          ) : (
            ""
          )}
        </motion.div>
      </div>
      {loading2 ? (
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            scale: [0.9, 1],
            opacity: [0, 1],
          }}
          transition={{
            duration: 1,
            ease: "easeInOut",
            times: [0, 1],
          }}
          style={{
            width: "100%",
            height: "80%",
            position: "absolute",
            marginTop: "130px",
            paddingLeft: "50px",
            paddingRight: "50px",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
          }}
          className="bg-black"
        >
          <div
            style={{
              width: "30%",
              height: "85%",
            }}
            className="bg-white items-center justify-center"
          ></div>
          <div
            style={{
              width: "30%",
              height: "85%",
            }}
            className="bg-white items-center justify-center"
          ></div>
          <div
            style={{
              width: "30%",
              height: "85%",
            }}
            className="bg-white items-center justify-center"
          ></div>
          <div
            style={{
              width: "30%",
              height: "85%",
              marginTop: "20px",
            }}
            className="bg-white items-center justify-center"
          ></div>
          <div
            style={{
              width: "30%",
              height: "85%",
              marginTop: "20px",
            }}
            className="bg-white items-center justify-center"
          ></div>
          <div
            style={{
              width: "30%",
              height: "85%",
              marginTop: "20px",
            }}
            className="bg-white items-center justify-center"
          ></div>
        </motion.div>
      ) : (
        ""
      )}
    </>
  );
}
