"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import IntroTabView from "./intro_tabView/page";
import LogoTabView from "./logo_tabView/page";
import ProjectsTabView from "./projects_tabView/page";
import { projectsArray } from "@/app/data/projects";

export default function TabView() {
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
            delay: 7.5,
            duration: 1,
            ease: "easeInOut",
            times: [0, 1],
          }}
          className="flex w-full h-full items-center justify-center"
        >
          <LogoTabView />
          {loading ? (
            <div
              className="w-fit absolute"
              style={{ paddingLeft: "250px", marginTop: "-10px" }}
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
            y: "-45%",
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
      {loading2 ? (
        <>
          <IntroTabView />
          <ProjectsTabView data={projectsArray} />
        </>
      ) : (
        ""
      )}
    </>
  );
}
