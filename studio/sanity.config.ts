import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {orderableDocumentListDeskItem} from '@sanity/orderable-document-list'

export default defineConfig({
  name: 'default',
  title: 'mona-verde-cms',

  projectId: 'k070j43o',
  dataset: 'production',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
