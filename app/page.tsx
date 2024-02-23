/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useRef } from "react";
import styles from "@/app/styles/main.module.scss";
import Topbar from "./components/Topbar";

function Index() {
  const box1Ref = useRef(null);
  const box2Ref = useRef(null);
  const box3Ref = useRef(null);
  const box4Ref = useRef(null);

  return (
    <div className={styles.container}>
      <div className={styles.banner}>
        <Topbar
          box1Ref={box1Ref}
          box2Ref={box2Ref}
          box3Ref={box3Ref}
          box4Ref={box4Ref}
        />
      </div>
      <div ref={box1Ref} className={`${styles.div} ${styles.box1}`}></div>
      <div ref={box2Ref} className={`${styles.div} ${styles.box2}`}>
        {/* skills */}
        <h2>SKILL</h2>
        <div className={styles.skillBox}>
          <div className={styles.backend}>
            <img src="/js.png" alt="javascript" />
            <img src="/ts.png" alt="typescript" />
            <img src="/mariadb.png" alt="mariadb" />
            <img src="/mongodb.png" alt="mongodb" />
            <img src="/aws2.png" alt="aws" />
          </div>

          <div className={styles.frontend}>
            <img src="/html.png" alt="html" />
            <img src="/css.png" alt="css" />
            <img src="/react.png" alt="react" />
            <img src="/tailwind.png" alt="tailwind" />
            <img src="/nextjs.svg" alt="next.js" />
            <img src="/python.png" alt="python" />
            <img src="/docker2.png" alt="docker" />
          </div>

          <div className={styles.tools}>
            <img src="/notion.svg" alt="notion" />
            <img src="/slack2.png" alt="slack" />
            <img src="/figma.png" alt="figma" />
            <img src="/github.png" alt="github" />
            <img src="/vscode.png" alt="vscode" />
          </div>
        </div>

        {/* skill 설명 */}
        <div></div>
      </div>
      <div ref={box3Ref} className={`${styles.div} ${styles.box3}`}>
        {/* 내용을 추가할 부분 */}
        <h2>Box 3 Content</h2>
        <p>This is the content of box 3.</p>
      </div>
      <div ref={box4Ref} className={`${styles.div} ${styles.box4}`}>
        {/* 내용을 추가할 부분 */}
        <h2>Box 4 Content</h2>
        <p>This is the content of box 4.</p>
      </div>
    </div>
  );
}

export default Index;
