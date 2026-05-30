'use client'

import { services } from '@/lib/portfolio-data'
import { Check } from 'lucide-react'

export function Services() {
  return (
    <section id="services" className="py-20 px-4 bg-card/50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/30 mb-4">
            <span className="w-2 h-2 bg-accent rounded-full"></span>
            <span className="text-accent text-sm font-medium">Our Expertise</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Services Tailored for <span className="text-accent">Your Success</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive solutions covering every aspect of modern software development and digital transformation.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="group bg-background border border-border rounded-xl p-6 hover:border-accent/50 hover:shadow-lg hover:shadow-accent/10 transition-all duration-300"
            >
              {/* Icon */}
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Benefits */}
              <div className="space-y-3">
                {service.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-0.5">
                      <Check className="w-5 h-5 text-accent" />
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>

              {/* Learn More */}
              <a
                href="#contact"
                className="mt-6 inline-flex items-center text-accent text-sm font-semibold hover:gap-2 transition-all"
              >
                Explore Service →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
