import CollapseBox from "@/components/collapse/CollapseBox";
import SizeOptions from "@/components/SizeOptions";
import Ratings from "@/components/Ratings";
import Badge from "@/components/Badge";
import textContent from "../textContent.json";
import ColorOptions from "@/components/ColorOptions";
import Carousel from "@/components/Carousel";
import AddToCartButton from "@/components/AddToCartButton";
import QuantityButton from "@/components/QuantityButton";

const fetchData = async () => {
  try {
    const response = await fetch(
      "https://www.greatfrontend.com/api/projects/challenges/e-commerce/products/voyager-hoodie"
    );
    return response.json();
  } catch (error) {
    console.error(error);
  }
};

export default async function Home() {
  const { product_id, name, description, images, info, sizes } =
    await fetchData();

  return (
    <div className="h-screen px-4 py-8 grid grid-cols-4 grid-flow-row auto-rows-auto text-neutral-600 desktop:max-w-7xl desktop:mx-auto desktop:grid-cols-12 desktop:gap-8">
      <div className=" col-span-4 desktop:col-span-6 desktop:mb-8">
        <Carousel images={images} />
      </div>
      <div className="col-span-4 desktop:col-span-6">
        <div className="my-4 text-4xl font-medium text-neutral-900 desktop:text-5xl">
          {name}
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
          <p>{description}</p>
        </div>
        <div className="">
          <p className="text-sm">Available Colors</p>
          <ColorOptions />
        </div>

        <div className="my-8">
          <p className="text-sm">Available Sizes</p>
          <SizeOptions sizes={sizes} />
        </div>
        <div className="">
          <p className="text-sm">Quantity</p>
          <QuantityButton />
        </div>
        <div className="my-4">
          <AddToCartButton />
        </div>
        <div className="flex flex-col gap-y-4">
          {info.map(
            (item: { title: string; description: string[] }, index: number) => (
              <CollapseBox
                key={item.description[0] + index}
                title={item.title}
                contents={item.description}
              />
            )
          )}
        </div>
      </div>
    </div>
  );
}
