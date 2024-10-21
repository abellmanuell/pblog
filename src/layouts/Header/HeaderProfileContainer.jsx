import { useContext } from "react";
import {
  BellIcon,
  PencilSquareIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";

// Icon to toggle notification
import {
  BellIcon as BellIconSolid,
  UserCircleIcon,
} from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

import ProfileImage from "../../components/ProfileImage";
import profilePicture from "../../assets/brand.jpg";

import BlogLink from "../../components/BlogLink";
import BlogIcon from "../../components/BlogIcon";
import LinkTo from "../../components/LinkTo";
import { UserLoggedInContext } from "../../context/UserLoggedInContext";

function HeaderProfileContainer() {
  const { isUserLoggedIn, setIsUserLoggedIn } = useContext(UserLoggedInContext);

  return (
    <div className="flex items-center space-x-5">
      <Link to="search">
        <BlogIcon icon={MagnifyingGlassIcon} className="sm:hidden" />
      </Link>

      <BlogLink
        to="new-story"
        icon={PencilSquareIcon}
        content="Write"
        className="hidden md:flex"
      />

      <NavLink to="me/notifications">
        {({ isActive, isPending, isTransitioning }) =>
          isActive ? (
            <BlogIcon icon={BellIconSolid} />
          ) : (
            <BlogIcon icon={BellIcon} />
          )
        }
      </NavLink>

      {!isUserLoggedIn ? (
        <div>
          <BlogLink to="/sign-in" icon={UserCircleIcon} />
        </div>
      ) : (
        <DropdownMenu.Root>
          <DropdownMenu.Trigger>
            <ProfileImage
              avatar_url={profilePicture}
              name="Abel Emmanuel"
              className="h-10 min-w-10"
            />
          </DropdownMenu.Trigger>

          <DropdownMenu.Portal>
            <DropdownMenu.Content
              className="min-w-[220px] rounded-md bg-white p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)]"
              sideOffset={5}
            >
              <LinkTo to={localStorage.getItem("user_id")}>
                <DropdownMenu.Item className="flex h-[25px] select-none items-center rounded-[3px] pl-[25px] pr-[5px] text-[13px] leading-none text-neutral-600 outline-none hover:bg-neutral-900 hover:text-white">
                  Profile
                </DropdownMenu.Item>
              </LinkTo>
            </DropdownMenu.Content>
          </DropdownMenu.Portal>
        </DropdownMenu.Root>
      )}
    </div>
  );
}

export default HeaderProfileContainer;
