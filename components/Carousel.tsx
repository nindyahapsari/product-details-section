"use client";

import Image from "next/image";

type ImageProps = {
  color: string;
  image_url: string;
};

type CarouselProps = {
  images: ImageProps[];
};

export default function Carousel({ images }: CarouselProps) {
  return (
    <>
      <div className="carousel w-full">
        {images.map((image, index) => (
          <div
            key={index}
            id={`item${index + 1}`}
            className="carousel-item w-full"
          >
            <Image
              src={image.image_url}
              className="w-full"
              alt="product image"
              width={400}
              height={500}
            />
          </div>
        ))}
      </div>
      <div className="flex w-full gap-2 p-2 justify-between overflow-x-auto no-scrollbar">
        {images.map((image, index) => (
          <a
            key={index}
            href={`#item${index + 1}`}
            className="btn p-0 rounded-md size-24 h-auto"
          >
            <Image
              src={image.image_url}
              className="object-contain"
              alt="product image"
              width={500}
              height={0}
            />
          </a>
        ))}
      </div>
    </>
  );
}
