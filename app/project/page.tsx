/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "@/app/styles/main.module.scss";

interface ProjectPageProps {
  handleProjectClick: (project: string) => void;
}

const ProjectPage: React.FC<ProjectPageProps> = ({ handleProjectClick }) => {
  return (
    <div className={styles.project}>
      <div onClick={() => handleProjectClick("BOARD")}>
        <img src="/list.png" alt="BOARD" />
        <div className={styles.fontBox}>
          <h2>BOARD</h2>
          <h3>Solo project</h3>
        </div>
        <div className={styles.fontContent}>
          <p>
            Express와 MongoDB를 이용한 게시판 프로젝트로, 사용자는 회원가입,
            로그인하여 글 및 댓글을 작성할 수 있습니다.
          </p>
          <br />
          <h4>기술스택</h4>
          <p>MongoDB, </p>
        </div>
      </div>
      <div onClick={() => handleProjectClick("TOURMAPS")}>
        <img src="/tourmaps.png" alt="TOURMAPS" />
        <div className={styles.fontBox}>
          <h2>TOURMAPS</h2>
          <h3>Solo project</h3>
        </div>
        <p>dd</p>
      </div>
      <div onClick={() => handleProjectClick("ERP-PROJECT")}>
        <img src="/erp.png" alt="ERPPROJECT" />
        <div className={styles.fontBox}>
          <h2>ERP-PROJECT</h2>
          <h3>Team project</h3>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
