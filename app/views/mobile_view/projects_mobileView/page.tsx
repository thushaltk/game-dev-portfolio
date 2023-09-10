"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function ProjectsMobileView(props: any) {
  const [data, setData] = useState(props.data);

  useEffect(() => {
    setData(props.data);
  }, []);

  return (
    <div
      style={{
        width: "100%",
        height: "fit-content",
        position: "absolute",
        marginTop: "830px",
        paddingLeft: "50px",
        paddingRight: "50px",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
      className="bg-black"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        style={{
          width: "100%",
          height: "fit-content",
          textAlign: "center",
          marginBottom: "20px",
          marginTop: "20px",
        }}
      >
        <h1
          style={{
            color: "white",
            fontSize: "20px",
          }}
        >
          MY PROJECTS
        </h1>
      </motion.div>
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
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              key={project.id}
              style={{
                width: "100%",
                height: "300px",
                marginBottom: "50px",
                borderRadius: "20px",
              }}
              className="bg-white items-center justify-center"
            >
              <img
                src={project.projectImg}
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "20px",
                }}
              />
            </motion.div>
          )
        )}
      </div>
    </div>
  );
}
