import React, { useRef, useContext } from "react";
import BlogWrapper from "../components/BlogWrapper";
import Input from "../components/Form/Input";
import TextArea from "../components/Form/TextArea";
import Button from "../components/Form/Button";
import { UserLoggedInContext } from "../context/UserLoggedInContext";
import SignIn from "../pages/SignIn";
import toast, { Toaster } from "react-hot-toast";

export default function NewStory() {
  const { isUserLoggedIn, setIsUserLoggedIn } = useContext(UserLoggedInContext);
  const formRef = useRef(null);

  if (!isUserLoggedIn) {
    return <SignIn></SignIn>;
  }

  return (
    <BlogWrapper>
      <Toaster />
      <form
        ref={formRef}
        className="grid grid-rows-[auto_1fr] gap-y-10"
        onSubmit={async (e) => {
          e.preventDefault();

          const form = formRef.current;
          const formData = new FormData(form);

          if (
            ![
              formData.get("category"),
              formData.get("title"),
              formData.get("blogImage"),
              formData.get("story"),
            ].every(Boolean)
          ) {
            toast.error("Please fill the necessary space");
          } else {
            const response = await fetch("http://localhost:9090/post-blog", {
              method: "POST",
              headers: {
                Authorization: "Bearer " + localStorage.getItem("token"),
              },
              body: formData,
            });

            if (response.ok) {
              const data = await response.json();
              console.log(data);
            }
          }
        }}
      >
        <select name="category" className="p-4">
          <option value="">Select a category</option>
          <option value="Coding Beauty">Coding Beauty</option>
        </select>
        <Input
          type="text"
          placeholder="Title"
          label="What is title?"
          name="title"
          className="font-bold self-start"
        />

        <TextArea
          label="Talk your story"
          name="story"
          className="h-60"
          placeholder="Talk your story..."
        />

        <Input
          type="file"
          placeholder="Upload image"
          label="Upload Image"
          name="blogImage"
          className="font-bold self-start"
        />

        <Button>Publish</Button>
      </form>
    </BlogWrapper>
  );
}
