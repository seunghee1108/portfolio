/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "@/app/styles/project.module.scss";

interface ProjectPageProps {
  handleProjectClick: (project: string) => void;
}

const ProjectPage: React.FC<ProjectPageProps> = ({ handleProjectClick }) => {
  const handleDetailClick = (project: string) => {
    handleProjectClick(project);
  };

  return (
    <div className={styles.project}>
      <div className={styles.imageContainer}>
        <img src="/list.png" alt="BOARD" onClick={(e) => e.stopPropagation()} />
        <div className={styles.caption}>
          <p>01</p>
          <h1>BOARD</h1>
          <p>Solo project</p>
          <a href="#box4" onClick={() => handleDetailClick("BOARD")}>
            자세히 보기
          </a>
        </div>
      </div>

      <div className={styles.imageContainer}>
        <img
          src="/tourmaps.png"
          alt="TOURMAPS"
          onClick={(e) => e.stopPropagation()}
        />
        <div className={styles.caption}>
          <p>02</p>
          <h1>TOURMAPS</h1>
          <p>Solo project</p>
          <a href="#box4" onClick={() => handleDetailClick("TOURMAPS")}>
            자세히 보기
          </a>
        </div>
      </div>

      <div className={styles.imageContainer}>
        <img
          src="/erp.png"
          alt="ERPPROJECT"
          onClick={(e) => e.stopPropagation()}
        />
        <div className={styles.caption}>
          <p>03</p>
          <h1>ERP-PROJECT</h1>
          <p>Team project</p>
          <a href="#box4" onClick={() => handleDetailClick("ERP-PROJECT")}>
            자세히 보기
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
