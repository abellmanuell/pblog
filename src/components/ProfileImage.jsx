import React from "react";
import { cn } from "../utils/cn";

export default function ProfileImage({ avatar_url, name, ...props }) {
  return (
    <img
      src={avatar_url}
      alt={name}
      className={cn(
        props.className,
        "cursor-pointer object-cover rounded-full"
      )}
    />
  );
}
