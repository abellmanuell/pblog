import React from "react";
import { Outlet } from "react-router-dom";

// Components
import BlogHeader from "./layouts/Header/BlogHeader";

export default function Root() {
  return (
    <div>
      <BlogHeader />
      <Outlet />
    </div>
  );
}
