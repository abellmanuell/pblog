import React from "react";
import { cn } from "../../utils/cn";

export default function Button({ type, children, ...props }) {
  return (
    <button
      type={type}
      className={cn(
        "bg-black text-white hover:bg-neutral-900",
        "p-4 rounded-md font-bold"
      )}
      onClick={props.onClick}
    >
      {children}
    </button>
  );
}
