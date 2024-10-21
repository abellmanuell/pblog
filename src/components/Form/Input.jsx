import React from "react";
import { cn } from "../../utils/cn";

export default function Input({ type, name, label, placeholder, ...props }) {
  return (
    <div className="space-y-2">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className={cn(props.className, "p-4 w-full bg-neutral-100 rounded-md")}
        id={name}
        onChange={props.onChange}
        value={props.value}
      />
    </div>
  );
}
