import React from "react";
import { cn } from "../../utils/cn";

export default function TextArea({ type, name, label, placeholder, ...props }) {
  return (
    <div className="space-y-2">
      <label htmlFor={name}>{label}</label>
      <textarea
        type={type}
        name={name}
        placeholder={placeholder}
        className={cn(
          props.className,
          "p-4 w-full bg-neutral-100 rounded-md resize-none"
        )}
        id={name}
      />
    </div>
  );
}
