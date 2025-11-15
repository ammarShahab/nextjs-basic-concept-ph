import Link from "next/link";
import React from "react";

export default function BlogPage() {
  // 10.1 make some fake blog data
  const blogsCollection = [
    {
      id: 1,
      title: "Blog 1",
      description:
        "lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, dolores.",
    },
    {
      id: 2,
      title: "Blog 2",
      description: "lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 3,
      title: "Blog 3",
      description: "lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
  ];

  console.log(blogsCollection);

  return (
    <>
      <h3>Blog Page</h3>
      {/* 10.2 map over the blogsCollection*/}
      <div>
        {blogsCollection.map((blog) => (
          <div key={blog.id}>
            <h3>{blog.title}</h3>
            <button>
              <Link href={`blog/${blog.id}`}>Blog Details</Link>
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
