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
import { useLocation, Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { replace } from "react-router-dom";

export default function Blog({
  _id: id,
  title,
  image,
  story,
  createdAt,
  category,
  caps: claps,
  comment,
  username,
  blogger,
}) {
  const location = useLocation().pathname.split("/").join(" ").trim();

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
          <ProfileImage
            avatar_url={blogger[0]["avatar_url"]}
            className="h-5 min-w-5"
          />
        </LinkTo>
        <span>
          <LinkTo to="" className="hover:underline text-neutral-600">
            {blogger[0]["name"]}
          </LinkTo>{" "}
          in{" "}
          <LinkTo to="" className="hover:underline text-neutral-600">
            {category}
          </LinkTo>
        </span>
      </BlogParagraph>

      <LinkTo to={location ? `${id}` : `${blogger[0]._id}/${id}`}>
        <div className="grid grid-cols-blog-column my-2 gap-x-4 items-center">
          <div>
            <BlogHeading className="pb-2">{title}</BlogHeading>
            <BlogParagraph className="text-neutral-600 w-96 overflow-hidden text-nowrap text-ellipsis">
              {story}
            </BlogParagraph>
          </div>

          <div>
            <img src={image} alt={title} className="rounded-sm w-40" />
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
