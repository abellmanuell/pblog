import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

import "./theme.css";
import "@fontsource-variable/playfair-display";

import Root from "./Root";
import ErrorPage from "./ErrorPage";
import Home from "./pages/Home";
import SearchBlog from "./pages/SearchBlog";
import Notification from "./pages/Notification";
import SingleBlog from "./pages/SingleBlog";
import NewStory from "./pages/NewStory";
import Me from "./pages/Me";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />} errorElement={<ErrorPage />}>
      <Route index element={<Home />} />
      <Route path="search" element={<SearchBlog />} />
      <Route path="me/notifications" element={<Notification />} />
      <Route path=":username/:id" element={<SingleBlog />} />
      <Route path="new-story" element={<NewStory />} />
      <Route path="/:id" element={<Me />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
