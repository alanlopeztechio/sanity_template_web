import { createClient } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';

export const config = {
  projectId: '9mdd6dnz', // Reemplaza con tu ID de proyecto de Sanity
  dataset: 'production',
  apiVersion: '2021-10-21',
  useCdn: true,
};

export const sanityClient = createClient(config);

const builder = imageUrlBuilder(sanityClient);

export const urlFor = (source) => builder.image(source);