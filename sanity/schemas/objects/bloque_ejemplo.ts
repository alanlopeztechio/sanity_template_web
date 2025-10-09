import { defineType } from "sanity";


export const bloque = defineType({
    name: "bloque_ejemplo",
    title: "Bloque Ejemplo",
    type: "object",
    fields: [
        {
            name: "titulo",
            title: "Título",
            type: "string"
        },
        {
            name: "contenido",
            title: "Contenido",
            type: "text"
        }
    ]
}
)