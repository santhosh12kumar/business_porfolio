'use client'

import Link from 'next/link'

export function Footer() {
  return (
    <footer className="border-t border-border bg-card/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">T</span>
              </div>
              <span className="font-bold text-lg text-foreground">TechVision</span>
            </Link>
            <p className="text-muted-foreground text-sm">
              Premium software solutions for forward-thinking businesses.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Navigation</h3>
            <ul className="space-y-2">
              {[
                { label: 'Home', href: '#home' },
                { label: 'Projects', href: '#projects' },
                { label: 'Services', href: '#services' }
              ].map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="text-muted-foreground hover:text-accent transition-colors text-sm">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Services</h3>
            <ul className="space-y-2">
              {[
                'Custom Development',
                'Cloud Architecture',
                'AI & Machine Learning',
                'Mobile Apps'
              ].map((service) => (
                <li key={service}>
                  <a href="#services" className="text-muted-foreground hover:text-accent transition-colors text-sm">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="mailto:hello@techvision.com" className="text-muted-foreground hover:text-accent transition-colors">
                  hello@techvision.com
                </a>
              </li>
              <li>
                <a href="tel:+1234567890" className="text-muted-foreground hover:text-accent transition-colors">
                  +91 000000000
                </a>
              </li>
              <li className="text-muted-foreground">
                San Francisco, CA
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © 2026 TechVision. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-muted-foreground hover:text-accent transition-colors text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-muted-foreground hover:text-accent transition-colors text-sm">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
