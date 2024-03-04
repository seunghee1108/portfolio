import React from "react";
import styles from "@/app/styles/main.module.scss";

const ProjectPage: React.FC = () => {
  return (
    <div className={styles.project}>
      <div>
        <img src="/tourmaps.png" alt="TOURMAPS" />
        <h1>찻 번째 프로젝트</h1>
        <p>찻 번째 프로젝트 설명</p>
      </div>
      <div>
        <img src="/docker.png" alt="두 번째 프로젝트" />
        <h1>두 번째 프로젝트</h1>
        <p>두 번째 프로젝트 설명</p>
      </div>
      <div>
        <img src="/js.png" alt="세 번째 프로젝트" />
        <h1>세 번째 프로젝트</h1>
        <p>세 번째 프로젝트 설명</p>
      </div>
    </div>
  );
};

export default ProjectPage;
