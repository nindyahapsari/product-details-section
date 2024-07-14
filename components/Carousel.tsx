"use client";

import Image from "next/image";

export default function Carousel() {
  return (
    <>
      <div className="carousel w-full">
        <div id="item1" className="carousel-item w-full">
          <Image
            src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg"
            className="w-full"
            alt="product image"
            width={500}
            height={500}
          />
        </div>
        <div id="item2" className="carousel-item w-full">
          <Image
            src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg"
            className="w-full"
            alt="product image"
            width={500}
            height={500}
          />
        </div>
        <div id="item3" className="carousel-item w-full">
          <Image
            src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg"
            className="w-full"
            alt="product image"
            width={500}
            height={500}
          />
        </div>
        <div id="item4" className="carousel-item w-full">
          <Image
            src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg"
            className="w-full"
            alt="product image"
            width={500}
            height={500}
          />
        </div>
      </div>
      <div className="flex w-full justify-center gap-2 py-2">
        <a href="#item1" className="btn btn-xs">
          1
        </a>
        <a href="#item2" className="btn btn-xs">
          2
        </a>
        <a href="#item3" className="btn btn-xs">
          3
        </a>
        <a href="#item4" className="btn btn-xs">
          4
        </a>
      </div>
    </>
  );
}
