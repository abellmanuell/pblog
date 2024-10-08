import React from "react";
import SearchInput from "../components/SearchInput";
import BlogHeading from "../components/BlogHeading";
import BlogParagraph from "../components/BlogParagraph";
import BlogWrapper from "../components/BlogWrapper";
import { cn } from "../utils/cn";

export default function SearchBlog() {
  return (
    <BlogWrapper>
      <SearchInput
        className={cn(
          "flex items-center rounded-full",
          "px-4 py-2",
          "border border-neutral-200"
        )}
        placeholder="Search"
      />

      <div>
        <BlogHeading className="my-10">Recent searches</BlogHeading>
        <BlogParagraph>You have no recent searches</BlogParagraph>
      </div>
    </BlogWrapper>
  );
}
