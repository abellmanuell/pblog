import React from "react";
import { cn } from "../utils/cn";

export default function BlogHeading({ children, ...props }) {
  return (
    <h1 className={cn("font-bold text-2xl", props.className)}>{children}</h1>
  );
}
