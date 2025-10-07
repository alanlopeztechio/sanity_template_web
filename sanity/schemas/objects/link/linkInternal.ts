import { defineField, defineType } from "sanity";

export const linkInternal = defineType({
    name: 'linkInternal',
    title: 'Link Internal',
    type: 'object',
    fields: [
        defineField({
            name: 'label',
            title: 'Label',
            type: 'string',
            validation: Rule => Rule.required().min(2)
        }),
        defineField({
            name: 'reference',
            title: 'Referencia',
            type: 'reference',
            to: [{type: 'page'}, {type: 'home'}],
        })
    ]
})