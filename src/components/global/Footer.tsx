"use client"
import Link from "next/link";
import { motion } from "framer-motion";
import React from "react";

const Footer = () => {
    return (
        <motion.section
            className="h-[15vh] w-full flex items-center justify-center bg-white py-6 font-semibold text-black"
            initial="initial"
            animate="animate"
        >
            <motion.div className="mx-auto flex flex-col items-center text-center text-sm md:text-base lg:max-w-[1440px]">
                <span>© 2023 MorX. All rights reserved.</span>
                
            </motion.div>
        </motion.section>
    );
};

export default Footer;
