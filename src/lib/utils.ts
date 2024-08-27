import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function filterSectionsBySuffix(data, suffixes) {
  if (!data?.sections || !Array.isArray(suffixes) || !data?.sections) {
    return [];
  }

  return data.sections.filter((section) => {
    return suffixes.some((suffix) => section.__typename.endsWith(`_${suffix}`));
  });
}

export function InternalLink(page) {
  return page === "content/pages/home.mdx"
    ? "/"
    : page.includes("pages")
      ? `/${page.replace(/^content\/pages\/|\.mdx$/g, "")}`
      : `/${page.replace(/^content\/blogs\/|\.mdx$/g, "")}`;
}
