"use client";

import { useEffect, useState, useRef } from "react";

import {
  useMotionTemplate,
  useMotionValue,
  motion,
  animate,
} from "framer-motion";
import { GoDownload } from "react-icons/go";
import { BsGithub } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";

const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

const Hero = () => {
  const color = useMotionValue(COLORS_TOP[0]);
  const [hasEntered, setHasEntered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ top: 0, bottom: 0 });
  const MOUSE_OFFSET = { top: 20, left: 50 };

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);

  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #051931 65%, ${color})`;

  const handleSocialOnClick = (url) => {
    window.open(url, "_blank");
  };

  const imageRef = useRef(null);

  return (
    <motion.section
      id="hero"
      style={{
        backgroundImage,
      }}
      className="h-full w-full p-4 flex flex-col justify-center items-center"
    >
      {/* Avatar Image */}
      <motion.div
        ref={imageRef}
        onMouseEnter={() => {
          setHasEntered(true);
        }}
        onMouseLeave={() => {
          setHasEntered(false);
        }}
        onMouseMove={(e) => {
          if (hasEntered) {
            setMousePosition({
              top: e.clientY - imageRef.current.offsetTop + MOUSE_OFFSET.top,
              left: e.clientX - imageRef.current.offsetLeft - MOUSE_OFFSET.left,
            });
          }
        }}
        initial={{
          opacity: 0,
          y: -100,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{ duration: 0.8 }}
        className="relative cursor-pointer border-[4px] border-white rounded-[50%] w-[200px] h-[200px] bg-highlight flex justify-center items-center"
      >
        <img src="/assets/avatar.png" />
        {hasEntered && (
          <motion.div
            initial={{
              scale: 0,
            }}
            animate={{
              scale: 1,
            }}
            style={{
              top: mousePosition.top,
              left: mousePosition.left,
            }}
            className="absolute bg-white text-black text-center py-2 text-xl w-[80%] rounded-full "
          >
            Hello There 👋
          </motion.div>
        )}
      </motion.div>

      {/* Title */}
      <motion.div
        initial={{
          opacity: 0,
          y: 100,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-center mt-4"
      >
        <h1 className="text-4xl lg:text-6xl mt-4 font-normal">
          My Name is Matthew
        </h1>
        <h2 className="text-xl lg:text-2xl mt-2 lg:mt-4 font-thin">
          And I&apos;m a developer.
        </h2>

        {/* Social Icons */}
        <div className="flex gap-4 justify-center items-center mt-6">
          <BsGithub
            className="size-[30px] cursor-pointer text-zinc-400 hover:text-white ease-linear duration-150"
            onClick={() => {
              handleSocialOnClick("https://github.com/Generic626");
            }}
          />
          <FaLinkedin
            className="size-[30px] cursor-pointer text-zinc-400 hover:text-white ease-linear duration-150"
            onClick={() => {
              handleSocialOnClick(
                "https://www.linkedin.com/in/matthew-tze-ken-fung-01736b270/"
              );
            }}
          />
        </div>

        {/* Get Resume */}
        <motion.button
          whileHover={{ y: -8 }}
          whileTap={{ y: 5 }}
          className="inline bg-primary-light rounded-full py-2 px-4 mt-6 shadow-lg"
          onClick={() => {
            window.open("/Fung_Matthew_Tze_Ken_Resume_(IT)_2023.pdf", "_blank");
          }}
        >
          <div className="flex justify-center items-center gap-2">
            <span>Get My Resume</span>
            <GoDownload />
          </div>
        </motion.button>
      </motion.div>
    </motion.section>
  );
};

export default Hero;
