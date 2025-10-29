import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  fields: [
    defineField({
      name: 'monaExperience',
      title: 'Mona Experience Section',
      type: 'object',
      fields: [
        { name: 'title', title: 'Title', type: 'string' },
        { name: 'subtitle', title: 'Subtitle', type: 'string' },
        {
          name: 'paragraphs',
          title: 'Paragraphs',
          type: 'array',
          of: [{ type: 'text' }],
        },
        {
          name: 'images',
          title: 'Carousel Images',
          type: 'array',
          of: [{ type: 'image', options: { hotspot: true } }],
        },
        { name: 'tagline', title: 'Tagline', type: 'string' },
      ],
    }),
    defineField({
      name: 'rhythmOfMona',
      title: 'Rhythm of Mona Section',
      type: 'object',
      fields: [
        { name: 'title', title: 'Title', type: 'string' },
        {
          name: 'paragraphs',
          title: 'Paragraphs',
          type: 'array',
          of: [{ type: 'text' }],
        },
        {
          name: 'images',
          title: 'Carousel Images',
          type: 'array',
          of: [{ type: 'image', options: { hotspot: true } }],
        },
      ],
    }),
  ],
})