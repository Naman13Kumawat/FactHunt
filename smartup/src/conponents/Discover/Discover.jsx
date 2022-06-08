import React from "react";
import axios from "axios";
import styles from "./Discover.module.css";
import Feed from "../Feed/Feed.jsx";
import sidebar_style from "../Sidebar/Sidebar.module.css";

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

  React.useEffect(() => {
    getData();
  }, []);

  const handleClick = () => {
    document
      .getElementById("sidebar")
      .classList.toggle(`${sidebar_style.active}`);
    document
      .getElementById("hamburger")
      .classList.toggle(`${styles.active}`);
  };

  return (
    <div className={`${styles.container}`}>
      <div
        className={`${styles.hamburger}`}
        id="hamburger"
        onClick={handleClick}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <path d="M0 96C0 78.33 14.33 64 32 64H416C433.7 64 448 78.33 448 96C448 113.7 433.7 128 416 128H32C14.33 128 0 113.7 0 96zM0 256C0 238.3 14.33 224 32 224H416C433.7 224 448 238.3 448 256C448 273.7 433.7 288 416 288H32C14.33 288 0 273.7 0 256zM416 448H32C14.33 448 0 433.7 0 416C0 398.3 14.33 384 32 384H416C433.7 384 448 398.3 448 416C448 433.7 433.7 448 416 448z" />
        </svg>
      </div>
      <p className={`${styles.heading}`}>Discover</p>
      <div className={`${styles.discover}`}>
        {posts &&
          posts.map((post) => {
            return <Feed key={post.postId} post={post} />;
          })}
      </div>
    </div>
  );
}
