import {CogIcon} from '@sanity/icons'
import {defineArrayMember, defineField, defineType} from 'sanity'

export default defineType({
  name: 'settings',
  title: 'Settings',
  type: 'document',
  icon: CogIcon,
  // Uncomment below to have edits publish automatically as you type
  // liveEdit: true,
  fields: [
    defineField({
      name: 'menuItems',
      title: 'Menu Item list',
      description: 'Links displayed on the header of your site.',
      type: 'array',
      of: [
        {
          title: 'Reference',
          type: 'reference',
          to: [
            {
              type: 'home',
            },
            {
              type: 'page',
            },
            {
              type: 'project',
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'footer',
      title: 'Footer Columns',
      description: 'This is a block of text that will be displayed at the bottom of the page.',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'footerColumn',
          title: 'Footer Column',
          fields: [
            defineField({
              name: 'titulo',
              title: 'Título de la columna',
              type: 'string',
            }),
            defineField({
              name: 'links',
              title: 'Links',
              type: 'array',
              of: [
                defineArrayMember({
                  type: 'object',
                  name: 'footerLink',
                  title: 'Footer Link',
                  fields: [
                    defineField({
                      name: 'type',
                      title: 'Tipo de link',
                      type: 'string',
                      options: {
                        list: [
                          { title: 'Page', value: 'page' },
                          { title: 'Custom URL', value: 'custom' },
                        ],
                        layout: 'radio',
                        direction: 'horizontal',
                      },
                      initialValue: 'page',
                      validation: Rule => Rule.required(),
                    }),
                    defineField({
                      name: 'label',
                      title: 'Label',
                      type: 'string',
                      validation: Rule => Rule.required(),
                    }),
                    defineField({
                      name: 'page',
                      title: 'Página a enlazar',
                      type: 'reference',
                      to: [{ type: 'page' }],
                      hidden: ({ parent }) => parent?.type !== 'page',
                    }),
                    defineField({
                      name: 'url',
                      title: 'Custom URL',
                      type: 'url',
                      hidden: ({ parent }) => parent?.type !== 'custom',
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'ogImage',
      title: 'Open Graph Image',
      type: 'image',
      description: 'Displayed on social cards and search engine results.',
      options: {
        hotspot: true,
      },
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Settings',
        subtitle: 'Menu Items, Footer Info, and Open Graph Image',
      }
    },
  },
})
