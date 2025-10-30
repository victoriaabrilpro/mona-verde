// schemaTypes/privacyPolicy.ts
import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'privacyPolicy',
  title: 'Privacy Policy',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      initialValue: 'Privacy Policy',
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
      initialValue: 'Mona Verde',
    }),
    defineField({
      name: 'introduction',
      title: 'Introduction',
      type: 'text',
    }),
    defineField({
      name: 'sections',
      title: 'Sections',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'heading',
              title: 'Section Heading',
              type: 'string',
            },
            {
              name: 'content',
              title: 'Content Blocks',
              type: 'array',
              of: [
                {
                  type: 'object',
                  fields: [
                    {
                      name: 'type',
                      title: 'Content Type',
                      type: 'string',
                      options: {
                        list: [
                          { title: 'Paragraph', value: 'paragraph' },
                          { title: 'Subheading', value: 'subheading' },
                          { title: 'List', value: 'list' },
                        ],
                      },
                    },
                    {
                      name: 'text',
                      title: 'Text',
                      type: 'text',
                      hidden: ({ parent }) => parent?.type === 'list',
                    },
                    {
                      name: 'items',
                      title: 'List Items',
                      type: 'array',
                      of: [{ type: 'string' }],
                      hidden: ({ parent }) => parent?.type !== 'list',
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'contactAddress',
      title: 'Contact Address',
      type: 'object',
      fields: [
        { name: 'line1', title: 'Line 1', type: 'string' },
        { name: 'line2', title: 'Line 2', type: 'string' },
        { name: 'line3', title: 'Line 3', type: 'string' },
      ],
    }),
    defineField({
      name: 'acknowledgment',
      title: 'Acknowledgment Text',
      type: 'text',
    }),
    defineField({
      name: 'lastUpdated',
      title: 'Last Updated',
      type: 'date',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'lastUpdated',
    },
    prepare({ title, subtitle }) {
      return {
        title: title || 'Privacy Policy',
        subtitle: subtitle ? `Last updated: ${subtitle}` : 'Legal Document',
      }
    },
  },
})