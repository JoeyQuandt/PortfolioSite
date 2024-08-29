import * as React from "react";
import type { SVGProps } from "react";
const Mail = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="currentColor"
    {...props}
  >
    <path d="M24.267 5.333h-19.2c-.637 0-1.247.281-1.697.781-.45.5-.703 1.179-.703 1.886v16c0 .707.253 1.386.703 1.886.45.5 1.06.78 1.697.78h19.2c.636 0 1.247-.28 1.697-.78.45-.5.703-1.179.703-1.886V8c0-.707-.253-1.385-.703-1.886-.45-.5-1.06-.78-1.697-.78Zm0 5.648-9.6 6.51-9.6-6.51V8h19.2v2.981Z" />
  </svg>
);
export default Mail;
