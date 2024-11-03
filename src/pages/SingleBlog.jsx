import React, { useEffect } from "react";
import BlogWrapper from "../components/BlogWrapper";
import BlogParagraph from "../components/BlogParagraph";
import BlogIcon from "../components/BlogIcon";
import { SparklesIcon } from "@heroicons/react/24/solid";
import BlogHeading from "../components/BlogHeading";
import Profiler from "../components/Profiler";
import { useState } from "react";
import { useParams } from "react-router-dom";

export default function SingleBlog() {
  const [blog, setBlog] = useState([
    {
      id: 1,
      name: "",
      avatar_url: "",
      title: "",
      story: "",
      image: "",
      createdAt: 76325234,
      category: "",
      claps: 0,
      comment: 0,
      blogger: [{ avatar_url: "", name: "" }],
    },
  ]);

  const { id } = useParams();

  useEffect(() => {
    (async () => {
      const response = await fetch(
        "https://pblog-server.onrender.com//blog/" + id
      );
      if (response.ok) {
        const data = await response.json();
        setBlog(data);
      }
    })();
  }, []);

  return (
    <BlogWrapper>
      <BlogParagraph className="flex items-center space-x-2 text-neutral-500">
        <BlogIcon color="text-yellow-500" icon={SparklesIcon} size="size-5" />
        <span>Members-only story</span>
      </BlogParagraph>
      {blog.map((b) => {
        return (
          <>
            <BlogHeading className="my-4 text-3xl">{b.title}</BlogHeading>

            <Profiler className="my-4" blogger={b.blogger}></Profiler>

            <BlogParagraph className="leading-loose whitespace-pre-line">
              {`${b.story}`}
            </BlogParagraph>
          </>
        );
      })}
    </BlogWrapper>
  );
}
