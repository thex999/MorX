"use client"; 
import React from "react"


import { ArrowRight, AtSign, BarChart3, Fingerprint, Shield } from 'lucide-react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import BackgroundGrid from "@/components/ui/animated-grid-pattern"

export default function AbhiloHero() {
  return (
    <section className="relative text-white py-20 min-h-screen flex items-center overflow-hidden">
      <BackgroundGrid className="absolute inset-0 z-0" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Land High-Paying Clients in 90 Days
            </h1>
            <p className="text-lg text-gray-400 max-w-lg">
              We help you figure out where to find your leads, how to engage with them, and how to approach each negotiation individually.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="#contact"
                className="inline-flex h-12 items-center justify-center rounded-full bg-white px-8 text-sm font-medium text-black transition-colors hover:bg-gray-100"
              >
                Book Demo <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                href="#services"
                className="inline-flex h-12 items-center justify-center rounded-full border border-white/20 px-8 text-sm font-medium transition-colors hover:bg-white/10"
              >
                Learn More
              </Link>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4"
          >
            {[
              {
                icon: <AtSign className="h-6 w-6" />,
                title: "Client Acquisition Blueprint",
                description: "Find leads, pitch & sell them. Consistently.",
              },
              {
                icon: <Fingerprint className="h-6 w-6" />,
                title: "Find Your Unique Advantage",
                description: "Figure out your edge.",
              },
              {
                icon: <Shield className="h-6 w-6" />,
                title: "Client Retention System",
                description: "Keep your clients coming back.",
              },
              {
                icon: <BarChart3 className="h-6 w-6" />,
                title: "Team-Building Framework",
                description: "Grow your company. Scale your operations.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="flex gap-4 p-4 rounded-2xl bg-zinc-900/50 hover:bg-zinc-900 transition-colors cursor-pointer group"
              >
                <div className="text-gray-400 group-hover:text-white transition-colors">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-semibold group-hover:text-white transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-400">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}