export default function SizeOptions({ sizes }: { sizes: string[] }) {
  const converSizeName = (size: string) => {
    switch (size) {
      case "xs":
        return "XS";
      case "sm":
        return "S";
      case "md":
        return "M";
      case "lg":
        return "L";
      case "xl":
        return "XL";
      default:
        return size;
    }
  };
  return (
    <div className="flex flex-wrap my-4 gap-4">
      {sizes.map((size) => (
        <button
          key={size}
          className="btn btn-square btn-outline text-base px-8 border-neutral-200 hover:bg-transparent hover:text-black hover:border-indigo-600 active:border-indigo-600"
        >
          {converSizeName(size)}
        </button>
      ))}
    </div>
  );
}
