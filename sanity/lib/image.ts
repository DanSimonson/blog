import createImageUrlBuilder from '@sanity/image-url'
import type {Image} from 'sanity'

//import {dataset, projectId} from '../lib'

const imageBuilder = createImageUrlBuilder({
  projectId: 'jdcdmc4c' || '',
  dataset: 'production' || '',
})

export const urlForImage = (source: Image) => {
  return imageBuilder?.image(source).auto('format').fit('max')
}
