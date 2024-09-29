import React, { useState } from "react";
import { Link } from "react-router-dom";

import {
  BellIcon,
  MagnifyingGlassIcon,
  PencilSquareIcon,
} from "@heroicons/react/24/outline";

import Blog from "../components/blog";
import profileImage from "../assets/brand.jpg";

const initialBlogs = [
  {
    id: 1,
    blogger: "Bernard Builds",
    avatar_url:
      "https://miro.medium.com/v2/resize:fill:96:96/1*SKjpk8BptEcB-k0MLYqSnQ.png",
    image:
      "https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1024&h=1280&q=80",
    category: "Better Marketing",
    title: "AI Is Running My SEO Blog. Here’s the Growth So Far",
    description:
      "Half a million impressions, thousands of clicks, and top of Google rankings",
    createdAt: Date.now(),
    claps: 6000000,
    numberOfcomment: 268,
  },
];

export default function Root() {
  const [blogs, setBlogs] = useState(initialBlogs);

  return (
    <section>
      <header className="flex flex-col md:flex-row p-4 border-b space-x-2">
        <h1 className="text-4xl md:text-4xl font-bold select-none">pBlog</h1>

        <div className="grow order-2 md:order-1">
          <div className="inline-flex items-center bg-gray-100 text-gray-400 rounded-full px-4">
            <MagnifyingGlassIcon className="size-5" />
            <input
              type="search"
              name="q"
              id="q"
              placeholder="Search"
              className="bg-transparent border-none outline-none w-full py-2 ml-1 focus:bg-transparent"
            />
          </div>
        </div>

        <article className="order-1 md:order-2 flex justify-end items-center space-x-2 pb-2 ">
          <Link
            to="#"
            className="flex items-center text-gray-400 space-x-1 group"
          >
            <PencilSquareIcon className="size-8 p-2 md:size-10 transition-all group-hover:bg-gray-100 rounded-md" />
            <span className="text-sm md:text-base">Write</span>
          </Link>

          <button type="button">
            <BellIcon className="size-8 text-gray-400 md:size-10 transition-all p-2 hover:bg-gray-100 rounded-md" />
          </button>

          <Link to="#">
            <img
              src={profileImage}
              alt="Abel Emmanuel"
              className="size-8 object-cover rounded-full"
            />
          </Link>
        </article>
      </header>

      <main>
        {blogs.map((blog) => {
          return <Blog key={blog.id} {...blog} />;
        })}
      </main>
    </section>
  );
}
