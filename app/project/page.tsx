import React from "react";
import styles from "@/app/styles/main.module.scss";

interface ProjectPageProps {
  handleProjectClick: (project: string) => void;
}

const ProjectPage: React.FC<ProjectPageProps> = ({ handleProjectClick }) => {
  return (
    <div className={styles.project}>
      <div onClick={() => handleProjectClick("BOARD")}>
        <img src="/tourmaps.png" alt="BOARD" />
        <div className={styles.fontBox}>
          <h2>BOARD</h2>
          <h3>Solo project</h3>
        </div>
        <p>board에 대한 설명입니다.</p>
      </div>
      <div onClick={() => handleProjectClick("TOURMAPS")}>
        <img src="/docker.png" alt="TOURMAPS" />
        <div className={styles.fontBox}>
          <h2>TOURMAPS</h2>
          <h3>Solo project</h3>
        </div>
          <p>dd</p>
      </div>
      <div onClick={() => handleProjectClick("ERP-PROJECT")}>
        <img src="/css.png" alt="ERPPROJECT" />
        <div className={styles.fontBox}>
          <h2>ERP-PROJECT</h2>
          <h3>Team project</h3>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
