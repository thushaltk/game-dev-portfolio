"use client";
import Logo from "./logo/page";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Intro from "./intro/page";
import { useMediaQuery } from "react-responsive";
import Mobile1200px from "./mobile/mobile_1200px/page";

export default function Home() {
  const isResponsive = useMediaQuery({ query: "(max-width: 1172px)" });
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

  const gotoArtStation = () => {
    window.open(
      "https://thuzhaltk.artstation.com/"
    );
  }

  return (
    <>
    {isResponsive ? (<Mobile1200px/>) : (
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
              style={{ paddingLeft: "250px", paddingTop: "60px" }}
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
        <motion.div
          initial={{ y: 0 }}
          animate={{
            y: "-43%",
            scale: 0.5,
          }}
          transition={{
            delay: 8.5,
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
                fontSize: "23px",
                marginTop: "80px",
                marginRight: "300px",
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
      <>{loading2 ? (
        <>
          <Intro />
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
              marginTop: "700px",
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
        </>
      ) : (
        ""
      )
      }</>
      </>
      
      )
      }
      
    </>
  );
}
