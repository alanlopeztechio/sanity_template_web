import { defineType } from "sanity";

export const heroSection = defineType({
    type: "object",
    name: "heroSection",
    title: "Hero Section",
    fields: [
        {
            name: 'titulo',
            title: 'Título',
            type: 'array',
            of: [
                {
                    type: 'block',
                }
            ]
        }
    ]
})