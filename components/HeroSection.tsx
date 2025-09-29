import type { HeroSection as HeroSectionProps} from "@/types";
import { PortableText } from "next-sanity";
import React from "react";




export const HeroSection = ({ titulo, _type }: HeroSectionProps) => {
   console.log("HeroSection props:", titulo);
    return <div>Hola Mundo</div>
};
