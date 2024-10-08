import React from "react";
import BlogWrapper from "./BlogWrapper";
import BlogHeading from "./BlogHeading";

import * as Tabs from "@radix-ui/react-tabs";
import { cn } from "../utils/cn";
import Following from "./Following";
import LinkTo from "./LinkTo";
import BlogParagraph from "./BlogParagraph";

const following = [
  {
    id: 1,
    userName: "Hiren Donda",
    avatar_url:
      "https://miro.medium.com/v2/resize:fill:96:96/1*3eOYjwn3C_4RVrKzZKMqzQ.jpeg",
    date: "Sep 20, 2023",
  },

  {
    id: 2,
    userName: "Sadiq Salau",
    avatar_url:
      "https://miro.medium.com/v2/resize:fill:176:176/1*wcC8zSjFpAzUi1GvKW03wg.png",
    date: "Sep 3, 2023",
  },
];
export default function Notification() {
  return (
    <BlogWrapper>
      <BlogHeading>Notifications</BlogHeading>

      <Tabs.Root className="mt-5 flex flex-col w-full" defaultValue="all">
        <Tabs.List className="border-b mb-6">
          <Tabs.Trigger
            value="all"
            className={cn(
              "px-4 py-2",
              "data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0]"
            )}
          >
            All
          </Tabs.Trigger>
          <Tabs.Trigger
            value="responses"
            className={cn(
              "px-4 py-2",
              "data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0]"
            )}
          >
            Responses
          </Tabs.Trigger>
        </Tabs.List>

        <Tabs.Content value="all">
          {following.map((props) => {
            return <Following key={props.id} {...props} />;
          })}

          <div className="flex justify-between ">
            <LinkTo to="" className="text-green-600">
              Older notifications
            </LinkTo>
            <LinkTo to="" className="text-green-600">
              Your stats
            </LinkTo>
          </div>
        </Tabs.Content>

        <Tabs.Content value="responses">
          <div className="p-8 flex justify-between">
            <BlogParagraph className="text-neutral-500">
              You're all caught up.
            </BlogParagraph>

            <LinkTo to="" className="text-green-600">
              Your stats
            </LinkTo>
          </div>
        </Tabs.Content>
      </Tabs.Root>
    </BlogWrapper>
  );
}
