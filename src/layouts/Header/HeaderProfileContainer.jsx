import React from "react";
import {
  BellIcon,
  PencilSquareIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";

import ProfileImage from "../../components/ProfileImage";
import profilePicture from "../../assets/brand.jpg";

import BlogLink from "../../components/BlogLink";
import BlogIcon from "../../components/BlogIcon";
import { Link } from "react-router-dom";

function HeaderProfileContainer() {
  return (
    <div className="flex items-center space-x-5">
      <Link to="search">
        <BlogIcon icon={MagnifyingGlassIcon} className="size-6" />
      </Link>
      <BlogLink
        to=""
        icon={PencilSquareIcon}
        content="Write"
        className="hidden"
      />
      <BlogLink to="me/notifications" icon={BellIcon} />

      <ProfileImage avatar_url={profilePicture} name="Abel Emmanuel" />
    </div>
  );
}

export default HeaderProfileContainer;
