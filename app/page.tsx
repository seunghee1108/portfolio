/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useRef, useState } from "react";
import styles from "@/app/styles/main.module.scss";
import Topbar from "./components/Topbar";
import skillsData, { SkillData } from "./skill/page";

function Index() {
  const [skillDescription, setSkillDescription] = useState("");
  const box1Ref = useRef(null);
  const box2Ref = useRef(null);
  const box3Ref = useRef(null);
  const box4Ref = useRef(null);

  const handleSkillClick = (description: string) => {
    setSkillDescription(description);
  };

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
        <div className={styles.skillBox}>
          <div className={styles.backend}>
            {skillsData.map((skill: SkillData, index: number) => (
              <div key={index} className={styles.skillItem}>
                <img
                  src={skill.src}
                  alt={skill.alt}
                  onClick={() => handleSkillClick(skill.description)}
                />
              </div>
            ))}
          </div>
          <div className={styles.skillContent}>
            {skillDescription && (
              <div className={styles.skillDescription}>{skillDescription}</div>
            )}
          </div>
        </div>
      </div>

      {/* 프로젝트 내용  */}
      <div ref={box3Ref} className={`${styles.div} ${styles.box3}`}>
        <div className={styles.project}>
          <div>프로젝트 내용</div>
        </div>
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
