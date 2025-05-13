'use client'

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const ProductImages = ({ images }: { images: string[] }) => {
  const [current, setCurrent] = useState(1);
  console.log(images);

  return (
    <div className="space-y-4">
      {/* Main image */}
      <Image
        src={images[current]}
        alt="product image"
        width={1000}
        height={1000}
        className="min-h-[300px] object-cover object-center rounded-md"
      />

      {/* Thumbnail selector */}
      <div className="flex">
        {images.map((image, index) => (
          <div
            key={`${image}-${index}`}
            onClick={() => setCurrent(index)}
            className={cn(
              "mr-2 cursor-pointer hover:border-orange-600 rounded overflow-hidden",
              current === index && "border-2 border-orange-500"
            )}
          >
            <Image
              src={image}
              alt={`thumbnail-${index}`}
              width={100}
              height={100}
              className="object-cover object-center"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductImages;
