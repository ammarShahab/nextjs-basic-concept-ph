import Link from "next/link";
import React from "react";
// 11.1 create a BlogCard component and pass blog as props

export default function BlogCard({ blog }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-5 border hover:shadow-lg transition">
      <h2 className="text-xl font-bold mb-2">{blog.title}</h2>

      {/* <p className="text-gray-600 text-sm mb-3">
        {blog.content.slice(0, 90)}...
      </p> */}

      <div className="text-xs text-gray-500 mb-3">
        <p>
          Author: <span className="font-medium">{blog.author}</span>
        </p>
        <p>Date: {blog.date}</p>
        <p className="mt-1 inline-block bg-blue-100 text-blue-600 px-2 py-1 rounded-md">
          {blog.category}
        </p>
      </div>

      <Link
        href={`/blog/${blog.id}`}
        className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md mt-3 hover:bg-blue-700 transition"
      >
        Read More
      </Link>
    </div>
  );
}
