import React from "react";
import { Link } from "react-router-dom";
import { cn } from "../utils/cn";

export default function LinkTo({ to, children, ...props }) {
  return (
    <Link to={to} className={cn(props.className)}>
      {children}
    </Link>
  );
}
