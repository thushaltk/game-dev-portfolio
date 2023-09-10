"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function ProjectsWebView(props: any) {
  const [data, setData] = useState(props.data);

  useEffect(() => {
    setData(props.data);
  }, []);

  return (
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
        alignItems: "center",
        flexDirection: "column",
      }}
      className="bg-black"
    >
      <div
        style={{
          width: "100%",
          height: "fit-content",
          textAlign: "center",
          marginBottom: "30px",
        }}
      >
        <h1
          style={{
            color: "white",
            fontSize: "30px",
          }}
        >
          MY PROJECTS
        </h1>
      </div>
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
        }}
        className="bg-black"
      >
        {data?.map(
          (project: {
            id: number;
            projectTitle: string;
            projectImg: string;
            projectDesc: string;
            projectGithub: string;
          }) => (
            <div
              key={project.id}
              style={{
                width: "30%",
                height: "85%",
                marginBottom: "50px",
              }}
              className="bg-white items-center justify-center"
            >
              <img
                src={project.projectImg}
                style={{
                  width: "100%",
                  height: "100%",
                }}
              />
            </div>
          )
        )}
      </div>
    </motion.div>
  );
}
