import React from "react";
import { useLoaderData } from "react-router-dom";
import BlogData from "./BlogData";

const Blog = () => {
  const blogs = useLoaderData();
  return (
    <div className="flex items-center justify-center my-10">
      <div className="grid grid-cols-2 gap-10">
      {
        blogs.map(blog=> <BlogData key={blog._id}
          blog={blog}
        ></BlogData>)
      }
      </div>
    </div>
   
  );
};

export default Blog;
