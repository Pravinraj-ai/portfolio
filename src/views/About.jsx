import React, { useContext } from "react";
import { techStack } from "../constants";
import { ThemeContext } from "../themeProvider";
import { motion } from "framer-motion";
import pravinImage from "../assets/pravin1.jpg";

const About = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div id="about" className={darkMode === true ? "bg-white" : "bg-gray-900"}>
      <div className="max-w-7xl mx-auto x-4 sm:px-6 lg:px-8 px-4 md:mt-0 pt-24 pb-12">
        <h2
          className={
            darkMode
              ? "text-5xl font-bold px-4 md:px-0 text-center"
              : "text-5xl font-bold px-4 md:px-0 text-center text-white"
          }
        >
          About Me
        </h2>
        <div>
          <div className="flex flex-col md:flex-row gap-4 mt-12 px-4 sm:px-6 md:px-0">
            <motion.div className="md:w-4/5 order-2 md:order-1">
              <h4 className="text-3xl font-semibold text-blue-500">A bit about me</h4>
              <p
                className={
                  darkMode
                    ? "mt-4 text-xl text-justify text-gray-500"
                    : "mt-4 text-xl text-justify text-white"
                }
              >
                I am an aspiring Artificial Intelligence Engineer 
                with expertise in MLOps, Cloud Computing, and 
                Full-Stack Development. My experience spans 
                across building scalable cloud architectures, 
                implementing CI/CD pipelines, and automating 
                infrastructure to optimize workflows. I have worked 
                on AI-driven solutions, integrating Flask, Docker, 
                and AWS in real-world applications. My hands-on experience 
                with DevOps practices, containerization, and cloud deployments 
                has strengthened my ability to deliver efficient and 
                scalable solutions. Passionate about continuous learning, 
                I am eager to contribute to dynamic teams and drive 
                innovation through technology.
              </p>
            </motion.div>
            <motion.div className="md:w-1/5 order-1 md:order-2 flex justify-center items-center mt-8 md:mt-0">
              <img
                src={pravinImage}
                alt="Pravin Raj"
                className="w-full h-auto max-w-full max-h-80 object-contain rounded-lg"
              />
            </motion.div>

          </div>

          <motion.div
          >
            <h4 className="mt-12 text-3xl font-semibold text-blue-500">
              Technologies and Tools
            </h4>
            <p
              className={
                darkMode
                  ? "mt-4 text-xl text-justify text-gray-500"
                  : "mt-4 text-xl text-justify text-white"
              }
            >
              Leveraging a combination of advanced AI techniques and data science methodologies,
              I build intelligent systems and solutions.
              Additionally, my expertise in cloud computing and
              full stack development enables me to create scalable, high-performance applications
            </p>
          </motion.div>
          <motion.div className="flex flex-wrap mt-8 flex flex-wrap justify-center ">
            {techStack.map((el, index) => (
              <motion.div
                initial="hidden"
                whileInView={"visible"}
                variants={{
                  visible: {
                    y: 0,
                    opacity: 1,
                    transition: {
                      type: "spring",
                    },
                  },
                  hidden: { opacity: 1, y: 80 },
                }}
                className="py-2 px-4 bg-gray-50 md:m-4 mx-2 mt-6 rounded-lg flex items-center hover:scale-125 cursor-pointer md:w-48 w-40"
              >
                <img alt="" src={el.link} className="w-12" />
                <h4 className="text-md ml-4">{el.name}</h4>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div >
  );
};

export default About;
