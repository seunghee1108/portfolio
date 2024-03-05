import React from 'react';
import styles from "@/app/styles/main.module.scss";

interface ProjectDetailsProps {
  project: string | null;
}

const ProjectDetails: React.FC<ProjectDetailsProps> = ({ project }) => {
  const projectContent: { [key: string]: { description: string, link: string, github: string, review: string, technology: string } } = {
    'BOARD': {
      description: '회원가입, 로그인, 글작성이 가능한 게시판입니다.',
      link: '투어 맵 서비스의 배포 링크',
      github: '투어 맵 서비스의 깃허브 링크',
      review: '게시판 프로젝트를 진행하면서 많은 것을 배웠습니다.',
      technology: 'Node.js, Express, MongoDB, React'
    },
    'TOURMAPS': {
      description: '지역별, 원하는 코스별로 여행지의 코스를 추천 받는 웹페이지입니다.',
      link: '두 번째 프로젝트의 배포 링크',
      github: '두 번째 프로젝트의 깃허브 링크',
      review: '여행지 추천 서비스를 개발하면서 사용자 경험을 고려하는 방법을 익혔습니다.',
      technology: 'React, Next.js, MongoDB'
    },
    'ERP-PROJECT': {
      description: '소비자의 편의와 경험을 중시한 쇼핑몰 개발과, 관리자가 쇼핑몰 사이트를 통합 관리할 수 있는 ERP 툴 개발을 결합한 프로젝트입니다.',
      link: '세 번째 프로젝트의 배포 링크',
      github: '세 번째 프로젝트의 깃허브 링크',
      review: '쇼핑몰 및 ERP 시스템 개발을 통해 실무적인 개발 경험을 쌓았습니다.',
      technology: 'Node.js, MongoDB, React, Redux'
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
          <p>{selectedProjectInfo.review}</p>
          <br />
          <h1>기술 스택</h1>
          <p>{selectedProjectInfo.technology}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
