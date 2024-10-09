import React from "react";
import BlogWrapper from "../components/BlogWrapper";
import BlogList from "../components/BlogList";

export default function Home() {
  return (
    <BlogWrapper className="md:px-20 lg:px-80">
      <BlogList></BlogList>
    </BlogWrapper>
  );
}
