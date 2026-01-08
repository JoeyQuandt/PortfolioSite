import React from "react";
import type { TinaMarkdownContent, Components } from "tinacms/dist/rich-text";

export const richTextComponents: Components<{}> = {
  h2: (props: { children: React.ReactNode } | undefined) => (
    <h1 className="mb-10">{props?.children}</h1>
  ),
  h3: (props: { children: React.ReactNode } | undefined) => (
    <h3 className="mb-8">{props?.children}</h3>
  ),
  h4: (props: { children: React.ReactNode } | undefined) => (
    <h4 className="mb-6">{props?.children}</h4>
  ),
  h5: (props: { children: React.ReactNode } | undefined) => (
    <h5 className="mb-4">{props?.children}</h5>
  ),
  p: (props: { children: React.ReactNode } | undefined) => (
    <p className="mb-5">{props?.children}</p>
  ),
  a: (props: { url: string; children: React.ReactNode } | undefined) => (
    <a className="text-theme-green underline cursor-pointer" href={props?.url}>
      {props?.children}
    </a>
  ),
  ol: (props: { children: React.ReactNode } | undefined) => (
    <ol className="list-decimal pl-5 mb-5">{props?.children}</ol>
  ),
  ul: (props: { children: React.ReactNode } | undefined) => (
    <ul className="list-disc pl-5 mb-5">{props?.children}</ul>
  ),
  li: (props: { children: React.ReactNode } | undefined) => (
    <li className="mb-2">{props?.children}</li>
  ),
  img: (props: { url: string; alt?: string } | undefined) => (
    <img src={props?.url} alt={props?.alt} className="mb-8" />
  ),
};
