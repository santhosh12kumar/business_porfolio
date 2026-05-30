'use client'

import { projects } from '@/lib/portfolio-data'
import { ExternalLink } from 'lucide-react'

export function Projects() {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/30 mb-4">
            <span className="w-2 h-2 bg-accent rounded-full"></span>
            <span className="text-accent text-sm font-medium">Featured Work</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Projects That <span className="text-accent">Deliver Impact</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Showcasing our most successful implementations that drove real business value for our clients.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card border border-border rounded-xl overflow-hidden hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10"
            >
              {/* Project Image Placeholder */}
              <div className="relative h-64 bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
                <div className="text-center space-y-2 relative z-10">
                  <div className="text-5xl font-bold text-accent/30">{project.id}</div>
                  <p className="text-muted-foreground">{project.title}</p>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-foreground group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground">
                  {project.description}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-4 py-4 border-y border-border">
                  {project.metrics.map((metric, idx) => (
                    <div key={idx} className="text-center">
                      <div className="text-lg font-bold text-accent">{metric.value}</div>
                      <div className="text-xs text-muted-foreground">{metric.label}</div>
                    </div>
                  ))}
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-accent/10 text-accent text-xs rounded-full border border-accent/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Learn More */}
                <div className="flex items-center text-accent hover:gap-2 transition-all cursor-pointer group/link">
                  <span className="text-sm font-semibold">Learn More</span>
                  <ExternalLink size={16} className="opacity-0 group-hover/link:opacity-100 transition-opacity" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
