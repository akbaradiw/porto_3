import React from "react";
import { useSelector } from "react-redux";

const PostFeature = () => {
const { list } = useSelector((state) => state.post);
const thisPost = list.map((item) => {
  return (
    <article key={item.id}>
      <h2>{item.title}</h2>
      <p>{item.body}</p>
    </article>
  );
});

  


  return (
    <div>
      <h1>post feature</h1>
      {thisPost}
    </div>
  );
};

export default PostFeature;
