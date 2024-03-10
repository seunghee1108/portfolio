/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useRef, useState } from "react";
import styles from "@/app/styles/main.module.scss";
import Topbar from "./components/Topbar";
import skillsData, { SkillData } from "./skill/page";
import ProjectPage from "./project/page";
import ProjectDetails from "./projectContent/page";

function Index() {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const [skillDescription, setSkillDescription] = useState("");
  const box1Ref = useRef(null);
  const box2Ref = useRef(null);
  const box3Ref = useRef(null);
  const box4Ref = useRef(null);
  const box5Ref = useRef(null);

  const handleSkillClick = (description: string) => {
    setSkillDescription(description);
  };

  const handleProjectClick = (project: string) => {
    setSelectedProject(project);
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
      <div ref={box1Ref} className={`${styles.div} ${styles.box1}`}>
        <div className={styles.aboutBox}>
          <div>
            <img src="/사진.png" alt="image" />
          </div>
          <div className={styles.fontBox}>
            <div className={styles.stackBox}>
              <p>FULL STACK</p>
            </div>
            <h1>안녕하세요. 방승희입니다.</h1>
            <p>새로운 것을 내 것으로 만들며, 매일 한층 더 성장하는 개발자</p>
            <div className={styles.fontBoxTwo}>
              <p>
                모든 경험과 학습내용은 Notion으로 기록 후 끊임없이 심화하며
                연구합니다.
                <br />
                성실함을 바탕으로 시행착오를 겪으며 전문적인 개발자가 되어가는
                중입니다.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.aboutBoxTwo}>
          <p>010-6354-8982</p>
          <p>이메일</p>
          <p>깃허브</p>
          <p>Notion</p>

          <div>

          </div>
        </div>
      </div>

{/* SKILL */}
<div ref={box2Ref} className={`${styles.div} ${styles.box2}`}>
  <div className={styles.skillBox}>
    <div className={styles.backend}>
      {skillsData.slice(0, 5).map((skill: SkillData, index: number) => (
        <div key={index} className={styles.skillItem}>
          <img
            src={skill.src}
            alt={skill.alt}
          />
        </div>
      ))}
    </div>
  </div>

{/* 두 번째 섹션 */}
  <div className={styles.skillBox}>
    <div className={styles.tools}>
      {skillsData.slice(5, 10).map((skill: SkillData, index: number) => (
        <div key={index} className={styles.skillItem}>
          <img
            src={skill.src}
            alt={skill.alt}
          />
        </div>
      ))}
    </div>
  </div>

{/* 세 번째 섹션 */}
  <div className={styles.skillBox}>
    <div className={styles.frontend}>
      {skillsData.slice(10, 15).map((skill: SkillData, index: number) => (
        <div key={index} className={styles.skillItem}>
          <img
            src={skill.src}
            alt={skill.alt}
          />
        </div>
      ))}
    </div>
  </div>
</div>

      {/* PROJECT */}
      <div
        ref={box3Ref}
        className={`${styles.div} ${styles.box3}`}
        onClick={handleProjectContentClick}
      >
        <ProjectPage handleProjectClick={handleProjectClick} />
      </div>

      {/* PROJECT-CONTENT */}
      <div
        id="projectContent"
        ref={box4Ref}
        className={`${styles.div} ${styles.box4}`}
      >
        {selectedProject && <ProjectDetails project={selectedProject} />}
      </div>

      {/* CONTACT */}
      <div ref={box5Ref} className={`${styles.div} ${styles.box5}`}>
        <div className={styles.contact}>Contact</div>
      </div>
    </div>
  );
}

export default Index;
