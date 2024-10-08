import { ArrowLongLeftIcon } from "@heroicons/react/24/outline";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const navigate = useNavigate();
  const error = useRouteError();

  console.log(error);

  return (
    <div className="h-full flex flex-col justify-center items-center">
      <h1 className="font-bold text-xl py-4">Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p className="text-neutral-400">
        <i>{error.statusText || error.message}</i>
      </p>
      <button
        onClick={() => navigate(-1)}
        className="text-sm mt-10 hover:underline inline-flex justify-center items-center"
      >
        <ArrowLongLeftIcon className="size-5" />
        Back Home
      </button>
    </div>
  );
}
