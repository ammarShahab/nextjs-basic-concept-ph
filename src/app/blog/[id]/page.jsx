import React from "react";

// 10. to see the details of blog page first we create the [id] folder and create the page.jsx with using async function
// 10.3 pass params
export default async function BlogDetailsPage({ params }) {
  //   console.log(params.id);
  const { id } = await params;
  console.log(id);

  return (
    <>
      <h1>Blog Details {id}</h1>
      <div>
        <h3></h3>
      </div>
    </>
  );
}
