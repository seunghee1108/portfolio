/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState, useEffect } from "react";
import styles from "@/app/styles/projectContent.module.scss";

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
    BOARD: {
      number: "01",
      description:
      "이 프로젝트는 Express와 MongoDB를 기반으로 제작하였습니다. 사용자는 회원가입, 로그인, 글 작성, 댓글 작성과 같은 기능을 활용할 수 있습니다.\n또한, AWS S3를 이용하여 사진을 첨부하는 기능을 제공하며 글의 작성자와 사용자의 ID가 일치한다면 글의 수정 및 삭제도 가능합니다.\n이 프로젝트는 Express와 MongoDB를 기반으로 제작하였습니다. 사용자는 회원가입, 로그인, 글 작성, 댓글 작성과 같은 기능을 활용할 수 있습니다.\n또한, AWS S3를 이용하여 사진을 첨부하는 기능을 제공하며 글의 작성자와 사용자의 ID가 일치한다면 글의 수정 및 삭제도 가능합니다."
,description:
"이 프로젝트는 Express와 MongoDB를 기반으로 제작하였습니다. 사용자는 회원가입, 로그인, 글 작성, 댓글 작성과 같은 기능을 활용할 수 있습니다.\n또한, AWS S3를 이용하여 사진을 첨부하는 기능을 제공하며 글의 작성자와 사용자의 ID가 일치한다면 글의 수정 및 삭제도 가능합니다.\n이 프로젝트는 Express와 MongoDB를 기반으로 제작하였습니다. 사용자는 회원가입, 로그인, 글 작성, 댓글 작성과 같은 기능을 활용할 수 있습니다.\n또한, AWS S3를 이용하여 사진을 첨부하는 기능을 제공하며 글의 작성자와 사용자의 ID가 일치한다면 글의 수정 및 삭제도 가능합니다."
  
      link: "http://shboard.seungheee.net/",
      github: "https://github.com/seunghee1108/Board",
      review:
        "게시판 프로젝트를 진행하면서 MongoDB에 대한 이해를 높일 수 있었습니다. MongoDB를 선택한 이유는 NoSQL의 유연성과 스키마의 제한이 없는 특성때문입니다. 이를 통해 로그인 정보나 글 작성과 같은 데이터를 효율적으로 저장하고 빠르게 데이터를 처리할 수 있었습니다. 사용자가 글을 작성하고 댓글을 나눌 수 있는 공간을 만들어가는 과정이 특히 흥미로웠습니다. 또한, 추가적인 기능을 도입하고 사용자 경험을 향상시키며 프로젝트를 발전해 나갈 것입니다.",
      technology: "JavaScript, Node.js, Express, MongoDB, EJS, CSS",
      images: ["/boardmain.png", "/board2.png", "/board3.png"],
    },
    TOURMAPS: {
      number: "02",
      description:
        "공공데이터포털에서 제공하는 OPEN API를 활용하여 제작한 프로젝트입니다. 여행 지역이나 관심사를 검색할 수 있는 기능과 지역별, 코스별로 여행 코스를 추천받을 수 있는 서비스로 관심 있는 코스의 관련 정보를 제공합니다.",
      link: "http://tourmaps.seungheee.net/",
      github: "https://github.com/seunghee1108/tourmaps",
      review:
        "프로젝트를 진행하면서 공공데이터포털의 API를 활용한 경험은 매우 유익했습니다.데이터를 가져오고 활용하는 과정에서 편리함을 느꼈고, 이를 통해 사용자에게 더 나은 서비스를 제공할 수 있게 되었습니다. 사용자들이 각자의 취향과 관심사에 맞춰 최적의 여행 계획을 도와줄 수 있어서 보람 만족함을 느낍니다.",
      technology: "JavaScript, TypeScript, React, Next.js, AWS, SCSS",
      images: ["/tourmapsmain.png", "/tourmaps1.png", "/tourmaps2.png"],
    },
    "ERP-PROJECT": {
      number: "03",
      description:
        "소비자의 편의와 경험을 중시한 쇼핑몰 개발과, 관리자가 쇼핑몰 사이트를 통합 관리할 수 있는 ERP 툴 개발을 결합한 프로젝트입니다. 쇼핑몰 창업자는 DyaBya Project를 통해 쇼핑몰 페이지 배포와 사용자/재고/고객 문의 등의 사이트 관리를 한 번에 손쉽게 처리할 수 있습니다.",
      link: "",
      github: "https://github.com/KDT-IaaS-Class-One-Group/KDT-IaaS-1team-ERP",
      review:
        "팀 프로젝트를 시작할 때에는 Git 충돌과 Branch 관리 등에서 어려움을 겪었지만, 서로의 부족한 부분을 논의하고 경험을 쌓아가며 문제를 극복할 수 있었습니다. 이를 통해 팀 작업 시 해야 할 방향들을å 명확히 할 수 있었습니다. 기술적 한계를 극복하기 위해 팀 회의와 지식 공유를 통해 점차 성장해 나갈 수 있었습니다. 결과적으로 Next.js와 데이터베이스까지 코드 작업을 끌어올려서 프로젝트를 마무리할 수 있었습니다. 문제가 발생했을 때 팀원들과 함께 논의하고 해결책을 찾아내는 과정에서 자신감을 얻고 이러한 경험으로 성취감을 크게 느낄 수 있었으며, 팀의 협업과 창의성을 향상시키는 데 도움이 되었습니다.",
      technology:
        "TypeScript, Node.js, Express, Next.js, MariaDB, React, Babel, JsonWebToken, TailWindCSS ",
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
          <p>{selectedProjectInfo.number}</p>
          <h1>{project}</h1>
        </div>
        {/* <h4>프로젝트 설명</h4> */}
        <p>{selectedProjectInfo.description}</p>
        {/* <br /> */}
        <h4>STACK</h4>
        <p>{selectedProjectInfo.technology}</p>

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
              <img src="/Notion.png" alt="link" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
