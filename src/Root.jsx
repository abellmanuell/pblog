import React, { useState, useEffect } from "react";
import { Outlet, useParams } from "react-router-dom";
import { UserContext } from "./context/UserLoggedInContext";

import BlogHeader from "./layouts/Header/BlogHeader";
import { useFetch } from "./hook/useFetch";

export default function Root() {
  const [user, setUser] = useState({ name: "", username: "", email: "" });
  const { id } = useParams();

  useEffect(() => {
    (async function () {
      const response = await useFetch("/user/" + id, {
        method: "GET",
        token: localStorage.getItem("token"),
      });

      const data = await response.json();
      // console.log(data);

      if (response.ok) {
        setUser({ ...user, ...data });
      }
    })();
  }, []);

  return (
    <div>
      <UserContext.Provider value={{ user, setUser }}>
        <BlogHeader />
        <Outlet />
      </UserContext.Provider>
    </div>
  );
}
