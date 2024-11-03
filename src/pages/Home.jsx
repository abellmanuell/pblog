import React from "react";
import { useState, useEffect } from "react";
import BlogWrapper from "../components/BlogWrapper";
import BlogList from "../components/BlogList";

export default function Home() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await fetch("https://pblog-server.onrender.com//blogs");
      if (response.ok) {
        const data = await response.json();
        setBlogs(data);
      }
    })();
  }, []);

  return (
    <BlogWrapper className="md:px-20 lg:px-80">
      <BlogList blogs={blogs}></BlogList>
    </BlogWrapper>
  );
}
