import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function filterSectionsBySuffix(
  data: { sections?: any[] },
  suffixes: string[]
) {
  if (!data?.sections || !Array.isArray(suffixes)) {
    return [];
  }

  return data.sections.filter((section: { __typename: string }) => {
    return suffixes.some((suffix) => section.__typename.endsWith(`_${suffix}`));
  });
}

export function InternalLink(page: string) {
  return page === "content/pages/home.mdx"
    ? "/"
    : page.includes("pages")
      ? `/${page.replace(/^content\/pages\/|\.mdx$/g, "")}`
      : `/${page.replace(/^content\/blogs\/|\.mdx$/g, "")}`;
}
