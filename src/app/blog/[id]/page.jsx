import React from "react";
import blogsCollections from "../../../app/data/blogsCollection.json";
import Link from "next/link";

// 13.3 use revalidate to update the cache after every 60 seconds i.e as the blogs a static if u want to get the updated blog in every 60 seconds.
export const revalidate = 60;

// 13.1 we use the following function generateStaticParams as per documentation of ISR. now when we run npm run build (also see in terminal of making the blog static) and see in network tab there is no blog is fetched because it is now static. It sends the data in a chunk to make it static.
export async function generateStaticParams() {
  const posts = await fetch("https://api.vercel.app/blog").then((res) =>
    res.json()
  );
  return posts.map((post) => ({
    id: String(post.id),
  }));
}

// 10. to see the details of blog page first we create the [id] folder and create the page.jsx with using async function
// 10.3 pass params to see that the id is received or not
export default async function BlogDetailsPage({ params }) {
  //   console.log(params.id);

  // 12.0 show the blog details in ui.
  const { id } = await params;

  // 13.0 as this page is dynamic but we want to make it static using (ISR) Incremental Static Regeneration. When we use static, if a page need to be updated not frequently we make it static. When we use dynamic , if a page need to be updated frequently we make it dynamic.
  const response = await fetch(
    `https://api.vercel.app/blog/${id}` /* {
    cache: "no-store",
  } */
  );
  const blog = await response.json();
  console.log(blog);

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-6">
      {/* Back Button */}
      <Link
        href="/blog"
        className="inline-block mb-6 text-blue-600 font-medium hover:underline"
      >
        ← Back to Blogs
      </Link>

      {/* Golden Ratio Layout */}
      <div className="mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-[0.618fr_0.382fr] gap-10">
        {/* Left (61.8%) */}
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <h1 className="text-3xl font-bold mb-4 text-gray-900 leading-tight">
            {blog.title}
          </h1>

          <div className="flex items-center gap-3 text-sm text-gray-500 mb-6">
            <span>✍ {blog.author}</span>
            <span>•</span>
            <span>{blog.date}</span>
            <span>•</span>
            <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs">
              {blog.category}
            </span>
          </div>

          <p className="text-gray-700 text-lg leading-relaxed">
            {blog.content}
          </p>
        </div>

        {/* Right (38.2%) - empty space to preserve golden ratio */}
        <div className="hidden md:block">
          {/* You can later add recommended blogs */}
        </div>
      </div>
    </div>
  );
}
