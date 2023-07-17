import { motion } from "framer-motion"
import { slideIn, slideInBtn } from "../Motion";

const Home = () => {
    return (
        <div className=" lg:h-screen sm:h-screen md:h-screen  w-4/5 mx-auto">
            <div className=" pt-40 p-5">
                <motion.p variants={slideIn} animate="animate" initial="initial"
                    className=" text-brightTxt text-2xl sm:text-lg font-bold">Hello, my name is</motion.p>
                <motion.p variants={slideIn} animate="animate" initial="initial"
                    className=" font-Stretch text-mainTxt text-7xl md:text-5xl sm:text-2xl mt-4 font-extrabold ">TOOLULOPE</motion.p>
                <motion.p variants={slideIn} animate="animate" initial="initial"
                     className=" text-mainTxt text-7xl md:text-5xl sm:text-2xl mt-4 font-extrabold">I build stunning websites.</motion.p>
                <motion.p variants={slideIn} animate="animate" initial="initial"
                    className=" text-mainTxt text-2xl sm:text-lg font-bold mt-4 ">I'm a frontend developer who specializes in building exceptional digital experience.</motion.p>

                <motion.div variants={slideInBtn} animate="animate" initial="initial"
                     className=" mt-10 lg:flex lg:pr-48 sm:flex-col">
                    {/* <a href=""> */}
                        <button className=" sm:px-[8px] sm:py-[5px] md:px-[13px] md:py-[10px] lg:py-[17px] lg:px-[60px] btn rounded-[5px] md:text-sm sm:mb-5 md:mb-5"><span>View Résumé</span></button>
                    {/* </a> */}
                    <a href="https://github.com/akinlope" target="_blank" rel="noreferrer">
                        <button className=" sm:px-[8px] sm:py-[5px] md:px-[13px] md:py-[10px] lg:py-[17px] lg:px-[60px] btn rounded-[5px]"><span>View GitHub</span></button>
                    </a>
                </motion.div>
            </div>
        </div>
    );
}

export default Home;