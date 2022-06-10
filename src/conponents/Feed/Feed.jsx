import React from "react";
import styles from "./Feed.module.css";

export default function Feed({post}) {
  return (
    <div className={`${styles.feed}`}>
      <img className={`${styles.factImg}`} src={post.coverImageUrl} alt="GG" />
      <p className={`${styles.title}`}>{post.title}</p>
      <div className={`${styles.author}`}>
        <img className={`${styles.profilePic}`} src={post.user.profilePic} alt="profilepic" />
        <p>{post.user.fname}</p>
        <p>{`published: ${post.date.slice(0, 10)}`}</p>
      </div>
    </div>
  );
}
