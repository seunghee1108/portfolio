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
          <p>회원가입, 로그인, 글 작성, 댓글 작성이 가능한 게시판입니다.</p>
          <br />
          <div className={styles.stackBox}>
            <h4>Stack</h4>
            <p>JavaScript, Node.js, Express, MongoDB, EJS, CSS </p>
          </div>
        </div>
      </div>
      <div onClick={() => handleProjectClick("TOURMAPS")}>
        <img src="/tourmaps.png" alt="TOURMAPS" />
        <div className={styles.fontBox}>
          <h2>TOURMAPS</h2>
          <h3>Solo project</h3>
        </div>
        <div className={styles.fontContent}>
          <p>
            지역별, 여행 코스별로 선택한 지역, 해당 코스에 포함된 관광지 정보를
            제공하는 여행 웹페이지입니다
          </p>
          <br />
          <div className={styles.stackBox}>
          <h4>Stack</h4>
          <p>avaScript, TypeScript, React, Next.js, AWS, SCSS </p>
          </div>
        </div>
      </div>
      <div onClick={() => handleProjectClick("ERP-PROJECT")}>
        <img src="/erp.png" alt="ERPPROJECT" />
        <div className={styles.fontBox}>
          <h2>ERP-PROJECT</h2>
          <h3>Team project</h3>{" "}
        </div>
        <div className={styles.fontContent}>
          <p>
            소비자의 편의와 경험을 중시한 쇼핑몰 개발과, 관리자가 쇼핑몰
            사이트를 통합 관리할 수 있는 ERP 툴 개발을 결합한 프로젝트입니다.
          </p>
          <br />
          <div className={styles.stackBox}>
          <h4>Stack</h4>
          <p>
            TypeScript, Node.js, Express, Next.js, MariaDB, React, Babel,
            JsonWebToken, TailWindCSS
          </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
