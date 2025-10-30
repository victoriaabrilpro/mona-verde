// Sanity Image Type
export interface SanityImage {
  _type: 'image'
  asset: {
    _ref: string
    _type: 'reference'
  }
  hotspot?: {
    x: number
    y: number
    height: number
    width: number
  }
}

// Partner
export interface Partner {
  _id: string
  _type: 'partner'
  name: string
  logo: SanityImage
  order?: number
}

// Hero Section
export interface HeroSection {
  _id: string
  _type: 'heroSection'
  logo?: SanityImage
  images: SanityImage[]
  tagline: string
}

// Contact Info
export interface ContactInfo {
  _id: string
  _type: 'contactInfo'
  logo?: SanityImage
  description?: string
  phone?: string
  bookingEmail?: string
  eventsEmail?: string
  jobsEmail?: string
  address?: {
    street: string
    city: string
    postalCode: string
    country: string
    googleMapsLink?: string
  }
  hours?: {
    days: string
    hours: string
  }
  socialMedia?: {
    instagram?: string
    linkedin?: string
  }
}

// Event (object inside Events Page)
export interface Event {
  _key?: string
  title: string
  date?: string
  image?: SanityImage
}

// Events Page (NEW - replaces individual Event documents)
export interface EventsPage {
  _id: string
  _type: 'eventsPage'
  pageTitle?: string
  events?: Event[]
}

// About Page
export interface AboutPage {
  _id: string
  _type: 'aboutPage'
  monaGroupLogo?: SanityImage
  storyTitle?: string
  storyParagraphs?: string[]
  storyImage?: SanityImage
  values?: Array<{
    title: string
    description: string
  }>
}

// Cuisine Page
export interface CuisinePage {
  _id: string
  _type: 'cuisinePage'
  videoUrl?: string
  menuLink?: string
  title?: string
  description?: string[]
  carouselImages?: SanityImage[]
}

// Home Page
export interface HomePage {
  _id: string
  _type: 'homePage'
  monaExperience?: {
    title: string
    subtitle: string
    paragraphs: string[]
    images: SanityImage[]
    tagline: string
  }
  rhythmOfMona?: {
    title: string
    paragraphs: string[]
    images: SanityImage[]
  }
}

// Careers Page
export interface CareersPage {
  _id: string
  _type: 'careersPage'
  title?: string
  paragraphs?: string[]
  jobsEmail?: string
  linkedInUrl?: string
  mainImage?: SanityImage
  benefits?: Array<{
    title: string
    description: string
  }>
}

// Reservation Page
export interface ReservationPage {
  _id: string
  _type: 'reservationPage'
  bookingSection?: {
    title: string
    paragraphs: string[]
    image?: SanityImage
  }
  eventsSection?: {
    title: string
    paragraphs: string[]
    image?: SanityImage
  }
  eventTypes?: Array<{
    title: string
    description: string
  }>
}

// Privacy Policy & Terms
export interface ContentBlock {
  type: 'paragraph' | 'subheading' | 'list'
  text?: string
  items?: string[]
}

export interface LegalSection {
  heading: string
  content: ContentBlock[]
}

export interface PrivacyPolicy {
  _id: string
  _type: 'privacyPolicy'
  title: string
  subtitle: string
  introduction: string
  sections: LegalSection[]
  contactAddress: {
    line1: string
    line2: string
    line3: string
  }
  acknowledgment: string
  lastUpdated?: string
}

export interface TermsOfService {
  _id: string
  _type: 'termsOfService'
  title: string
  subtitle: string
  introduction: string
  sections: LegalSection[]
  contactAddress: {
    line1: string
    line2: string
    line3: string
  }
  acknowledgment: string
  lastUpdated?: string
}