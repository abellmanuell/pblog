import React from "react";
import { format } from "date-fns";

import LinkTo from "../components/LinkTo";

import BlogParagraph from "../components/BlogParagraph";
import BlogHeading from "../components/BlogHeading";
import ProfileImage from "../components/ProfileImage";
import BlogIcon from "../components/BlogIcon";
import {
  ChatBubbleOvalLeftIcon,
  HandRaisedIcon,
  SparklesIcon,
} from "@heroicons/react/24/solid";
import { formatNumber } from "number-abbrevation";
import { cn } from "../utils/cn";

export default function Blog({
  id,
  blogger,
  avatar_url,
  headline,
  postImage,
  previewPost,
  createdAt,
  category,
  claps,
  comment,
}) {
  return (
    <section
      className={cn(
        "py-4 my-4",
        "border-b last:border-0",
        "last:pb-0 first:pt-0"
      )}
    >
      <BlogParagraph className="text-sm flex space-x-2">
        <LinkTo to="">
          <ProfileImage avatar_url={avatar_url} className="h-5 min-w-5" />
        </LinkTo>
        <span>
          <LinkTo to="" className="hover:underline text-neutral-600">
            {blogger}
          </LinkTo>{" "}
          in{" "}
          <LinkTo to="" className="hover:underline text-neutral-600">
            {category}
          </LinkTo>
        </span>
      </BlogParagraph>

      <LinkTo to={`${category.toLowerCase().split(" ").join("-")}/${id}`}>
        <div className="grid grid-cols-blog-column my-2 gap-x-4 items-center">
          <div>
            <BlogHeading className="pb-2">{headline}</BlogHeading>
            <BlogParagraph className="text-neutral-600">
              {previewPost}
            </BlogParagraph>
          </div>

          <div>
            <img src={postImage} alt={headline} className="rounded-sm w-40" />
          </div>
        </div>

        <div className="my-4 flex items-center space-x-4">
          <BlogParagraph className="flex space-x-1">
            <BlogIcon
              color="text-yellow-500"
              icon={SparklesIcon}
              size="size-5"
            />
            <span>{format(createdAt, "d LLL")}</span>
          </BlogParagraph>

          <BlogParagraph className="space-x-1 hidden sm:flex">
            <BlogIcon icon={HandRaisedIcon} size="size-5" />
            <span>{formatNumber(claps)}</span>
          </BlogParagraph>

          <BlogParagraph className="space-x-1 hidden sm:flex">
            <BlogIcon icon={ChatBubbleOvalLeftIcon} size="size-5" />
            <span>{formatNumber(comment)}</span>
          </BlogParagraph>
        </div>
      </LinkTo>
    </section>
  );
}
