import React, { useContext, useState } from "react";
import heroBg from "../assets/webdev.svg";
import Typewriter from "typewriter-effect";
import { contactLinks } from "../constants";
import { ThemeContext } from "../themeProvider";
import { motion } from "framer-motion";
import classNames from "classnames";
import cloud from "../assets/cloudBg.png";
import cloudDark from "../assets/cloudDark.png";

const typewriterOptions = {
  strings: ["Data Scientist", "Cloud Engineer", "Full Stack Developer"],
  autoStart: true,
  loop: true,
  delay: 100,
  deleteSpeed: 50,
};

const Home = () => {
  const { state: { darkMode } } = useContext(ThemeContext);
  const [showResume, setShowResume] = useState(false);

  const backgroundImage = darkMode ? cloud : cloudDark;
  const textColor = darkMode ? "text-black" : "text-white";
  const bgClass = darkMode ? "bg-gray-900" : "bg-gray-100";

  return (
    <div
      style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: "cover" }}
      className={bgClass}
    >
      <main
        className="mx-auto max-w-7xl px-4 sm:px-6 md:mt-0 lg:px-8 flex flex-col md:flex-row items-center justify-center md:justify-between h-screen"
        id="/"
      >
        <div className="sm:text-center lg:text-left">
          <h1 className={classNames("text-4xl tracking-tight font-extrabold", {
            "text-gray-900 sm:text-5xl md:text-6xl": !darkMode,
            "text-white sm:text-5xl md:text-6xl": darkMode,
          })}>
            <motion.span className={textColor}>
              Hi, I am Pravin Raj
            </motion.span>
            <span className="block text-blue-500 z-0 lg:inline">
              <Typewriter options={typewriterOptions} />
            </span>
          </h1>
          <p
            className={classNames("mt-3 text-base sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0", {
              "text-black": darkMode,
              "text-white": !darkMode,
            })}
          >
            I love to play with data &#128521;
            <br></br>
            I specialize in transforming complex data into actionable insights and building scalable, high-performance applications. Let's create something amazing together!
          </p>
          <div className="flex md:justify-start">
            {contactLinks.map((el, index) => (
              <a
                key={index}
                href={el.link}
                className="mr-5 cursor-pointer mt-8 hover:scale-125"
              >
                <img alt={el.name} src={el.url} />
              </a>
            ))}
          </div>
          <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
            <div className="mt-3 sm:mt-0 cursor-pointer w-1/2">
              <button
                onClick={() => setShowResume(true)}
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-500 hover:bg-blue-200 md:py-4 md:text-lg md:px-10"
                style={{ maxWidth: '280px' }} // Adjust minWidth as needed
              >
                Resume
              </button>
            </div>
          </div>
        </div>
        <motion.img
          initial="hidden"
          whileInView="visible"
          variants={{
            visible: {
              y: 0,
              opacity: 1,
              transition: { type: "spring" },
            },
            hidden: { opacity: 1, y: 80 },
          }}
          src={heroBg}
          alt="Hero background"
          className="md:w-3/6 hidden sm:block"
        />
      </main>
      {showResume && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center z-50">
          <iframe
            src="https://drive.google.com/file/d/11QaC_O7u5loe0GkiCIEFeqBi28jG2yk9/preview"
            width="80%"
            height="80%"
            frameBorder="0"
            title="Resume"
          ></iframe>
          <button
            onClick={() => setShowResume(false)}
            className="absolute top-4 right-4 text-white bg-red-500 p-2 rounded"
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
};

export default Home;
