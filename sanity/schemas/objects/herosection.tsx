import { InfoOutlineIcon, SparklesIcon , HeartFilledIcon} from "@sanity/icons";
import { LayoutDashboard } from "lucide-react";
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
                    marks: {
                        decorators: [
                            { title: "Strong", value: "strong" },
                            { title: "Emphasis", value: "em" },
                            { title: "Code", value: "code" },
                            { title: "Underline", value: "underline" },
                            { title: "Strike", value: "strike-through" },
                            {
                                title: "Texto Primario",
                                value: "text_primary",
                                component: (props) => {
                                    return <span className= 'text-primary'>{props.children}</span>
                                },
                                icon: SparklesIcon
                            },
                            {
                                title: "Texto Secundario",
                                value: "text_secondary",
                                component: (props) => {
                                    return <span className= 'text-muted-foreground text-pretty'>{props.children}</span>
                                },
                                icon: InfoOutlineIcon
                            }
                       ]
                    }
                }
            ]
        }
    ],
    preview: {
        select: {
            title: 'titulo',
            image: 'icon',
        },
        prepare : ({ title, image }) => ({
            title: 'Hero Section',
            media: LayoutDashboard,
        })
    }
})