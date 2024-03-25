/* eslint-disable @next/next/no-img-element */
"use client"
import { NextPage } from 'next';
import React from "react";
import styles from "@/app/styles/project.module.scss";

// 수정된 타입 정의
interface ProjectPageProps {
  handleProjectClick: (project: string) => void;
}

const ProjectPage: NextPage<ProjectPageProps> = ({ handleProjectClick }) => {
  const handleDetailClick = (project: string) => {
    handleProjectClick(project);
  };

  return (
    <div className={styles.project}>
      <div className={styles.imageContainer}>
        <img
          src="/tourmapsmain.png"
          alt="TOURMAPS"
          onClick={(e) => e.stopPropagation()}
        />
        <div className={styles.caption}>
          <p>01</p>
          <h1>TOURMAPS</h1>
          <p>Solo project</p>
          {/* 버튼에 'button-to-box4' 클래스 추가 */}
          <a href="#box4" onClick={() => handleDetailClick("TOURMAPS")} className="button-to-box4">
            자세히 보기 &gt;
          </a>
        </div>
      </div>

      <div className={styles.imageContainer}>
        <img
          src="/boardmain.png"
          alt="BOARD"
          onClick={(e) => e.stopPropagation()}
        />
        <div className={styles.caption}>
          <p>02</p>
          <h1>BOARD</h1>
          <p>Solo project</p>
          {/* 버튼에 'button-to-box4' 클래스 추가 */}
          <a href="#box4" onClick={() => handleDetailClick("BOARD")} className="button-to-box4">
            자세히 보기 &gt;
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
          {/* 버튼에 'button-to-box4' 클래스 추가 */}
          <a href="#box4" onClick={() => handleDetailClick("ERP-PROJECT")} className="button-to-box4">
            자세히 보기 &gt;
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
