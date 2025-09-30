import { defineType } from "sanity";

export const featureItem = defineType({
    type: 'object',
    name: 'featureItem',
    title: 'Elemento de Característica',
    fields: [
        {
             type: 'string',
             name: 'title',
             title: 'Título',
             description: 'Título de la característica',
             validation: Rule => Rule.required().min(5).max(50)
        },
         {
             type: 'string',
             name: 'description',
             title: 'Descripción',
             description: 'Descripción de la característica',
             validation: Rule => Rule.required().min(5).max(50)
        },
    ]
})