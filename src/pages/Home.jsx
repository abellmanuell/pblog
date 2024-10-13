import React from "react";
import { useState } from "react";
import BlogWrapper from "../components/BlogWrapper";
import BlogList from "../components/BlogList";

export default function Home() {
  const [blogs, setBlogs] = useState([
    {
      id: 1,
      blogger: "Tari Ibaba",
      username: "@tari",
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
    {
      id: 2,
      blogger: "John P. Weiss",
      username: "@john",
      avatar_url:
        "https://miro.medium.com/v2/resize:fill:20:20/1*h5q3H3GcPBoXB8OHLYUdbA.jpeg",
      headline: "There Are Truths to Be Learned From the Old Things",
      previewPost: "We want to possess what they’re not making any more",
      postImage:
        "https://miro.medium.com/v2/resize:fill:160:107/1*Os4H2r25zZ-jJ6dS-Go1Og.jpeg",
      createdAt: 7632524334,
      category: "Personal Growth",
      claps: 1000,
      comment: 23,
    },
  ]);

  return (
    <BlogWrapper className="md:px-20 lg:px-80">
      <BlogList blogs={blogs}></BlogList>
    </BlogWrapper>
  );
}
