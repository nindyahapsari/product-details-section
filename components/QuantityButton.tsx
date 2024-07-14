export default function QuantityButton() {
  return (
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
  );
}
