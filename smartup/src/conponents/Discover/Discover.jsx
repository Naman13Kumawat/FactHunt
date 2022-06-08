import React from "react";
import axios from "axios";
import styles from "./Discover.module.css";
import Feed from "../Feed/Feed.jsx";

export default function Discover() {
  let [posts, setPosts] = React.useState([]);
  async function getData() {
    let response = {};
    try {
      response = await axios.get(
        "https://api.facthunt.in/fostergem/v1/post/list/public"
      );
    } catch (error) {
      console.error(error);
    }
    setPosts(response.data.content);
  }

  React.useEffect(()=>{
    getData();
  }, [])

 

  return (
    <div className={`${styles.container}`}>
      <p className={`${styles.heading}`}>Discover</p>
      <div className={`${styles.discover}`}>
        {posts && posts.map((post) => {
          return (
            <Feed
              key={post.postId}
              post = {post}
            />
          );
        })}
      </div>
    </div>
  );
}
