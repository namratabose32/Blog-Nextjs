import React from "react";
import styles from "./singlePage.module.css";
import Image from "next/image";
import Menu from "@/components/Menu/Menu";
import Comments from "@/components/comments/Comments";
function SinglePage() {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h1>
          <div className={styles.user}>
            {/* {data?.user?.image && ( */}
            <div className={styles.userImageContainer}>
              <Image src="/p1.jpeg" alt="" fill className={styles.avatar} />
            </div>
            {/* )} */}
            <div className={styles.userTextContainer}>
              <span className={styles.username}>Namrata</span>
              <span className={styles.date}>01.01.2024</span>
            </div>
          </div>
        </div>
        {/* {data?.img && ( */}
        <div className={styles.imageContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image} />
        </div>
        {/* )} */}
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div
            className={styles.description}
            // dangerouslySetInnerHTML={{ __html: data?.desc }}
          >
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione
              laborum, minus commodi excepturi voluptatibus, aut inventore omnis
              quia maxime iusto corporis ipsum expedita animi magnam!
              Perspiciatis deleniti atque repellendus cum!
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero
              suscipit distinctio, quaerat eligendi beatae eaque, fuga
              doloremque laboriosam, deserunt voluptatibus deleniti earum
              reprehenderit quod quibusdam facilis accusantium iure enim facere.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
              officiis voluptatibus dolorem obcaecati, recusandae asperiores?
              Modi quibusdam quaerat, doloremque atque eligendi tempore, labore
              dolor quas facilis velit, ea illo ab.
            </p>
          </div>
          <div className={styles.comment}>
            <Comments />
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
}

export default SinglePage;
