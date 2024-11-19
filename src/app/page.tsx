import "./globals.css";

import Footer from "@/components/global/Footer";
import AbhiloHero from "@/components/HeroSection";
import Services from "@/components/global/services";
import Whc from "@/components/global/whychooseus";
import Contactus from "@/components/global/contactus";
import Navbar from "@/components/global/navbar";


import Testimonials from "@/components/global/testimonials";



import React from 'react'


import { Button } from "@/components/ui/button";
import { products, textwords } from "@/lib/constants";

import { ArrowRight, AtSign, BarChart3, CheckIcon, Fingerprint, Section, Shield } from "lucide-react";
import Image from "next/image";                                   
import Link from "next/link"; 
import { motion } from "framer-motion";
import { BackgroundWrapper } from "@/components/global/BackgroundWrapper";








export default function Home() {
  return (
    <main >
    



     
      <Navbar />

   
     
    <AbhiloHero></AbhiloHero>
   
 
<Whc></Whc>

<BackgroundWrapper>
  <Services />
</BackgroundWrapper>

<BackgroundWrapper>
  <Testimonials />
  <Contactus></Contactus>
</BackgroundWrapper>





    </main>
  );
}
