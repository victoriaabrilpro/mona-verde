import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'careersPage',
  title: 'Careers Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Page Title',
      type: 'string',
      initialValue: 'JOIN THE MONA EXPERIENCE',
    }),
    defineField({
      name: 'paragraphs',
      title: 'Description Paragraphs',
      type: 'array',
      of: [{ type: 'text' }],
    }),
    defineField({
      name: 'jobsEmail',
      title: 'Jobs Email',
      type: 'string',
    }),
    defineField({
      name: 'linkedInUrl',
      title: 'LinkedIn Careers URL',
      type: 'url',
    }),
    defineField({
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'benefits',
      title: 'Benefits/Values',
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
})