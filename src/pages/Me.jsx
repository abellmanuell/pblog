import React from "react";
import BlogWrapper from "../components/BlogWrapper";
import BlogHeading from "../components/BlogHeading";
import ProfileImage from "../components/ProfileImage";
import BlogParagraph from "../components/BlogParagraph";
import BlogList from "../components/BlogList";
import { useState } from "react";

export default function Me() {
  const [blogs, setBlogs] = useState([
    {
      id: 1,
      blogger: "Abel Emmanuel",
      username: "@mannydev02",
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
    },
  ]);

  return (
    <BlogWrapper>
      <div className="flex space-x-4 items-center sm:block sm:space-x-0 sm:space-y-4">
        <ProfileImage
          avatar_url="https://miro.medium.com/v2/resize:fill:48:48/1*g4x1BLhUYlSfX2OGm3kRqQ.jpeg"
          className="h-20 min-w-20"
        />
        <div>
          <BlogHeading>Abel Emmanuel</BlogHeading>
          <BlogParagraph className="text-neutral-600">
            Software Developer
          </BlogParagraph>
        </div>
      </div>

      <div className="mt-10">
        <BlogHeading>Your Blogs</BlogHeading>

        <BlogList blogs={blogs}></BlogList>
      </div>
    </BlogWrapper>
  );
}
