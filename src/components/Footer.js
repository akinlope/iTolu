import { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { BsTwitter, BsLinkedin, BsGithub } from "react-icons/bs";
import { AnimatePresence, motion } from "framer-motion";
import { fadeIn, slideIns, socialMadre } from "../Motion";

const Footer = () => {

    const [show, isShow] = useState(false);
    const handleClick = () => {
        isShow(!show)
    }

    const socials = [
        {
            id: 1,
            link: "https://www.twitter.com/akinlope",
            icon: <BsTwitter />
        },
        {
            id: 2,
            link: "https://www.linkedin.com/in/akinrimisi-tolulope-5863ba166/",
            icon: <BsLinkedin />
        },
        {
            id: 3,
            link: "https://www.github.com/akinlope",
            icon: <BsGithub />
        }
    ];

    const classes =
    "text-md md:text-xl text-secondary rounded-full bg-white block relative w-9 h-9 flex items-center justify-center duration-150";

    return (
        <motion.div
        variants={fadeIn("right")}
        initial="initial"
        animate="animate"
        custom={1.5}
        className="fixed z-50 bottom-8 right-3 md:right-12 flex flex-col items-center justify-center mr-10"
      >
        <AnimatePresence>
          {show && (
            <motion.div
              variants={socialMadre}
              className="flex flex-col items-center justify-between h-52 mb- md:mb-7"
              exit={{ x: 100, opacity: 0 }}
            >
              {socials.map(({ id, link, icon }) => {
                return (
                  <motion.li
                    className="list-none social"
                    variants={slideIns}
                    key={id}
                  >
                    <a href={link} className={classes}>
                      {icon}
                    </a>
                  </motion.li>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
        <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
          {show ? (
            <motion.div
              animate={show ? { rotate: 360 } : { rotate: 0 }}
              className="cursor-pointer rounded-full bg-[#66fcf1] w-10 h-10 flex justify-center items-center mt-10"
              onClick={handleClick}
            >
              <AiOutlineMinus />
            </motion.div>
          ) : (
            <motion.div 
              animate={show ? { rotate: 180 } : { rotate: 0 }}
              className="cursor-pointer rounded-full bg-[#66fcf1] w-10 h-10 flex justify-center items-center"
              onClick={handleClick}
            >
              <AiOutlinePlus />
            </motion.div>
          )}
        </div>
      </motion.div>
    )
}

export default Footer;