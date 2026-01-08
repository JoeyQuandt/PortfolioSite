import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { CMS_PATHS } from "./constants";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

type SectionWithTypename = { __typename?: string };

export function filterSectionsBySuffix<T extends SectionWithTypename>(
  data: { sections?: (T | null)[] | null },
  suffixes: string[]
): T[] {
  if (!data?.sections || !Array.isArray(suffixes)) {
    return [];
  }

  return data.sections.filter((section): section is T => {
    return (
      !!section &&
      !!section.__typename &&
      suffixes.some((suffix) => section.__typename!.endsWith(`_${suffix}`))
    );
  });
}

export function InternalLink(page: string) {
  return page === CMS_PATHS.HOME
    ? "/"
    : page.includes("pages")
    ? `/${page.replace(
        new RegExp(`^${CMS_PATHS.PAGES_DIR}|${CMS_PATHS.MDX_EXTENSION}$`, "g"),
        ""
      )}`
    : `/${page.replace(
        new RegExp(
          `^${CMS_PATHS.CONTENT_DIR}|${CMS_PATHS.MDX_EXTENSION}$`,
          "g"
        ),
        ""
      )}`;
}
