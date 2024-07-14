import List from "./List";

export default function CollapseBox({
  title,
  contents,
}: {
  title: string;
  contents: string[];
}) {
  return (
    <div className=" collapse collapse-plus bg-base-200">
      <input type="radio" name="my-accordion-3" defaultChecked />
      <div className="collapse-title text-xl font-medium">{title}</div>
      <div className="collapse-content flex flex-col px-8 list-outside">
        {contents.map((textContent) => (
          <List key={textContent} text={textContent} />
        ))}
      </div>
    </div>
  );
}
