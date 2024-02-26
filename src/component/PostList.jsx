// import React, { useState } from "react";
import Post from "./Post";
import classes from "./postList.module.css";
import { useLoaderData } from "react-router-dom";
function PostList() {
  const posts = useLoaderData();
  // const allPostsData = useLoaderData();
  // const [allData, setAllData] = useState(allPostsData);
  // console.log("allData", allData);
  return (
    <>
      {posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map((p) => (
            <Post key={p.id} id={p.id} author={p.author} body={p.body} />
          ))}
        </ul>
      )}
      {posts.length === 0 && (
        <div style={{ textAlign: "center", color: "white" }}>
          <h1>There are no post </h1>
          <p>add somthing!</p>
        </div>
      )}
    </>
  );
}

export default PostList;
