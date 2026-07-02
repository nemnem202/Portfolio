import ShinyText from "./shinyText";

export default function Title({ text }: { text: string }) {
  return (
    <h1 className="text-xl font-bold">
      <ShinyText text={text} />
    </h1>
  );
}
