import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'contactInfo',
  title: 'Contact Information',
  type: 'document',
  fields: [
    defineField({
      name: 'logo',
      title: 'Footer Logo',
      type: 'image',
      options: { hotspot: true },
      description: 'Logo displayed in the footer',
    }),
    defineField({
      name: 'description',
      title: 'Footer Description',
      type: 'text',
      description: 'Short description displayed under the logo in footer',
    }),
    defineField({
      name: 'phone',
      title: 'Phone Number',
      type: 'string',
    }),
    defineField({
      name: 'bookingEmail',
      title: 'Booking Email',
      type: 'string',
    }),
    defineField({
      name: 'eventsEmail',
      title: 'Events Email',
      type: 'string',
    }),
    defineField({
      name: 'jobsEmail',
      title: 'Jobs Email',
      type: 'string',
    }),
    defineField({
      name: 'address',
      title: 'Address',
      type: 'object',
      fields: [
        { name: 'street', title: 'Street', type: 'string' },
        { name: 'city', title: 'City', type: 'string' },
        { name: 'postalCode', title: 'Postal Code', type: 'string' },
        { name: 'country', title: 'Country', type: 'string' },
        { name: 'googleMapsLink', title: 'Google Maps Link', type: 'url' },
      ],
    }),
    defineField({
      name: 'hours',
      title: 'Opening Hours',
      type: 'object',
      fields: [
        { name: 'days', title: 'Days', type: 'string' },
        { name: 'hours', title: 'Hours', type: 'string' },
      ],
    }),
    defineField({
      name: 'socialMedia',
      title: 'Social Media',
      type: 'object',
      fields: [
        { name: 'instagram', title: 'Instagram URL', type: 'url' },
        { name: 'linkedin', title: 'LinkedIn URL', type: 'url' },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'phone',
      subtitle: 'address.street',
      media: 'logo',
    },
    prepare({ title, subtitle, media }) {
      return {
        title: 'Contact Information',
        subtitle: title || subtitle || 'Footer & Contact Details',
        media: media,
      }
    },
  },
})