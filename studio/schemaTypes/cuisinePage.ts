import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'cuisinePage',
  title: 'Cuisine Page',
  type: 'document',
  fields: [
    defineField({
      name: 'videoUrl',
      title: 'Hero Video URL',
      type: 'url',
      description: 'Vimeo video embed URL',
    }),
    defineField({
      name: 'menuLink',
      title: 'Menu Link',
      type: 'url',
    }),
    defineField({
      name: 'title',
      title: 'Section Title',
      type: 'string',
      initialValue: 'LATIN FUSION CUISINE',
    }),
    defineField({
      name: 'description',
      title: 'Description Paragraphs',
      type: 'array',
      of: [{ type: 'text' }],
    }),
    defineField({
      name: 'carouselImages',
      title: 'Carousel Images',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
    }),
  ],
})