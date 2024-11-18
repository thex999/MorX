"use client"; 

import { motion } from 'framer-motion'
import { BarChart3, Building2, MessageSquare, Code, Lightbulb, Zap, ArrowRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import React from 'react';

export default function Services() {
  const services = [
    {
      icon: <Building2 className="h-8 w-8" />,
      title: "Business Strategy",
      description: "Develop winning strategies to achieve your business goals.",
      features: ["Market Analysis", "Competitive Research", "Growth Planning"],
    },
    {
      icon: <MessageSquare className="h-8 w-8" />,
      title: "Digital Marketing",
      description: "Reach and engage your target audience effectively.",
      features: ["Social Media", "Content Strategy", "SEO Optimization"],
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Analytics & Insights",
      description: "Make data-driven decisions for your business.",
      features: ["Performance Tracking", "Customer Insights", "ROI Analysis"],
    },
    {
      icon: <Code className="h-8 w-8" />,
      title: "Web Development",
      description: "Create stunning, responsive websites that convert.",
      features: ["Custom Design", "E-commerce Solutions", "Web Applications"],
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "Innovation Consulting",
      description: "Stay ahead of the curve with cutting-edge solutions.",
      features: ["Trend Analysis", "Product Innovation", "Digital Transformation"],
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "AI Integration",
      description: "Harness the power of artificial intelligence for your business.",
      features: ["Machine Learning", "Natural Language Processing", "Predictive Analytics"],
    },
  ]

  return (
    <section id="services" className="py-20 lg:py-32  text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            Our Services
          </h2>
          <p className="text-xl text-white mb-8 opacity-80">
            Comprehensive solutions to help your business thrive in the digital age
          </p>
          <Button variant="outline" size="lg" className="bg-transparent text-white border-white hover:bg-white hover:text-black transition-colors">
            Get Started
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="w-full flex flex-wrap justify-center mb-8 bg-transparent border-b border-white/20">
            {['all', 'strategy', 'marketing', 'analytics', 'development', 'innovation', 'ai'].map((tab) => (
              <TabsTrigger
                key={tab}
                value={tab}
                className={`px-4 py-2 transition-opacity 
                  ${tab === 'all' ? 'text-white' : 'text-white opacity-60 hover:opacity-100'} 
                  data-[state=active]:opacity-100 
                  data-[state=active]:border-b-2 
                  data-[state=active]:border-white 
                  data-[state=active]:text-white`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </TabsTrigger>
            ))}
          </TabsList>
          <TabsContent value="all" className="mt-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <ServiceCard key={index} service={service} index={index} />
              ))}
            </div>
          </TabsContent>
          {['strategy', 'marketing', 'analytics', 'development', 'innovation', 'ai'].map((tab) => (
            <TabsContent key={tab} value={tab} className="mt-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services
                  .filter((service) => service.title.toLowerCase().includes(tab))
                  .map((service, index) => (
                    <ServiceCard key={index} service={service} index={index} />
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
        
      </div>
      <div className="py-20"></div>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to transform your business?
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Let's work together to achieve your goals and drive success.
          </p>
          <Button size="lg" className="bg-white text-black hover:bg-gray-200 transition-colors">
            Schedule a Consultation
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </div>
    </section>
    
  )
}

function ServiceCard({ service, index }: { service: any, index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Card className="bg-black border border-white/10 hover:border-white/30 transition-colors group">
        <CardHeader>
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-white/5 rounded-lg group-hover:bg-white/10 transition-colors">
              {React.cloneElement(service.icon, { className: "h-8 w-8 text-white" })}
            </div>
            <span className="text-2xl font-bold text-white/20 group-hover:text-white/40 transition-colors">
              0{index + 1}
            </span>
          </div>
          <CardTitle className="text-white text-xl mb-2">{service.title}</CardTitle>
          <CardDescription className="text-white/60">{service.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {service.features.map((feature: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined, index: React.Key | null | undefined) => (
              <li key={index} className="flex items-center text-sm text-white/80">
                <div className="w-1 h-1 rounded-full bg-white mr-2"></div>
                {feature}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </motion.div>
    
  )
}