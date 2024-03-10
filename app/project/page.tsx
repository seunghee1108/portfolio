/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "@/app/styles/project.module.scss";

interface ProjectPageProps {
  handleProjectClick: (project: string) => void;
}

const ProjectPage: React.FC<ProjectPageProps> = ({ handleProjectClick }) => {
  return (
    <div className={styles.project}>
      <div onClick={() => handleProjectClick("BOARD")}>
        <img src="/list.png" alt="BOARD" />
      </div>
      <div onClick={() => handleProjectClick("TOURMAPS")}>
        <img src="/tourmaps.png" alt="TOURMAPS" />
      </div>
      <div onClick={() => handleProjectClick("ERP-PROJECT")}>
        <img src="/erp.png" alt="ERPPROJECT" />
      </div>
    </div>
  );
};

export default ProjectPage;
