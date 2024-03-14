export interface SkillData {
  src: string;
  alt: string;
  description: string;
}

const skillsData: SkillData[] = [
  { src: "/JavaScript.png", alt: "JavaScript", description: "JavaScript에 대한 설명" },
  { src: "/TypeScript.png", alt: "TypeScript", description: "TypeScript에 대한 설명" },
  { src: "/MariaDB.png", alt: "MariaDB", description: "관계형 데이터베이스 관리 시스템으로 팀 프로젝트 작업을 진행하였습니다." },
  { src: "/MongoDB.png", alt: "MongoDB에", description: "MongoDB에 대한 설명" },
  { src: "/AWS.png", alt: "AWS", description: "EC2를 활용하여 프로젝트를 호스팅 한 경험이 있으며 도메인을 통한 배포 과정도 진행한 적이 있습니다." },
  { src: "/HTML.png", alt: "HTML", description: "HTML 태그 및 구조를 이해하고 웹 문서의 구조를 명확하게 전달 할 수 있습니다." },
  { src: "/CSS.png", alt: "CSS", description: "기본적인 스타일링, 박스 모델, 레이아웃을 작업하며 디자인을 구현할 수 있습니다." },
  { src: "/React.png", alt: "React", description: "프로젝트를 작업하면서 컴포넌트를 작성하고," },
  { src: "/Tailwind CSS.png", alt: "Tailwind", description: "ERP 프로젝트를 진행하면서 클래스 기반의 스타일링을 통해 웹 디자인을 쉽게 구현할 수 있습니다." },
  { src: "/Next.js.png", alt: "Next.js", description: "서버 사이드 렌더링" },
  { src: "/Notion.png", alt: "Notion", description: "Notion 대한 설명" },
  { src: "/Slack.png", alt: "Slack", description: "팀 간의 실시간 커뮤니케이션을 강화하고 협업을 위해 사용했습니다." },
  { src: "/Figma.png", alt: "Figma", description: "사용자 인터페이스(UI) 및 사용자 경험(UX) 디자인 도구로 팀원과 함께 디자인을 만들고 공유하며 작업했습니다." },
  { src: "/vscode.png", alt: "VSCode", description: "VSCode 대한 설명" },
];

export default skillsData;
