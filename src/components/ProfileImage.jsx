import React from "react";
import { cn } from "../utils/cn";

export default function ProfileImage({ avatar_url, name, ...props }) {
  return (
    <div className="self-center">
      <img
        src={avatar_url}
        alt={name}
        className={cn(
          props.className,
          "h-10 min-w-10 cursor-pointer object-cover rounded-full"
        )}
      />
    </div>
  );
}
