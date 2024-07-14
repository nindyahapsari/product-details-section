export default function List({ text }: { text: string }) {
  return (
    <div className="flex flex-row gap-4">
      <p>•</p> {text}
    </div>
  );
}
