import { TinaMarkdown } from "tinacms/dist/rich-text";
import type { TinaMarkdownContent } from "tinacms/dist/rich-text";

type RichTextProps = {
  data: TinaMarkdownContent | TinaMarkdownContent[];
  className?: string;
};

export default function RichText({ data, className, ...props }: RichTextProps) {
  return (
    <div className={`richtext ${className}`} {...props}>
      <TinaMarkdown content={data} />
    </div>
  );
}
