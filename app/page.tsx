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
