import React from "react";
import ProfileImage from "./ProfileImage";
import LinkTo from "./LinkTo";
import BlogParagraph from "./BlogParagraph";
import { format, formatDistanceStrict } from "date-fns";
import { cn } from "../utils/cn";

export default function Profiler(props) {
  const { avatar_url, name, category } = props.blogger[0];

  return (
    <div className={cn("grid grid-cols-[auto_1fr] gap-x-4", props.className)}>
      {
        <LinkTo>
          <ProfileImage
            avatar_url={avatar_url}
            name={name}
            className="h-10 min-w-10"
          />
        </LinkTo>
      }

      <div className="text-sm">
        <BlogParagraph>
          <LinkTo to="" className="hover:underline">
            {name}
          </LinkTo>{" "}
          ·{" "}
          <LinkTo to="" className="text-green-600">
            Follow
          </LinkTo>
        </BlogParagraph>

        <BlogParagraph className="text-neutral-500">
          Published in{" "}
          <LinkTo to="" className="hover:underline text-black   ">
            {category}
          </LinkTo>{" "}
        </BlogParagraph>

        <BlogParagraph className="text-neutral-500">
          {formatDistanceStrict(
            new Date(2015, 0, 1, 0, 0, 15),
            new Date(2015, 0, 1, 0, 0, 0)
          )}{" "}
          · {format(43555424, "PP")}
        </BlogParagraph>
      </div>
    </div>
  );
}
