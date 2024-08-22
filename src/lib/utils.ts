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
