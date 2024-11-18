"use client"
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ArrowRight, Mail, Phone } from 'lucide-react'

export default function Contact() {
  return (
    <section className="py-20  text-white min-h-screen flex items-center">
      <div className="container mx-auto px-4 max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Contact Us
            </h2>
            <p className="text-xl text-white/70">
              Let's turn your ideas into reality
            </p>
          </div>
          <form className="space-y-6">
            <Input 
              type="text" 
              placeholder="Name" 
              className="w-full bg-transparent border border-white/30 focus:border-white rounded-full h-12 px-6 text-lg placeholder:text-white/50"
            />
            <Input 
              type="email" 
              placeholder="Your E-mail" 
              className="w-full bg-transparent border border-white/30 focus:border-white rounded-full h-12 px-6 text-lg placeholder:text-white/50"
            />
            <Textarea 
              placeholder="Your Message" 
              className="w-full bg-transparent border border-white/30 focus:border-white rounded-3xl min-h-[200px] p-6 text-lg placeholder:text-white/50 resize-none"
            />
            <div className="flex justify-between items-center">
              <div className="flex space-x-4">
                <a href="mailto:contact@morx.com" className="text-white/70 hover:text-white transition-colors">
                  <Mail className="h-6 w-6" />
                </a>
                <a href="tel:+15551234567" className="text-white/70 hover:text-white transition-colors">
                  <Phone className="h-6 w-6" />
                </a>
              </div>
              <Button 
                type="submit" 
                className="bg-transparent text-white border border-white/30 hover:border-white rounded-full px-8 py-2 text-lg transition-colors group"
              >
                Submit
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  )
}