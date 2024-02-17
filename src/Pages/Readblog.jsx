import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from '../Firebase/cofig.js'
import { doc, getDoc } from "firebase/firestore";

const Readblog = () => {
  const { id } = useParams(); // Extract id from URL params
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const blogDoc = await getDoc(doc(db, "blogs", id));
        if (blogDoc.exists()) {
          setBlog(blogDoc.data());
        } else {
          console.error("Blog not found");
        }
      } catch (error) {
        console.error("Error fetching blog:", error);
      }
    };

    fetchBlog();
  }, [id]);

  if (!blog) {
    return <div>Loading...</div>; // or show a loading spinner
  }

  return (
    <>
      <div className="bg-green-100 py-12">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">{blog.title}</h1>
          <h2 className="text-xl md:text-2xl font-semibold text-green-800 mb-4">{blog.subtitle}</h2>

          <div className="mb-8 max-w-2xl mx-auto overflow-hidden rounded-lg shadow-lg">
            <img
              src={blog.imglink}
              loading="lazy"
              alt={`Photo for ${blog.title}`}
              className="h-full w-full object-cover object-center"
            />
          </div>

          <div className="max-w-2xl mx-auto text-left text-green-800 mb-8">
            <p className="text-lg md:text-xl leading-relaxed">{blog.blogContent}</p>
          </div>

          <div className="mb-8">
            <h2 className="text-xl md:text-2xl font-semibold text-green-800 mb-2">Author: {blog.authname}</h2>
            <h2 className="text-xl md:text-2xl font-semibold text-green-800 mb-2">Author's Email: {blog.email}</h2>
            <p className="text-green-500 text-lg">Published on: {new Date(blog.timestamp.seconds * 1000).toLocaleString()}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Readblog;
