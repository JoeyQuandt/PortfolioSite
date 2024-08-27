import { TinaMarkdown } from "tinacms/dist/rich-text";

export default function RichText({ data, ...props }) {
  return (
    <div className="richtext" {...props}>
      <TinaMarkdown content={data} />
    </div>
  );
}
