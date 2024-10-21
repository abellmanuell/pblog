import React, { useState, useContext, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

import BlogWrapper from "../components/BlogWrapper";
import BlogParagraph from "../components/BlogParagraph";
import Input from "../components/Form/Input";
import Button from "../components/Form/Button";
import { Link } from "react-router-dom";
import { cn } from "../utils/cn";
import { useFetch } from "../hook/useFetch";
import { UserLoggedInContext } from "../context/UserLoggedInContext";
import LinkTo from "../components/LinkTo";

export default function SignUp() {
  const { isUserLoggedIn, setIsUserLoggedIn } = useContext(UserLoggedInContext);

  useEffect(() => {
    isUserLoggedIn && navigate("/");
  }, []);

  const navigate = useNavigate();

  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    name: "",
  });

  function handleOnChange(e) {
    let value = e.target.value,
      name = e.target.name;

    setUser({ ...user, [name]: value });
  }

  // Submit Form
  async function handleOnSubmit(e) {
    e.preventDefault();

    if (![user.name, user.email, user.password, user.username].every(Boolean)) {
      return toast.error("Empty field required");
    }

    const response = await useFetch("/create", { method: "POST", body: user });
    const data = await response.json();
    console.log(data);

    if (!response.ok) {
      toast.error(data.message);
    } else {
      toast.success(data.message);

      setUser({ username: "", email: "", password: "", name: "" });
      setTimeout(() => {
        navigate("/sign-in");
      }, 2000);
    }
  }

  return (
    <BlogWrapper>
      <Toaster />
      <div>
        <Link to="/">
          <h1 className={cn("font-bold text-2xl text-center")}>pBlog</h1>
        </Link>
      </div>

      <section className="py-10 flex flex-col">
        <div className="mb-10 text-center">
          <BlogParagraph className="font-bold">Get Started</BlogParagraph>
          <BlogParagraph>Talk your talk now!</BlogParagraph>
        </div>

        <form className="flex flex-col" onSubmit={handleOnSubmit}>
          <div className="py-2">
            <Input
              type="text"
              placeholder="Username"
              name="username"
              label="Create Username"
              onChange={(ev) => handleOnChange(ev)}
              value={user.username}
            />
          </div>

          <div className="py-2">
            <Input
              type="text"
              placeholder="Name"
              name="name"
              label="Name"
              onChange={(ev) => handleOnChange(ev)}
              value={user.name}
            />
          </div>

          <div className="py-2">
            <Input
              type="email"
              placeholder="Email"
              name="email"
              label="Email Address"
              onChange={(ev) => handleOnChange(ev)}
              value={user.email}
            />
          </div>

          <div className="py-2">
            <Input
              type="password"
              placeholder="Password"
              name="password"
              label="Password"
              onChange={(ev) => handleOnChange(ev)}
              value={user.password}
            />
          </div>

          <Button type="submit">Get Started Now</Button>
        </form>
      </section>

      <p className="text-center">
        Already have an account{" "}
        <LinkTo to="/sign-in" className="underline">
          {" "}
          Sign In
        </LinkTo>
      </p>
    </BlogWrapper>
  );
}
