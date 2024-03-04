/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useRef, useState } from "react";
import styles from "@/app/styles/main.module.scss";
import Topbar from "./components/Topbar";
import skillsData, { SkillData } from "./skill/page";
import ProjectPage from "./project/page"; 

function Index() {
  const [skillDescription, setSkillDescription] = useState("");
  const box1Ref = useRef(null);
  const box2Ref = useRef(null);
  const box3Ref = useRef(null);
  const box4Ref = useRef(null);
  const box5Ref = useRef(null);

  const handleSkillClick = (description: string) => {
    setSkillDescription(description);
  };

  const handleProjectContentClick = () => {
    const projectContentElement = document.getElementById("projectContent");
    if (projectContentElement) {
      const box4OffsetTop = box4Ref.current.offsetTop;
      window.scrollTo({
        top: box4OffsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.banner}>
        <Topbar
          box1Ref={box1Ref}
          box2Ref={box2Ref}
          box3Ref={box3Ref}
          box4Ref={box4Ref}
          box5Ref={box5Ref}
        />
      </div>

      {/* ABOUT */}
      <div ref={box1Ref} className={`${styles.div} ${styles.box1}`}></div>

      {/* SKILL */}
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

      {/* PROJECT */}
      <div
        ref={box3Ref}
        className={`${styles.div} ${styles.box3}`}
        onClick={handleProjectContentClick}
      >
        <ProjectPage />
      </div>

      {/* PROJECT-CONTENT */}
      <div
        id="projectContent"
        ref={box4Ref}
        className={`${styles.div} ${styles.box4}`}
      >
        <div className={styles.projectContent}>
          {/* left */}
          <div className={styles.contentImage}>
            <img src="/tourmaps.png" alt="tourmaps" />
            <div>
              <h1>TOURMAPS</h1>
              <p>설명</p>
              <p>배포링크</p>
              <p>GITHUB</p>
            </div>
          </div>
          {/* right */}
          <div className={styles.contentBox}>
            <div>
              <h1>프로젝트 설명</h1>
              <p>설명입니다</p>
              <br />
              <h1>후기 및 소감</h1>
              <p>후기입니다</p>
              <br />
              <h1>STACK</h1>
              <p>기술입니다</p>
            </div>
          </div>
        </div>
      </div>

      {/* CONTACT */}
      <div ref={box5Ref} className={`${styles.div} ${styles.box5}`}>
        <div className={styles.contact}>Contact</div>
      </div>
    </div>
  );
}

export default Index;
