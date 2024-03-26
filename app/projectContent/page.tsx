/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState, useEffect } from "react";
import styles from "@/app/styles/projectContent.module.scss";
import "react-notion/src/styles.css";
import "prismjs/themes/prism-tomorrow.css"; // only needed for code highlighting
import { NotionRenderer } from "react-notion";

interface ProjectDetailsProps {
  project: string | null;
}

const ProjectDetails: React.FC<ProjectDetailsProps> = ({ project }) => {
  const projectContent: {
    [key: string]: {
      number: string;
      description: string;
      link: string;
      github: string;
      review: string;
      technology: string;
      images: string[];
    };
  } = {
    TOURMAPS: {
      number: "01",
      description:
        "공공데이터포털에서 제공하는 OPEN API를 활용하여 다양한 여행 정보를 제공하는 웹 사이트입니다. 사용자는 키워드를 입력하여 검색하거나 지역별, 코스별로 여행 코스를 추천받을 수 있습니다. 여행 계획을 세울 때 정보 수집이 번거롭고 복잡하다는 느낌을 받아 이러한 경험을 공유하고자 제작하게 되었습니다. API를 구현하는 과정에서 서버와 클라이언트 간의 효율적인 통신 방법을 습득했습니다. ",
      link: "http://tourmaps.seungheee.net/",
      github: "https://github.com/seunghee1108/tourmaps",
      review: "API를 사용하는 과정에서 서버와 클라이언트간의 데이터를 주고 받는 데 이해를 높일 수 있었습니다. 사용자들이 여행 정보를 쉽게 얻고 계획을 세울 수 있도록 함으로써, 누구나 간편하고 즐겁게 여행을 즐길 수 있도록 돕고자 합니다.",
      technology: "JavaScript, TypeScript, React, Next.js, AWS, SCSS",
      images: ["/tourmapsmain.png", "/tourmaps1.png", "/tourmaps2.png"],
    },
    BOARD: {
      number: "02",
      description:
        "회원가입, 로그인, 글 작성, 댓글 작성 기능을 제공하는 웹 사이트입니다. 게시글에는 AWS S3를 이용하여 사진을 첨부할 수 있는 기능이 추가되었으며, 글의 작성자와 현재 사용자의 ID가 일치할 경우 글의 수정 및 삭제가 가능합니다. 이 프로젝트는 CRUD에 대한 이해를 높이는 데 중점을 두었고, MongoDB를 통해 NoSQL 데이터베이스의 특성을 경험하며 데이터 모델링과 쿼리 작성에 대한 실력을 향상시켰습니다. 또한, 사용자 경험을 고려하여 각 기능을 직관적으로 제공함으로써 사용자들이 쉽게 이용할 수 있도록 노력했습니다.",
      link: "http://shboard.seungheee.net/",
      github: "https://github.com/seunghee1108/Board",
      review: "",
      technology: "JavaScript, Node.js, Express, MongoDB, EJS, CSS",
      images: ["/boardmain.png", "/board2.png", "/board3.png"],
    },
    "ERP-PROJECT": {
      number: "03",
      description:
      "팀 프로젝트 공통 주제인 ERP 시스템을 기반으로 제작한 E-commerce 웹 사이트입니다. 관리자와 사용자 페이지로 나뉘어져 있어 소비자의 편의와 경험을 중시한 쇼핑몰 개발과, 관리자가 쇼핑몰 사이트를 통합 관리할 수 있는 ERP 툴 개발을 결합한 프로젝트입니다. 쇼핑몰 창업자는 DyaBya Project를 통해 쇼핑몰 페이지 배포와 사용자, 재고, 고객문의 등의 사이트 관리를 한 번에 손쉽게 처리할 수 있습니다. Git 충돌과 Branch 관리 등에서 어려움을 겪었지만, 서로의 부족한 부분을 논의하고 경험을 쌓아가며 문제를 극복할 수 있었습니다. 이러한 경험으로 성취감을 크게 느낄 수 있었으며, 팀의 협업과 창의성을 향상시키는 데 도움이 되었습니다. ",

      link: "",
      github: "https://github.com/KDT-IaaS-Class-One-Group/KDT-IaaS-1team-ERP",
      review:
        "팀 프로젝트를 시작할 때에는 Git 충돌과 Branch 관리 등에서 어려움을 겪었지만, 서로의 부족한 부분을 논의하고 경험을 쌓아가며 문제를 극복할 수 있었습니다. 이를 통해 팀 작업 시 해야 할 방향들을 명확히 할 수 있었습니다. 기술적 한계를 극복하기 위해 팀 회의와 지식 공유를 통해 점차 성장해 나갈 수 있었습니다. 결과적으로 Next.js와 데이터베이스까지 코드 작업을 끌어올려서 프로젝트를 마무리할 수 있었습니다. 문제가 발생했을 때 팀원들과 함께 논의하고 해결책을 찾아내는 과정에서 자신감을 얻고 이러한 경험으로 성취감을 크게 느낄 수 있었으며, 팀의 협업과 창의성을 향상시키는 데 도움이 되었습니다.",
      technology: "TypeScript, Node.js, Express, Next.js, MariaDB, React, Babel, JsonWebToken, TailWindCSS",
      images: ["/erp.png", "/erp2.png", "/erp3.png"],
    },
  };

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    // 조건부 호출을 제거하고 모든 경우에 호출되도록 함
    const interval = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % selectedProjectInfo.images.length
      );
    }, 2000);

    return () => clearInterval(interval); // cleanup 함수를 반환하여 컴포넌트가 사라질 때 clearInterval 호출
  }, []); // selectedProjectInfo가 변경될 때마다 호출되도록 함

  const selectedProjectInfo = project ? projectContent[project] : null;

  if (!selectedProjectInfo) {
    return null;
  }

  return (
    <div className={styles.projectContent}>
      <div className={styles.contentImage}>
        {project && (
          <img
            src={selectedProjectInfo.images[currentImageIndex]}
            alt={project}
          />
        )}
      </div>

      <div className={styles.contentBox}>
        <div>
          {/* <div className={styles.contentBoxNumber}> */}
          <p>{selectedProjectInfo.number}</p>
          {/* </div> */}
          <h1>{project}</h1>
        </div>
        {/* <h4>프로젝트 설명</h4> */}
        <div className={styles.content}>
          <p>{selectedProjectInfo.description}</p>
        </div>
        {/* <br /> */}
        <h4>STACK</h4>
        <div className={styles.content}>
          <p>{selectedProjectInfo.technology}</p>
        </div>

        <div className={styles.link}>
          <div>
            <h5>URL</h5>
            <a
              href={selectedProjectInfo.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/link.png" alt="link" />
            </a>
          </div>
          <div className={styles.line}> </div>
          <div>
            <h5>GitHub</h5>
            <a
              href={selectedProjectInfo.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/GitHub.png" alt="link" />
            </a>
          </div>
          <div className={styles.line}> </div>
          <div>
            <h5>Notion</h5>
            <a
              href={selectedProjectInfo.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              {/* <img src="/Notion.png" alt="link" /> */}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
