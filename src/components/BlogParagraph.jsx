import React from "react";
import { cn } from "../utils/cn";

export default function BlogParagraph({ children, ...props }) {
  return <p className={cn(props.className)}>{children}</p>;
}
