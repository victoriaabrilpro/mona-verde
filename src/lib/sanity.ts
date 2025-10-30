import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: 'k070j43o',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2024-01-01',
})

const builder = imageUrlBuilder(client)

export function urlFor(source: any) {
  return builder.image(source)
}

// Sanity queries
export const queries = {
  partnersSection: `*[_type == "partnersSection"][0] {
    _id,
    sectionTitle,
    partners[] {
      _key,
      name,
      logo,
      order
    } | order(order asc)
  }`,
  
  heroSection: `*[_type == "heroSection"][0] {
  logo,
  images,
  tagline
}`,
  
  contactInfo: `*[_type == "contactInfo"][0] {
  logo,
  description,
  phone,
  bookingEmail,
  eventsEmail,
  jobsEmail,
  address,
  hours,
  socialMedia
}`,
  
  eventsPage: `*[_type == "eventsPage"][0] {
  _id,
  pageTitle,
  events[] {
    _key,
    title,
    date,
    image
  }
  }`,
  
  aboutPage: `*[_type == "aboutPage"][0] {
    monaGroupLogo,
    storyTitle,
    storyParagraphs,
    storyImage,
    values
  }`,
  
  cuisinePage: `*[_type == "cuisinePage"][0] {
    videoUrl,
    menuLink,
    title,
    description,
    carouselImages
  }`,
  
  homePage: `*[_type == "homePage"][0] {
    monaExperience,
    rhythmOfMona
  }`,
  
  careersPage: `*[_type == "careersPage"][0] {
    title,
    paragraphs,
    jobsEmail,
    linkedInUrl,
    mainImage,
    benefits
  }`,
  reservationPage: `*[_type == "reservationPage"][0] {
    bookingSection,
    eventsSection,
    eventTypes
  }`,
  privacyPolicy: `*[_type == "privacyPolicy"][0] {
  title,
  subtitle,
  introduction,
  sections,
  contactAddress,
  acknowledgment,
  lastUpdated
}`,

termsOfService: `*[_type == "termsOfService"][0] {
  title,
  subtitle,
  introduction,
  sections,
  contactAddress,
  acknowledgment,
  lastUpdated
}`,
}