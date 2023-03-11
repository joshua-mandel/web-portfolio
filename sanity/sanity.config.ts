import {defineConfig} from 'sanity/lib/exports'
import {deskTool} from 'sanity/desk'
import {schemaTypes} from './schemas'
import type {ComponentType} from 'react'
import {Plugin as Plugin_2} from 'sanity'

declare interface VisionConfig {
  defaultApiVersion: string
  defaultDataset?: string
}

export declare const visionTool: Plugin_2<void | VisionToolConfig>

export declare interface VisionToolConfig extends Partial<VisionConfig> {
  name?: string
  title?: string
  icon?: ComponentType
}

export default defineConfig({
  name: 'default',
  title: 'web-portfolio',

  projectId: 've8fo00y',
  dataset: 'production',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
