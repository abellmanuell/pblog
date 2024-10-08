import React from "react";
import { cn } from "../utils/cn";

export default function ProfileImage({ avatar_url, name, ...props }) {
  return (
    <div className="self-center">
      <img src={avatar_url} alt={name} className={cn(props.className)} />
    </div>
  );
}
