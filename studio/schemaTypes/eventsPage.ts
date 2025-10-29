import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'eventsPage',
  title: 'Events Page',
  type: 'document',
  fields: [
    defineField({
      name: 'pageTitle',
      title: 'Page Title',
      type: 'string',
      initialValue: "MONA VERDE'S EVENTS",
    }),
    defineField({
      name: 'events',
      title: 'Events',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Event Title',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'date',
              title: 'Date',
              type: 'string',
              description: 'e.g., "15 FÉVRIER • 20H00"',
            },
            {
              name: 'image',
              title: 'Event Image',
              type: 'image',
              options: {
                hotspot: true,
              },
            },
          ],
          preview: {
            select: {
              title: 'title',
              date: 'date',
              media: 'image',
            },
            prepare({ title, date, media }) {
              return {
                title: title || 'Untitled Event',
                subtitle: date || 'No date',
                media,
              }
            },
          },
        },
      ],
    }),
  ],
})