import React from "react";
import styles from "./comments.module.css";
import Image from "next/image";
function Comments() {
  const status = "authenticated";
  const isLoading = "true";
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Comments</h1>
      {status === "authenticated" ? (
        <div className={styles.write}>
          <textarea
            placeholder="write a comment..."
            className={styles.input}
            // onChange={(e) => setDesc(e.target.value)}
          />
          <button className={styles.button}>Send</button>
        </div>
      ) : (
        <Link href="/login">Login to write a comment</Link>
      )}
      <div className={styles.comments}>
        {/* {isLoading ? ( */}
        {/* "loading" */}
        {/* ) : ( */}
        {/* //   data?.map((item) => ( */}
        <div className={styles.comment}>
          <div className={styles.user}>
            {/* {item?.user?.image && ( */}
            <Image
              src="/p1.jpeg"
              alt=""
              width={50}
              height={50}
              className={styles.image}
            />
            {/* )} */}
            <div className={styles.userInfo}>
              <span className={styles.username}>Namrata</span>
              <span className={styles.date}>01.02.2023</span>
            </div>
          </div>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi
            magnam architecto laudantium, tenetur enim, modi, amet non provident
            ducimus voluptates deleniti fugiat ratione vitae ex officiis autem
            quo fuga distinctio? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Modi fuga amet a quibusdam corporis inventore. A,
            illum quidem fuga tempora cumque consectetur magni corporis
            veritatis, debitis blanditiis ex quibusdam sint! Lorem
          </p>
        </div>
        {/* )} */}
      </div>
    </div>
  );
}

export default Comments;
