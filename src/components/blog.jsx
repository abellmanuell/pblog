import {
  ChatBubbleBottomCenterIcon,
  HandRaisedIcon,
  SparklesIcon,
} from "@heroicons/react/24/solid";
import { PercentBadgeIcon } from "@heroicons/react/24/solid";
import { formatDate } from "date-fns";
import { formatNumber } from "number-abbrevation";
import { Link } from "react-router-dom";

export default function Blog(props) {
  const {
    blogger,
    category,
    avatar_url,
    title,
    description,
    createdAt,
    claps,
    numberOfcomment,
    image,
  } = props;
  console.log(props);

  return (
    <Link to="#" className="p-4 md:px-32 md:py-8 block hover:bg-gray-50 ">
      <div className="grid grid-rows-2 md:grid-rows-1 md:grid-cols-blog-column md:gap-4 place-items-center">
        <section>
          <div className="flex items-center">
            <Link to="#">
              <img
                src={avatar_url}
                alt={blogger}
                className="size-5 rounded-full mr-2"
              />
            </Link>
            <p className="inline-flex text-sm">
              <Link to="#" className="hover:underline inline-flex">
                {blogger}
                <PercentBadgeIcon className="size-5 text-sky-600" />
              </Link>
              <span className="mr-1 text-gray-400">in </span>
              <Link to="#" className="hover:underline">
                {category}
              </Link>
            </p>
          </div>

          <div className="my-2">
            <h1 className="text-4xl font-bold mb-2">{title}</h1>
            <p className="text-gray-400">{description}</p>
          </div>

          <div className="flex items-center space-x-3 text-gray-600 text-sm md:text-base">
            <SparklesIcon className="size-5 text-yellow-400" />
            <p>{formatDate(createdAt, "d MMM")}</p>

            <div className="flex items-center space-x-1">
              <HandRaisedIcon className="size-5" />
              <p>{formatNumber(claps)}</p>
            </div>

            <div className="flex items-center space-x-1">
              <ChatBubbleBottomCenterIcon className="size-5" />
              <p>{formatNumber(numberOfcomment)}</p>
            </div>
          </div>
        </section>

        <div className="w-full h-60 lg:h-48">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover rounded-md"
          />
        </div>
      </div>
    </Link>
  );
}
