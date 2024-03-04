import React from 'react';
import styles from "@/app/styles/main.module.scss";

interface ProjectPageProps {
  handleProjectClick: (project: string) => void;
}

const ProjectPage: React.FC<ProjectPageProps> = ({ handleProjectClick }) => {
  return (
    <div className={styles.project}>
      <div onClick={() => handleProjectClick("TOURMAPS")}>
        <h1>TOURMAPS</h1>
        <p>개인 프로젝트</p>
        <img src="/tourmaps.png" alt="TOURMAPS" />
      </div>
      <div onClick={() => handleProjectClick("두 번째 프로젝트")}>
        <h1>두 번째 프로젝트</h1>
        <p>두 번째 프로젝트 설명</p>
        <img src="/docker.png" alt="두 번째 프로젝트" />
      </div>
      <div onClick={() => handleProjectClick("세 번째 프로젝트")}>
        <h1>세 번째 프로젝트</h1>
        <p>세 번째 프로젝트 설명</p>
        <img src="/css.png" alt="세 번째 프로젝트" />
      </div>
    </div>
  );
};

export default ProjectPage;
