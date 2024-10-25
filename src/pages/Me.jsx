import BlogWrapper from "../components/BlogWrapper";
import BlogHeading from "../components/BlogHeading";
import ProfileImage from "../components/ProfileImage";
import BlogParagraph from "../components/BlogParagraph";
import BlogList from "../components/BlogList";
import { useState, useEffect } from "react";
import { useContext } from "react";
import { UserLoggedInContext } from "../context/UserLoggedInContext";
import SignIn from "./SignIn";
import { useFetch } from "../hook/useFetch";
import { useParams } from "react-router-dom";
import Button from "../components/Form/Button";
import LinkTo from "../components/LinkTo";

export default function Me({ children }) {
  const { isUserLoggedIn, setIsUserLoggedIn } = useContext(UserLoggedInContext);
  const [user, setUser] = useState({ name: "", username: "" });
  const { id } = useParams();

  if (!isUserLoggedIn) {
    return <SignIn></SignIn>;
  }

  useEffect(() => {
    (async function () {
      const response = await useFetch("/user/" + id, {
        method: "GET",
        token: localStorage.getItem("token"),
      });

      const data = await response.json();
      console.log(data);

      if (response.ok) {
        setUser({ ...user, ...data });
      }
    })();
  }, []);

  const [blogs, setBlogs] = useState([
    {
      id: 1,
      blogger: "Abel Emmanuel",
      username: "@mannydev02",
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
  ]);

  return (
    <BlogWrapper>
      <div className="space-x-4 items-center sm:block sm:space-x-0 sm:space-y-4">
        <div>
          <ProfileImage avatar_url={user.avatar_url} className="h-20 w-20" />
        </div>

        <div className="flex flex-col">
          <div>
            <BlogHeading>{user.name}</BlogHeading>
            <BlogParagraph className="text-neutral-600">
              {`@${user.username}`}
            </BlogParagraph>
          </div>

          <LinkTo to={`/${user._id}/edit`} className="underline mt-2">
            Edit
          </LinkTo>
        </div>

        <div>{children}</div>
      </div>

      <div className="mt-10">
        <BlogHeading>Your Blogs</BlogHeading>

        <BlogList blogs={blogs}></BlogList>
      </div>
    </BlogWrapper>
  );
}
