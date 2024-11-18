"use client"
import { motion } from 'framer-motion'

interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

interface TestimonialCardProps {
  testimonial: Testimonial;
  index: number;
}

export default function Testimonials() {
  const testimonials: Testimonial[] = [
    {
      quote: "Working with MorX has been transformative for our business. Their strategic approach and dedication to results are unmatched.",
      author: "Sarah Johnson",
      role: "CEO, TechStart",
    },
    {
      quote: "The team's expertise and commitment to our success have helped us achieve our goals faster than we thought possible.",
      author: "Michael Chen",
      role: "Founder, GrowthLabs",
    },
    {
      quote: "Their data-driven approach and clear communication made the entire process smooth and effective. Highly recommended!",
      author: "Emily Rodriguez",
      role: "Marketing Director, InnovateCo",
    },
  ]

  return (
    <section id="testimonials" className="py-20 lg:py-32 text-white -mt-33">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold ">
            Client Testimonials
          </h2>
          <div className="w-16 h-1 bg-white mx-auto"></div>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function TestimonialCard({ testimonial, index }: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="relative"
    >
      <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-white opacity-20"></div>
      <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-white opacity-20"></div>
      <div className="p-6 relative z-10">
        <p className="text-lg mb-6 italic">
          "{testimonial.quote}"
        </p>
        <div className="flex items-center">
          <div className="w-10 h-0.5 bg-white mr-3"></div>
          <div>
            <p className="font-semibold">{testimonial.author}</p>
            <p className="text-sm text-gray-400">{testimonial.role}</p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}