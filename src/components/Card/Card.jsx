import Image from "next/image";
import React from "react";
import styles from "./card.module.css";
import Link from "next/link";
function Card() {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src="/p1.jpeg" alt="" fill />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>01.02.2024</span>
          <span className={styles.category}> Category</span>
        </div>
        <Link href="/">
          <h1>Lorem ipsum dolor sit amet</h1>
        </Link>
        <p className={styles.desc}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique
          iste perspiciatis qui cumque ullam quaerat provident distinctio alias
          ipsa maxime! Ad tempore laudantium minus est nisi excepturi,
          exercitationem fugit assumenda, consectetur adipisicing elit.
          Excepturi ex dolor culpa consectetur, nisi iste recusandae accusamus
          iure ducimus consequuntur quibusdam aliquid voluptas consequatur
          nesciunt nemo quam animi velit obcaecati!.
        </p>
        <Link href="/" className={styles.desc}>
          Read more
        </Link>
      </div>
    </div>
  );
}

export default Card;
