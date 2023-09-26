"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import IntroMobileView from "./intro_mobileView/page";
import LogoMobileView from "./logo_mobileView/page";
import ProjectsMobileView from "./projects_mobileView/page";
import { projectsArray } from "../../data/projects";
import { Icon } from "@iconify/react";

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

  const gotoGithub = () => {
    window.open("https://github.com/thushaltk");
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
                marginLeft: "168%",
              }}
            >
              <a
                href="#"
                onClick={gotoGithub}
                style={{
                  color: "gray",
                  fontSize: "30px",
                  marginRight: "25px",
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
                  fontSize: "30px",
                  marginRight: "20px",
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
      {loading2 ? (
        <>
          <IntroMobileView />
          <ProjectsMobileView data={projectsArray} />
        </>
      ) : (
        ""
      )}
    </>
  );
}
