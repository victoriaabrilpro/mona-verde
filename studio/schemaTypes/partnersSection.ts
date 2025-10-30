import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'partnersSection',
  title: 'Partners Section',
  type: 'document',
  fields: [
    defineField({
      name: 'sectionTitle',
      title: 'Section Title',
      type: 'string',
      initialValue: 'Our Partners',
      description: 'Optional: Title for partners section',
    }),
    defineField({
      name: 'partners',
      title: 'Partners',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'name',
              title: 'Partner Name',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'logo',
              title: 'Logo',
              type: 'image',
              options: {
                hotspot: true,
              },
              validation: (Rule) => Rule.required(),
            },
            
          ],
          preview: {
            select: {
              title: 'name',
              order: 'order',
              media: 'logo',
            },
            prepare({ title, order, media }) {
              return {
                title: title || 'Untitled Partner',
                subtitle: order ? `Order: ${order}` : 'No order set',
                media,
              }
            },
          },
        },
      ],
    }),
  ],
})