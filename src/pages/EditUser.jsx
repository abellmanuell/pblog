import React, { useContext } from "react";
import { useRef } from "react";
import toast, { Toaster } from "react-hot-toast";

import {
  UserLoggedInContext,
  UserContext,
} from "../context/UserLoggedInContext";

import Button from "../components/Form/Button";
import BlogWrapper from "../components/BlogWrapper";
import SignIn from "./SignIn";
import Input from "../components/Form/Input";
import BlogHeading from "../components/BlogHeading";
import ProfileImage from "../components/ProfileImage";

export default function EdithUser() {
  const { isUserLoggedIn, setIsUserLoggedIn } = useContext(UserLoggedInContext);
  const { user, setUser } = useContext(UserContext);

  const inputRef = useRef(null);
  const imgRef = useRef(null);
  const formRef = useRef(null);
  const fileFormRef = useRef(null);

  if (!isUserLoggedIn) {
    return <SignIn></SignIn>;
  }

  function handleChange(e) {
    let name = e.target.name,
      value = e.target.value;
    setUser({ ...user, [name]: value });
  }

  const handleFileChange = async () => {
    const files = inputRef.current.files;
    const image = imgRef.current;

    if (files.length === 0) {
      toast.error("No files currently selected for upload");
    } else {
      const form = fileFormRef.current;
      const formData = new FormData(form);

      image.src = URL.createObjectURL(files[0]);

      const response = await fetch("http://localhost:9090/upload", {
        method: "POST",
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
        body: formData,
      });

      const data = await response.json();
      setUser(() => {
        return { ...user, avatar_url: data.avatar_url };
      });
    }
  };

  return (
    <BlogWrapper>
      <BlogHeading>Edit</BlogHeading>
      <Toaster />

      <ProfileImage
        piRef={imgRef}
        avatar_url={user.avatar_url}
        name={user.name}
        className="h-20 w-20"
      />

      <form ref={fileFormRef} encType="multipart/form-data">
        <Input
          type="file"
          className="bg-transparent"
          accept=".jpg, .jpeg, .png"
          name="avatar"
          innerRef={inputRef}
          onChange={handleFileChange}
        />
      </form>

      <form
        ref={formRef}
        encType="multipart/form-data"
        onSubmit={async function (e) {
          e.preventDefault();

          const form = formRef.current;
          const formData = new FormData(form);

          const response = await fetch("http://localhost:9090/edit", {
            method: "PUT",
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
            body: formData,
          });

          const data = await response.json();
          console.log(data);
        }}
      >
        <Input
          type="text"
          name="name"
          value={user.name}
          label="Name"
          onChange={handleChange}
        />
        <Input
          type="text"
          name="username"
          value={user.username}
          label="Username"
          onChange={handleChange}
        />
        <Input
          type="text"
          name="email"
          value={user.email}
          label="Email"
          onChange={handleChange}
        />
        <Button type="submit" className="mt-10">
          Update
        </Button>
      </form>
    </BlogWrapper>
  );
}
