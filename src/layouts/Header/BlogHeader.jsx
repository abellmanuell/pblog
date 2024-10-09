import React from "react";
import BlogSearch from "../../components/SearchInput";
import HeaderProfileContainer from "./HeaderProfileContainer";
import { cn } from "../../utils/cn";
import { Link } from "react-router-dom";
import BlogWrapper from "../../components/BlogWrapper";

export default function BlogHeader() {
  return (
    <BlogWrapper
      className={cn("p-4", "flex items-center justify-between", "border-b")}
    >
      <div>
        <Link to="/">
          <h1 className={cn("font-bold text-2xl")}>pBlog</h1>
        </Link>
      </div>

      <BlogSearch
        placeholder="Search"
        className={cn(
          "hidden sm:flex",
          "bg-neutral-100",
          "px-4 py-2 rounded-full"
        )}
      />
      <HeaderProfileContainer />
    </BlogWrapper>
  );
}
