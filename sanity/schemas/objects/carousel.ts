import { defineField, defineType } from 'sanity'
export default defineType({
  name: 'carousel',
  title: 'Carrusel de imágenes',
  type: 'object',
  // Preview para que se vea en el Studio al insertar el bloque
  preview: {
    select: {
      title: 'title',
      media: 'images.0'
    },
    prepare(selection) {
      const { title, media } = selection
      return {
        title: title || 'Carrusel (sin título)',
        media,
      }
    },
  },
  fields: [
    defineField({
      name: 'title',
      title: 'Título del carrusel (opcional)',
      type: 'string',
    }),
    defineField({
      name: 'images',
      title: 'Imágenes',
      type: 'array',
      of: [
        {
          type: 'image',
          title: 'Imagen',
          options: {
            hotspot: true,
          },
          //  un fieldset para agrupar metadatos y poder colapsarlos
          fieldsets: [
            {
              name: 'meta',
              title: 'Metadatos de la imagen',
              options: { collapsible: true, collapsed: true },
            },
          ],
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Texto alternativo (alt)',
              description: 'Importante para accesibilidad y SEO. Visible por defecto.',
             
            },
            {
              name: 'caption',
              type: 'string',
              title: 'Pie / descripción',
              description: 'Texto corto que aparecerá debajo de la imagen (opcional).',
              fieldset: 'meta', // queda dentro del fieldset colapsable
            },
            {
              name: 'credit',
              type: 'string',
              title: 'Crédito / Autor',
              description: 'Quién tomó la foto o fuente.',
              fieldset: 'meta',
            },
          ],
        },
      ],
      
      validation: (Rule) => Rule.min(2).error('El carrusel debe tener al menos 2 imágenes.'),
    }),
  ],
})
