import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'reservationPage',
  title: 'Reservation Page',
  type: 'document',
  fields: [
    defineField({
      name: 'bookingSection',
      title: 'Booking Section',
      type: 'object',
      fields: [
        { name: 'title', title: 'Title', type: 'string', initialValue: 'BOOK YOUR EXPERIENCE' },
        {
          name: 'paragraphs',
          title: 'Description Paragraphs',
          type: 'array',
          of: [{ type: 'text' }],
        },
        { name: 'image', title: 'Section Image', type: 'image', options: { hotspot: true } },
      ],
    }),
    defineField({
      name: 'eventsSection',
      title: 'Events & Privatization Section',
      type: 'object',
      fields: [
        { name: 'title', title: 'Title', type: 'string', initialValue: 'EVENT AND PRIVATIZATION' },
        {
          name: 'paragraphs',
          title: 'Description Paragraphs',
          type: 'array',
          of: [{ type: 'text' }],
        },
        { name: 'image', title: 'Section Image', type: 'image', options: { hotspot: true } },
      ],
    }),
    defineField({
      name: 'eventTypes',
      title: 'Event Types',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', title: 'Title', type: 'string' },
            { name: 'description', title: 'Description', type: 'text' },
          ],
        },
      ],
    }),
  ],
  preview: {
    select: {
      bookingTitle: 'bookingSection.title',
      eventsTitle: 'eventsSection.title',
    },
    prepare({ bookingTitle, eventsTitle }) {
      return {
        title: 'Reservation Page',
        subtitle: `${bookingTitle || 'Booking'} • ${eventsTitle || 'Events'}`,
      }
    },
  },
})