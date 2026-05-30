export interface Project {
  id: string
  title: string
  description: string
  fullDescription: string
  image: string
  technologies: string[]
  link?: string
  metrics: {
    label: string
    value: string
  }[]
}

export interface Service {
  id: string
  title: string
  description: string
  icon: string
  benefits: string[]
}

export interface ContactFormData {
  name: string
  email: string
  company?: string
  message: string
}
