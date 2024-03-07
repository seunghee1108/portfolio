"use client";


import React from "react";
import styles from "@/app/styles/topbar.module.scss";
import Link from "next/link";

function Topbar({ box1Ref, box2Ref, box3Ref, box4Ref, box5Ref}) {
  const scrollToRef = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <div className={styles.topbar}>
      <div className={styles.div2}>
        <Link href="/">SEUNGHEE</Link>
      </div>
      <div className={styles.div3}>
        <a className={styles.link} onClick={() => scrollToRef(box1Ref)}>
          ABOUT
        </a>
        <a className={styles.link} onClick={() => scrollToRef(box2Ref)}>
          SKILL
        </a>
        <a className={styles.link} onClick={() => scrollToRef(box3Ref)}>
          PROJECT
        </a>
        
        <a className={styles.link} onClick={() => scrollToRef(box5Ref)}>
          CONTACT
        </a>
      </div>
    </div>
  );
}

export default Topbar;
