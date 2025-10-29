import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'aboutPage',
  title: 'About Page',
  type: 'document',
  fields: [
    defineField({
      name: 'monaGroupLogo',
      title: 'Mona Group Logo',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'storyTitle',
      title: 'Story Title',
      type: 'string',
      initialValue: "MONA'S STORY",
    }),
    defineField({
      name: 'storyParagraphs',
      title: 'Story Paragraphs',
      type: 'array',
      of: [{ type: 'text' }],
    }),
    defineField({
      name: 'storyImage',
      title: 'Story Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'values',
      title: 'Values',
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