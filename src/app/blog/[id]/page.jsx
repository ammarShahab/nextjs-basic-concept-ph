import React from "react";
import blogsCollections from "../../../app/data/blogsCollection.json";

// 10. to see the details of blog page first we create the [id] folder and create the page.jsx with using async function
// 10.3 pass params to see that the id is received or not
export default async function BlogDetailsPage({ params }) {
  //   console.log(params.id);
  const { id } = await params;

  // const blog = blogsCollections.find((blog) => blog.id === params.id);
  // console.log(blog);

  return (
    <>
      <h1>Blog Details {id}</h1>
      {/* <div>
        <h3>{blog.title}</h3>
        <p>{blog.description}</p>
      </div> */}
    </>
  );
}
