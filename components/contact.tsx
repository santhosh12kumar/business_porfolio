'use client'

import { Mail, Phone, MapPin } from 'lucide-react'
import { ContactForm } from './contact-form'

export function Contact() {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/30 mb-4">
            <span className="w-2 h-2 bg-accent rounded-full"></span>
            <span className="text-accent text-sm font-medium">Let&apos;s Connect</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Ready to Start Your <span className="text-accent">Next Project?</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Get in touch with our team to discuss your vision and explore how we can help you succeed.
          </p>
        </div>

        {/* Contact Container */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            {/* Email */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-accent/10 border border-accent/30">
                  <Mail className="h-6 w-6 text-accent" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-1">Email</h3>
                <a href="mailto:hello@techvision.com" className="text-muted-foreground hover:text-accent transition-colors">
                  hello@techvision.com
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-accent/10 border border-accent/30">
                  <Phone className="h-6 w-6 text-accent" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-1">Phone</h3>
                <a href="tel:+1234567890" className="text-muted-foreground hover:text-accent transition-colors">
                  +1 (234) 567-890
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-accent/10 border border-accent/30">
                  <MapPin className="h-6 w-6 text-accent" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-1">Location</h3>
                <p className="text-muted-foreground">
                  San Francisco, CA<br />
                  United States
                </p>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-4">
              <h3 className="text-lg font-semibold text-foreground mb-4">Follow Us</h3>
              <div className="flex gap-4">
                {[
                  { name: 'Twitter', url: '#' },
                  { name: 'LinkedIn', url: '#' },
                  { name: 'GitHub', url: '#' }
                ].map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/30 flex items-center justify-center text-accent hover:bg-accent hover:text-primary-foreground transition-all"
                    title={social.name}
                  >
                    <span className="text-xs font-bold">{social.name[0]}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-card border border-border rounded-xl p-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
