import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'heroSection',
  title: 'Hero Section',
  type: 'document',
  fields: [
    defineField({
      name: 'logo',
      title: 'Mona Verde Logo',
      type: 'image',
      options: { hotspot: true },
      description: 'The main Mona Verde logo displayed in the hero section',
    }),
    defineField({
      name: 'images',
      title: 'Hero Images',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: 'tagline',
      title: 'Tagline',
      type: 'string',
      initialValue: 'CELEBRATE · CONNECT · EXPERIENCE',
    }),
  ],
  preview: {
    select: {
      tagline: 'tagline',
      media: 'logo',
    },
    prepare({ tagline, media }) {
      return {
        title: 'Hero Section',
        subtitle: tagline || 'CELEBRATE · CONNECT · EXPERIENCE',
        media: media,
      }
    },
  },
})