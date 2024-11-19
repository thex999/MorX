"use client"; 
import React from "react"
import { motion } from 'framer-motion'
import { CheckCircle, Lock, Shield } from 'lucide-react'

export default function Whc() {
  return (
    <section id="features" className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            We lift a weight off your chest
          </h2>
          <p className="text-xl text-gray-600">
            From tailor-made solutions and data insights, to staff augmentation
          </p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-12">
          {[
            {
              title: "No Headache",
              description: "We keep you updated on project updates at all times.",
              icon: <CheckCircle className="h-12 w-12" />,
            },
            {
              title: "Clear Pricing. No Lock-In",
              description: "We operate one of the most flexible models in the industry",
              icon: <Lock className="h-12 w-12" />,
            },
            {
              title: "Satisfaction Guaranteed",
              description: "Actions speak louder than words. We put our money where our mouth is.",
              icon: <Shield className="h-12 w-12" />,
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center p-3 bg-gray-100 rounded-2xl mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto mt-16 p-8  text-black "
        >
          <h3 className="text-4xl md:text-5xl font-bold mb-4">About Us</h3>
          <p className="text-lg md:text-xl">
            At MorX, we are committed to delivering innovative solutions that empower businesses. Our dedicated team works closely with clients to understand their unique challenges and provide tailored strategies for success. We believe in building long-term partnerships and driving growth through collaboration and expertise.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
