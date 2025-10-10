import * as React from 'react';
import Image from 'next/image';
import { urlFor } from '@/lib/sanity'; 
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

// Define la interfaz de los datos que vienen de Sanity.
interface SanityImage {
  _type: 'image';
  asset: {
    _ref: string;
  };
  alt?: string;
}

interface CarouselProps {
  title?: string;
  images: SanityImage[];
}

export const CarouselBlock = ({ title, images }: CarouselProps) => {
  if (!images || images.length === 0) {
    return null;
  }

  return (
    <div className="w-full max-w-2xl mx-auto my-8">
      {title && <h2 className="text-2xl font-bold mb-4 text-center">{title}</h2>}
      <Carousel className="w-full">
        <CarouselContent>
          {images.map((image, index) => {
            const imageUrl = image ? urlFor(image).url() : null;
            if (!imageUrl) return null;

            return (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-video items-center justify-center p-6">
                      <Image
                        src={imageUrl}
                        alt={image.alt || `Imagen ${index + 1}`}
                        width={800} // Ajusta el tamaño de la imagen según tus necesidades
                        height={450}
                        className="rounded-lg object-cover w-full h-full"
                      />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};