import React from "react";
import { cn } from "../utils/cn";

export default function BlogWrapper({ children, ...props }) {
  return (
    <div className={cn("p-5 min-w-80", "md:px-20 lg:px-80", props.className)}>
      {children}
    </div>
  );
}
