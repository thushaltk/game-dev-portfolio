"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import IntroMobileView from "./intro_mobileView/page";
import LogoMobileView from "./logo_mobileView/page";

export default function MobileView() {
  const [loading, setLoading] = useState<boolean>(false);
  const [loading2, setLoading2] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 100);
    setTimeout(() => {
      setLoading2(true);
    }, 3000);
  }, []);

  const gotoArtStation = () => {
    window.open("https://thuzhaltk.artstation.com/");
  };

  return (
    <>
      <div
        style={{ height: "100%", width: "100%", position: "absolute" }}
        className="flex flex-row items-center justify-between	 bg-black"
      >
        <motion.div
          initial={{ y: 0 }}
          animate={{
            y: "-43%",
            scale: 0.5,
          }}
          transition={{
            delay: 2,
            duration: 1,
            ease: "easeInOut",
            times: [0, 1],
          }}
          className="flex w-full h-full items-center justify-center"
        >
          <LogoMobileView />
        </motion.div>
        <motion.div
          initial={{ y: 0 }}
          animate={{
            y: "-45%",
            scale: 0.5,
          }}
          transition={{
            delay: 2,
            duration: 1,
            ease: "easeInOut",
            times: [0, 1],
          }}
          className="flex h-full items-center justify-center"
          style={{ textAlign: "center" }}
        >
          {loading2 ? (
            <a
              href="#"
              onClick={gotoArtStation}
              style={{
                color: "gray",
                fontSize: "13px",
                marginRight: "130px",
                position: "absolute",
                textDecoration: "underline",
              }}
            >
              Go to my Artstation
            </a>
          ) : (
            ""
          )}
        </motion.div>
      </div>
      {loading2 ? (
        <>
          <IntroMobileView />
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
              height: "fit-content",
              position: "absolute",
              marginTop: "700px",
              paddingLeft: "50px",
              paddingRight: "50px",
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
            }}
            className="bg-black"
          >
            <div
              style={{
                width: "100%",
                height: "300px",
                marginTop: "20px",
              }}
              className="bg-white items-center justify-center"
            ></div>
            <div
              style={{
                width: "100%",
                height: "300px",
                marginTop: "20px",
              }}
              className="bg-white items-center justify-center"
            ></div>
            <div
              style={{
                width: "100%",
                height: "300px",
                marginTop: "20px",
              }}
              className="bg-white items-center justify-center"
            ></div>
            <div
              style={{
                width: "100%",
                height: "300px",
                marginTop: "20px",
              }}
              className="bg-white items-center justify-center"
            ></div>
            <div
              style={{
                width: "100%",
                height: "300px",
                marginTop: "20px",
              }}
              className="bg-white items-center justify-center"
            ></div>
            <div
              style={{
                width: "100%",
                height: "300px",
                marginTop: "20px",
              }}
              className="bg-white items-center justify-center"
            ></div>
          </motion.div>
        </>
      ) : (
        ""
      )}
    </>
  );
}
