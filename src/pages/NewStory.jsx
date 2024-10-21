import React from "react";
import BlogWrapper from "../components/BlogWrapper";
import { Form } from "react-router-dom";
import Input from "../components/Form/Input";
import TextArea from "../components/Form/TextArea";
import { cn } from "../utils/cn";
import Button from "../components/Form/Button";

export default function NewStory() {
  return (
    <BlogWrapper>
      <Form className="grid grid-rows-[auto_1fr] gap-y-10">
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

        <Button>Publish</Button>
      </Form>
    </BlogWrapper>
  );
}
