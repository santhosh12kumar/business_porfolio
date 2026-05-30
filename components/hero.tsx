'use client'

import { ArrowRight } from 'lucide-react'

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 px-4">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        {/* Subtitle */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/30">
          <span className="w-2 h-2 bg-accent rounded-full"></span>
          <span className="text-accent text-sm font-medium">Transforming Ideas into Innovation</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight">
          Premium Software <span className="text-accent">Solutions</span>
        </h1>

        {/* Description */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          We craft cutting-edge software, scalable cloud infrastructure, and AI-powered solutions for businesses ready to lead their industry.
        </p>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 md:gap-8 py-8">
          <div className="space-y-2">
            <div className="text-3xl md:text-4xl font-bold text-accent">50+</div>
            <div className="text-sm text-muted-foreground">Projects Delivered</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl md:text-4xl font-bold text-accent">100%</div>
            <div className="text-sm text-muted-foreground">Client Satisfaction</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl md:text-4xl font-bold text-accent">12+</div>
            <div className="text-sm text-muted-foreground">Years Experience</div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
          <a
            href="#projects"
            className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-accent text-primary-foreground rounded-lg hover:opacity-90 transition-opacity font-semibold"
          >
            View Our Work
            <ArrowRight size={20} />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-3 border border-accent text-accent rounded-lg hover:bg-accent/10 transition-colors font-semibold"
          >
            Schedule a Call
          </a>
        </div>
      </div>
    </section>
  )
}
