export default function Ratings() {
  return (
    <div className="flex flex-row gap-4 items-center">
      <p className="font-semibold">4.1</p>
      <div className="rating rating-sm gap-x-2">
        <input
          type="radio"
          name="rating-2"
          className="mask mask-star-2 bg-yellow-400"
        />
        <input
          type="radio"
          name="rating-2"
          className="mask mask-star-2 bg-yellow-400"
        />
        <input
          type="radio"
          name="rating-2"
          className="mask mask-star-2 bg-yellow-400"
        />
        <input
          type="radio"
          name="rating-2"
          className="mask mask-star-2 bg-yellow-400"
        />
        <input
          type="radio"
          name="rating-2"
          className="mask mask-star-2 bg-yellow-400"
          defaultChecked
        />
      </div>
      <p className="text-indigo-700 text-sm">See all 62 reviews</p>
    </div>
  );
}
