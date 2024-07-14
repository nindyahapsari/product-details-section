import CollapseBox from "@/components/collapse/CollapseBox";
import SizeOptions from "@/components/SizeOptions";
import Ratings from "@/components/Ratings";
import Badge from "@/components/Badge";
import textContent from "../textContent.json";
import ColorOptions from "@/components/ColorOptions";
import Carousel from "@/components/Carousel";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen px-4 py-8 grid grid-cols-4 grid-flow-row auto-rows-auto text-neutral-600 desktop:max-w-7xl desktop:mx-auto desktop:grid-cols-12 desktop:gap-8">
      <div className="bg-green-400 col-span-4 desktop:col-span-6 desktop:my-4">
        <Carousel />
      </div>
      <div className="col-span-4 desktop:col-span-6">
        <div className="my-4 text-4xl font-medium text-neutral-900 desktop:text-5xl">
          Voyager Hoodie
        </div>
        <div className="flex flex-col gap-y-4">
          <div className="flex flex-row">
            <p className="text-3xl">$76</p>
            <s className="mx-4 self-end">$95</s>
          </div>
          <Badge />
          <Ratings />
        </div>
        <div className="my-4">
          <p>
            The Voyager Hoodie is for the explorer at heart. Its durable fabric
            and roomy pockters are perfect for those who are always searching
            for the next adventures.{" "}
          </p>
        </div>
        <div className="">
          <p className="text-sm">Available Colors</p>
          <ColorOptions />
        </div>

        <div className="my-8">
          <p className="text-sm">Available Sizes</p>
          <SizeOptions />
        </div>
        <div className="">
          <p className="text-sm">Quantity</p>
          <div className="my-4 w-3/6 tablet:w-1/3 flex flex-row flex-wrap justify-between border border-neutral-200 rounded-lg bg-gray-100">
            <button className="btn btn-ghost btn-sm text-base hover:border-indigo-600 active:border-indigo-600">
              -
            </button>
            <input
              type="text"
              className="w-20 border-none text-center bg-transparent"
              value="1"
              readOnly
            />
            <button className="btn btn-ghost text-base btn-sm hover:border-indigo-600 active:border-indigo-600">
              +
            </button>
          </div>
        </div>
        <div className="my-4">
          <button className="btn w-full bg-indigo-700 text-white hover:bg-indigo-800">
            Add to cart
          </button>
        </div>
        <div className="flex flex-col gap-y-4 mb-8">
          <CollapseBox
            key={textContent.features.contents[0] + "1"}
            title={textContent.features.title}
            contents={textContent.features.contents}
          />
          <CollapseBox
            key={textContent.fabricAndCare.contents[0] + "2"}
            title={textContent.fabricAndCare.title}
            contents={textContent.fabricAndCare.contents}
          />
          <CollapseBox
            key={textContent.shipping.contents[0] + "3"}
            title={textContent.shipping.title}
            contents={textContent.shipping.contents}
          />
        </div>
      </div>
    </div>
  );
}
