import Link from "next/link";
import React from "react";
import BlogCard from "../../components/BlogCard";

export default async function BlogPage() {
  // 10.1 make some fake blog data
  /* const blogsCollection = [
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
  ]; */

  // console.log(blogsCollection);

  // 11.0 now we are going to work with fetching data which is only perform in server component. So as per documentation from data fetching make this function async

  // 11.2 Note: Concept of caching.
  // When we want to cache the blog data we will use following fetch method which will be saved but if any blog is updated it will not be updated. to check it run npm run build u will see two types of build  in terminal ○ (Static) pre-rendered as static content and ƒ  (Dynamic)  server-rendered on demand i.e static are saved and then npm run dev or start and go to home and then go to blog page. to check go to the network tab u will not see (blog?_rsc=bwuok) type of request because there is no data fetching in blogs as static that is blog is one time fetched (used inBlogs, posts, marketing pages). but if u want to get the updated blog u will add { cache: "no-store" } in fetch method. then go to the network tab u will see (blog?_rsc=bwuok) type of request again which is come from network when every time u go to the blog page (used in Admin pages, user dashboards, real-time stats). Best practice is make it static.

  // another thing u should know Here there is a something u see if u open ur network tab u will see the request is auto fetching the blogs upon scroll. which will like 24?_rsc=...., 25?_rsc=....
  const response = await fetch(
    "https://api.vercel.app/blog" /* {
    cache: "no-store",
  } */
  );
  const blogsCollection = await response.json();
  // console.log(blogsCollection);

  return (
    <>
      <h3>Blog Page</h3>
      {/* 10.2 map over the blogsCollection using BlogCard component*/}
      <div>
        {blogsCollection.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </>
  );
}
