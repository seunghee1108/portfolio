// ProjectDetails.tsx
import React from 'react';
import styles from "@/app/styles/main.module.scss";

interface ProjectDetailsProps {
  project: string | null;
}

const ProjectDetails: React.FC<ProjectDetailsProps> = ({ project }) => {
  const projectContent: { [key: string]: { description: string, link: string, github: string } } = {
    'TOURMAPS': {
      description: '투어 맵 서비스에 대한 프로젝트 설명입니다.',
      link: '투어 맵 서비스의 배포 링크',
      github: '투어 맵 서비스의 깃허브 링크'
    },
    '두 번째 프로젝트': {
      description: '두 번째 프로젝트에 대한 설명입니다.',
      link: '두 번째 프로젝트의 배포 링크',
      github: '두 번째 프로젝트의 깃허브 링크'
    },
    '세 번째 프로젝트': {
      description: '세 번째 프로젝트에 대한 설명입니다.',
      link: '세 번째 프로젝트의 배포 링크',
      github: '세 번째 프로젝트의 깃허브 링크'
    }
  };

  const selectedProjectInfo = project ? projectContent[project] : null;

  if (!selectedProjectInfo) {
    return null;
  }

  return (
    <div className={styles.projectContent}>
      <div className={styles.contentImage}>
        {project && <img src={`/${project.toLowerCase()}.png`} alt={project} />}
        <div>
          <h1>{project}</h1>
          <p>{selectedProjectInfo.description}</p>
          <p>{selectedProjectInfo.link}</p>
          <p>{selectedProjectInfo.github}</p>
        </div>
      </div>
      <div className={styles.contentBox}>
        <div>
          <h1>프로젝트 설명</h1>
          <p>{selectedProjectInfo.description}</p>
          <br />
          <h1>후기 및 소감</h1>
          <p>후기입니다</p>
          <br />
          <h1>STACK</h1>
          <p>기술입니다</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
