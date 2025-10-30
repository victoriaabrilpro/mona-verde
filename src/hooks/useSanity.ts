import { useState, useEffect } from 'react'
import { client, queries } from '../lib/sanity'
import type {
  Partner,
  HeroSection,
  ContactInfo,
  EventsPage,
  AboutPage,
  CuisinePage,
  HomePage,
  CareersPage,
  ReservationPage,
} from '../types/sanity'

export function useSanityData<T>(query: string) {
  const [data, setData] = useState<T | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    client
      .fetch<T>(query)
      .then((result) => {
        setData(result)
        setLoading(false)
      })
      .catch((err) => {
        setError(err)
        setLoading(false)
      })
  }, [query])

  return { data, loading, error }
}

// Specific hooks for each content type with proper typing
export function usePartners() {
  return useSanityData<Partner[]>(queries.partners)
}

export function useHeroSection() {
  return useSanityData<HeroSection>(queries.heroSection)
}

export function useContactInfo() {
  return useSanityData<ContactInfo>(queries.contactInfo)
}

export function useEventsPage() {
  return useSanityData<EventsPage>(queries.eventsPage)  // Not an array, single document
}

export function useAboutPage() {
  return useSanityData<AboutPage>(queries.aboutPage)
}

export function useCuisinePage() {
  return useSanityData<CuisinePage>(queries.cuisinePage)
}

export function useHomePage() {
  return useSanityData<HomePage>(queries.homePage)
}

export function useCareersPage() {
  return useSanityData<CareersPage>(queries.careersPage)
}

export function useReservationPage() {
  return useSanityData<ReservationPage>(queries.reservationPage)
}