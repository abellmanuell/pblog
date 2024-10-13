import React from "react";
import BlogWrapper from "../components/BlogWrapper";
import BlogParagraph from "../components/BlogParagraph";
import BlogIcon from "../components/BlogIcon";
import { SparklesIcon } from "@heroicons/react/24/solid";
import BlogHeading from "../components/BlogHeading";
import Profiler from "../components/Profiler";
import { useState } from "react";

export default function SingleBlog() {
  const [user, setUser] = useState({
    id: 1,
    blogger: "Tari Ibaba",
    avatar_url:
      "https://miro.medium.com/v2/resize:fill:96:96/1*hrkjW77qwMoev9kLXYZg5w.png",
    headline: "This new JavaScript operator is an absolute game changer",
    previewPost: "Say goodbye to try-catch",
    postImage:
      "https://miro.medium.com/v2/resize:fit:720/format:webp/1*INT5dtKotyP0at13wyjJLg.png",
    createdAt: 76325234,
    category: "Coding Beauty",
    claps: 1498,
    comment: 33,
  });

  return (
    <BlogWrapper>
      <BlogParagraph className="flex items-center space-x-2 text-neutral-500">
        <BlogIcon color="text-yellow-500" icon={SparklesIcon} size="size-5" />
        <span>Members-only story</span>
      </BlogParagraph>

      <BlogHeading className="my-4 text-3xl">{user.headline}</BlogHeading>

      <Profiler className="my-4" {...user}></Profiler>

      <BlogParagraph className="leading-loose whitespace-pre-line">
        {`
        An amazing new JavaScript operator has arrived and things are not looking too good for try-catch! With the new safe assignment operator, you'll stop writing code like this: 
        
        And start writing code like this:

        We’ve completely eradicated the deep nesting. The code is far cleaner and more readable. Instead of getting the error in the clunky catch block:
        `}
      </BlogParagraph>
    </BlogWrapper>
  );
}
