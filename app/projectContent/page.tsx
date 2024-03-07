import React from "react";
import styles from "@/app/styles/main.module.scss";

interface ProjectDetailsProps {
  project: string | null;
}

const ProjectDetails: React.FC<ProjectDetailsProps> = ({ project }) => {
  const projectContent: {
    [key: string]: {
      description: string;
      link: string;
      github: string;
      review: string;
      technology: string;
    };
  } = {
    BOARD: {
      description:
        "Express와 MongoDB를 사용하여 만든 프로젝트입니다. 사용자는 회원가입, 로그인, 글 작성, 댓글 작성 기능을 이용할 수 있습니다. 게시판을 만들게 된 이유는 기술 학습과 성장을 목표로 삼았습니다. 프로젝트를 통해 새로운 개념과 기술을 익히고, 실전 경험을 쌓으며 기술적으로 발전하기 위해 이 게시판을 개발하게 되었습니다.",
      link: "투어 맵 서비스의 배포 링크",
      github: "https://github.com/seunghee1108/Board",
      review:
        "게시판 프로젝트를 진행하면서 MongoDB에 대한 이해를 높일 수 있었습니다. MongoDB를 선택한 이유는 NoSQL의 유연성과 스키마의 제한이 없는 특성때문입니다. 이를 통해 로그인 정보나 글 작성과 같은 데이터를 효율적으로 저장하고 빠르게 데이터를 처리할 수 있었습니다. 사용자가 글을 작성하고 댓글을 나눌 수 있는 공간을 만들어가는 과정이 특히 흥미로웠습니다. 또한, 추가적인 기능을 도입하고 사용자 경험을 향상시키며 프로젝트를 발전해 나갈 것입니다.",
      technology: "JavaScript, Node.js, Express, MongoDB, EJS, CSS",
    },
    TOURMAPS: {
      description:
        "공공데이터포털에서 제공하는 API 엔드포인트를 활용하여 제작한 프로젝트입니다. 여행을 즐기는 사람으로서 여행 계획을 세우는 과정에서 어려움을 겪었습니다. 어느 지역을 방문해야 하는지, 어떤 코스를 따라야 하는지 결정하는 것이 쉽지 않았습니다. 이런 불편함을 해결하고자 여행 계획을 더 간편하고 편리하게 세울 수 있는 웹서비스를 개발하게 되었습니다.",
      link: "두 번째 프로젝트의 배포 링크",
      github: "https://github.com/seunghee1108/tourmaps",
      review:
        "프로젝트를 진행하면서 공공데이터포털의 API를 활용한 경험은 매우 유익했습니다. 데이터를 가져오고 활용하는 과정에서 편리함을 느꼈고, 이를 통해 사용자에게 더 나은 서비스를 제공할 수 있게 되었습니다. 사용자들이 각자의 취향과 관심사에 맞춰 최적의 여행 계획을 도와줄 수 있어서 보람 만족함을 느낍니다.  마지막으로, 프로젝트를 통해 새로운 기술을 배우고 활용하는 경험은 큰 성취감을 안겨주었습니다.",
      technology: "JavaScript, TypeScript, React, Next.js, AWS, SCSS",
    },
    "ERP-PROJECT": {
      description:
        "관리자가 웹 사이트를 통해 사용자 및 상품 정보를 관리하고 소비자와 소통할 수 있는 환경을 조성하고 사용자가 쇼핑몰 페이지를 불편 없이 이용할 수 있는 편의성을 제공하기 위한 페이지를 구현하고자 했습니다.",
      link: "세 번째 프로젝트의 배포 링크",
      github: "세 번째 프로젝트의 깃허브 링크",
      review:
        "팀 프로젝트를 시작할 때에는 Git 충돌과 Branch 관리 등에서 어려움을 겪었지만, 서로의 부족한 부분을 논의하고 경험을 쌓아가며 문제를 극복할 수 있었습니다. 이를 통해 팀 작업 시 해야 할 방향들을 명확히 할 수 있었습니다. 기술적 한계를 극복하기 위해 팀 회의와 지식 공유를 통해 점차 성장해 나갈 수 있었습니다. 결과적으로 Next.js와 데이터베이스까지 코드 작업을 끌어올려서 프로젝트를 마무리할 수 있었습니다. 문제가 발생했을 때 팀원들과 함께 논의하고 해결책을 찾아내는 과정에서 자신감을 얻고 이러한 경험으로 성취감을 크게 느낄 수 있었으며, 팀의 협업과 창의성을 향상시키는 데 도움이 되었습니다.",
      technology:
        "TypeScript, Node.js, Express, Next.js, MariaDB, React, Babel, JsonWebToken, TailWindCSS ",
    },
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
          <br />
          <h4>배포 링크</h4>
          <p>
            <a
              href={selectedProjectInfo.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {selectedProjectInfo.link}
            </a>
          </p>

          <h4>깃허브 링크</h4>
          <p>
            <a
              href={selectedProjectInfo.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              {selectedProjectInfo.github}
            </a>
          </p>
        </div>
      </div>
      <div className={styles.contentBox}>
        <div>
          <h4>프로젝트 설명</h4>
          <p>{selectedProjectInfo.description}</p>
          <br />
          <h4>후기 및 소감</h4>
          <p>{selectedProjectInfo.review}</p>
          <br />
          <h4>기술 스택</h4>
          <p>{selectedProjectInfo.technology}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
