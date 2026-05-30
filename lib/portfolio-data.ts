import { Project, Service } from './types'

export const projects: Project[] = [
  {
    id: '1',
    title: 'Enterprise SaaS Platform',
    description: 'Full-stack application serving 50K+ users globally',
    fullDescription: 'Built a scalable SaaS platform with real-time collaboration features, advanced analytics, and multi-tenant architecture. Implemented microservices infrastructure with Kubernetes for optimal performance.',
    image: '/projects/saas.jpg',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Kubernetes', 'AWS'],
    metrics: [
      { label: 'Users', value: '50K+' },
      { label: 'Uptime', value: '99.99%' },
      { label: 'Performance', value: '< 200ms' }
    ]
  },
  {
    id: '2',
    title: 'Mobile Banking Application',
    description: 'Secure financial platform with 1M+ transactions monthly',
    fullDescription: 'Developed end-to-end mobile banking solution with biometric authentication, real-time payments, and comprehensive security compliance. Achieved PCI DSS Level 1 certification.',
    image: '/projects/banking.jpg',
    technologies: ['React Native', 'Node.js', 'Redis', 'PostgreSQL', 'Stripe'],
    metrics: [
      { label: 'Transactions', value: '1M+' },
      { label: 'Daily Users', value: '100K+' },
      { label: 'Security Score', value: '98%' }
    ]
  },
  {
    id: '3',
    title: 'AI Analytics Dashboard',
    description: 'Real-time data visualization with machine learning insights',
    fullDescription: 'Created comprehensive analytics platform with AI-powered insights, predictive modeling, and custom data visualization. Processing 10GB+ data daily with sub-second query times.',
    image: '/projects/analytics.jpg',
    technologies: ['React', 'Python', 'TensorFlow', 'BigQuery', 'D3.js'],
    metrics: [
      { label: 'Data Processed', value: '10GB+/day' },
      { label: 'Query Speed', value: '< 1s' },
      { label: 'Accuracy', value: '94%' }
    ]
  },
  {
    id: '4',
    title: 'E-Commerce Platform',
    description: 'Next-gen shopping experience with AI recommendations',
    fullDescription: 'Engineered high-performance e-commerce platform with personalized recommendations, dynamic pricing, and inventory management. Handles 10K concurrent users without performance degradation.',
    image: '/projects/ecommerce.jpg',
    technologies: ['Next.js', 'Python', 'MongoDB', 'Elasticsearch', 'AWS Lambda'],
    metrics: [
      { label: 'Concurrent Users', value: '10K+' },
      { label: 'Conversion Rate', value: '+35%' },
      { label: 'Load Time', value: '< 1s' }
    ]
  }
]

export const services: Service[] = [
  {
    id: '1',
    title: 'Custom Software Development',
    description: 'Tailored solutions built from the ground up for your specific business needs and scale.',
    icon: '⚙️',
    benefits: [
      'Full-stack development expertise',
      'Agile & Scrum methodologies',
      'Scalable architecture design',
      'API development & integration'
    ]
  },
  {
    id: '2',
    title: 'Cloud Architecture & DevOps',
    description: 'Modern cloud infrastructure, CI/CD pipelines, and DevOps best practices.',
    icon: '☁️',
    benefits: [
      'AWS & multi-cloud expertise',
      'Kubernetes orchestration',
      'Infrastructure as Code',
      '24/7 monitoring & support'
    ]
  },
  {
    id: '3',
    title: 'AI & Machine Learning',
    description: 'Integrate cutting-edge AI and ML models to unlock data-driven insights.',
    icon: '🤖',
    benefits: [
      'Predictive analytics',
      'Natural language processing',
      'Computer vision solutions',
      'Custom model training'
    ]
  },
  {
    id: '4',
    title: 'Mobile Development',
    description: 'Native and cross-platform mobile applications for iOS and Android.',
    icon: '📱',
    benefits: [
      'React Native & Flutter expertise',
      'Native performance optimization',
      'App store deployment',
      'Push notifications & analytics'
    ]
  },
  {
    id: '5',
    title: 'System Integration',
    description: 'Seamless integration of disparate systems and legacy technology.',
    icon: '🔗',
    benefits: [
      'API gateway solutions',
      'Data migration services',
      'Legacy system modernization',
      'Third-party integrations'
    ]
  },
  {
    id: '6',
    title: 'Technical Consulting',
    description: 'Strategic guidance on technology decisions, architecture, and best practices.',
    icon: '💡',
    benefits: [
      'Technology roadmap planning',
      'Security & compliance audits',
      'Performance optimization',
      'Team augmentation'
    ]
  }
]
