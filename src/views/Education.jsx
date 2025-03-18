import React, { useContext } from "react";
import { workexp, degrees, certifications, badges } from "../constants";
import { ThemeContext } from "../themeProvider";
import { motion } from "framer-motion";

const Education = () => {
  const theme = useContext(ThemeContext);
  const transition = {
    duration: 0.3,
    ease: "easeInOut",
  };



  return (
    <div
      className={
        theme.state.darkMode ? "pb-20 bg-white" : "pb-20 bg-gray-900"
      }
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20" id="education">
        <h2
          className="text-5xl font-bold px-4 md:px-0 text-center text-blue-500"
        >
          Qualification
        </h2>
        <div className="mt-16">
          <div className="mt-16">
            <h4 className="text-3xl font-semibold text-blue-500">Work Experience</h4>
            <div className="mt-8">
              {workexp.map((workexp, index) => (
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
                  transition={transition}
                  className={
                    theme.state.darkMode
                      ? "w-full max-w-4xl p-4 bg-gray-100 rounded-lg flex items-center mx-auto mb-8"
                      : "w-full max-w-4xl p-4 bg-gray-800 rounded-lg flex items-center mx-auto mb-8"
                  }
                >
                  <div className="flex-none w-20 h-20 mr-4">
                    <img src={workexp.tLogo} alt={workexp.company} className="w-full h-full object-contain" />
                  </div>
                  <div className="flex-grow">
                    <h4 className={theme.state.darkMode ? "text-xl font-bold text-black" : "text-xl font-bold text-white"}>{workexp.role}</h4>
                    <p className={theme.state.darkMode ? "text-lg mt-2 text-black" : "text-lg mt-2 text-white"}>{workexp.company}</p>
                    <p className={theme.state.darkMode ? "text-lg mt-2 text-black" : "text-lg mt-2 text-white"}>{workexp.duration}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div> 
          <div className="mt-16">
            <h4 className="text-3xl font-semibold text-blue-500">Education</h4>
            <div className="mt-8">
              {degrees.map((degree, index) => (
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
                  transition={transition}
                  className={
                    theme.state.darkMode
                      ? "w-full max-w-4xl p-4 bg-gray-100 rounded-lg flex items-center mx-auto mb-8"
                      : "w-full max-w-4xl p-4 bg-gray-800 rounded-lg flex items-center mx-auto mb-8"
                  }
                >
                  <div className="flex-none w-20 h-20 mr-4">
                    <img src={degree.collegeLogo} alt={degree.university} className="w-full h-full object-contain" />
                  </div>
                  <div className="flex-grow">
                    <h4 className={theme.state.darkMode ? "text-xl font-bold text-black" : "text-xl font-bold text-white"}>{degree.degree}</h4>
                    <p className={theme.state.darkMode ? "text-lg mt-2 text-black" : "text-lg mt-2 text-white"}>{degree.university}</p>
                    <p className={theme.state.darkMode ? "text-lg mt-2 text-black" : "text-lg mt-2 text-white"}>{degree.duration}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="mt-16">
            <h4 className="text-3xl font-semibold text-blue-500">Certifications & Internships</h4>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
              {certifications.map((cert, index) => (
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
                  transition={transition}
                  className={
                    theme.state.darkMode
                      ? "p-4 bg-gray-100 rounded-lg flex items-center flex-col mt-8"
                      : "p-4 bg-gray-800 rounded-lg flex items-center flex-col mt-8"
                  }
                >
                  <img src={cert.logo} alt={cert.issuer} className="w-120 h-100 mb-4" />
                  <h4 className={theme.state.darkMode ? "text-xl font-bold text-black mt-4" : "text-xl font-bold text-white mt-4"}>{cert.name}</h4>
                  <p className={theme.state.darkMode ? "text-lg mt-2 text-black text-center" : "text-lg mt-2 text-white text-center"}>{cert.issuer}</p>
                  <p className={theme.state.darkMode ? "text-lg mt-2 text-black text-center" : "text-lg mt-2 text-white text-center"}>{cert.date}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="mt-16">
            <h4 className="text-3xl font-semibold text-blue-500">Badges</h4>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
              {badges.map((badge, index) => (
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
                  className={
                    theme.state.darkMode
                      ? "p-4 bg-gray-100 rounded-lg flex items-center flex-col mt-8"
                      : "p-4 bg-gray-800 rounded-lg flex items-center flex-col mt-8"
                  }
                >
                  <a href={badge.link} target="_blank" rel="noopener noreferrer">
                    <img
                      src={badge.logo}
                      alt={badge.name}
                      className="w-28 h-28 object-contain mb-4"
                    />
                  </a>
                  <h4 className={theme.state.darkMode ? "text-xl font-bold text-black mt-4" : "text-xl font-bold text-white mt-4"}>
                    {badge.name}
                  </h4>
                  <p className={theme.state.darkMode ? "text-lg mt-2 text-black text-center" : "text-lg mt-2 text-white text-center"}>
                    {badge.platform}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Education;
