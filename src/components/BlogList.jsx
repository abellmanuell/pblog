import Blog from "./Blog";

export default function BlogList({ blogs }) {
  return blogs.map((blog) => {
    return <Blog key={blog.id} {...blog} />;
  });
}
