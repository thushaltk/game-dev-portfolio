"use client";
import LogoWebView from "./logo_webView/page";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import IntroWebView from "./intro_webView/page";
import ProjectsWebView from "./projects_webView/page";
import { projectsArray } from "../../data/projects";
import { Icon } from "@iconify/react";

export default function WebView() {
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
    window.open("https://thuzhaltk.artstation.com/");
  };

  const gotoGithub = () => {
    window.open("https://github.com/thushaltk");
  };

  return (
    <>
      <div
        style={{
          height: "100%",
          width: "100%",
          position: "absolute",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        className="	bg-black"
      >
        <motion.div
          initial={{ y: 0 }}
          animate={{
            y: "-170%",
            scale: 0.5,
          }}
          transition={{
            delay: 7.5,
            duration: 1,
            ease: "easeInOut",
            times: [0, 1],
          }}
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "50px",
          }}
        >
          <LogoWebView />
          {loading ? (
            <div className="w-fit absolute" style={{ paddingLeft: "250px" }}>
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
          {loading2 ? (
            <motion.div
              transition={{
                delay: 8.5,
                duration: 1,
                ease: "easeInOut",
                times: [0, 1],
              }}
              className="flex justify-center "
              style={{
                position: "absolute",
                width: "fit-content",
                height: "fit-content",
                marginLeft: "175%",
              }}
            >
              <a
                href="#"
                onClick={gotoGithub}
                style={{
                  color: "gray",
                  fontSize: "60px",
                  marginRight: "50px",
                  textDecoration: "underline",
                }}
              >
                <Icon icon="ant-design:github-filled" color="white" />
              </a>
              <a
                href="#"
                onClick={gotoArtStation}
                style={{
                  color: "gray",
                  fontSize: "60px",
                  marginRight: "50px",
                  textDecoration: "underline",
                }}
              >
                <Icon icon="simple-icons:artstation" color="white" />
              </a>
            </motion.div>
          ) : (
            ""
          )}
        </motion.div>
      </div>
      <>
        {loading2 ? (
          <>
            <IntroWebView />
            <ProjectsWebView data={projectsArray} />
          </>
        ) : (
          ""
        )}
      </>
    </>
  );
}
