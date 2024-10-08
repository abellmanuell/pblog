import React from "react";
import ProfileImage from "./ProfileImage";
import LinkTo from "./LinkTo";
import BlogParagraph from "./BlogParagraph";

export default function Following({ userName, date, avatar_url }) {
  return (
    <div className="p-8 flex space-x-3">
      <LinkTo to="">
        <ProfileImage avatar_url={avatar_url} name="Hiren Donda" />
      </LinkTo>

      <LinkTo to="" className="text-neutral-600 hover:text-black max-w-64">
        <BlogParagraph>
          <span className="text-black">{userName}</span> started following you{" "}
          {date}
        </BlogParagraph>
      </LinkTo>
    </div>
  );
}
