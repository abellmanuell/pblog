import React from "react";
import { Link } from "react-router-dom";
import BlogIcon from "../components/BlogIcon";
import { cn } from "../utils/cn";

export default function BlogLink({ to, content, icon, ...props }) {
  return (
    <Link
      to={to}
      className={cn(
        "inline-flex",
        "text-neutral-900 hover:text-neutral-600",
        props.className
      )}
      onClick={props.onClick}
    >
      <BlogIcon icon={icon} />
      {content && <span>{content}</span>}
    </Link>
  );
}
