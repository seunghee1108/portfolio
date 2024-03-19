"use client"
export interface SkillData {
  src: string;
  alt: string;
}

const skillsData: SkillData[] = [
  { src: "/image/JavaScript.png", alt: "JavaScript"},
  { src: "/image/TypeScript.png", alt: "TypeScript"},
  { src: "/image/MariaDB.png", alt: "MariaDB" },
  { src: "/image/MongoDB.png", alt: "MongoDB"},
  { src: "/image/mysql.png", alt: "mysql"},
  { src: "/image/AWS.png", alt: "AWS" },
  { src: "/image/HTML.png", alt: "HTML" },
  { src: "/image/CSS.png", alt: "CSS"},
  { src: "/image/React.png", alt: "React" },
  { src: "/image/TailwindCSS.png", alt: "Tailwind" },
  { src: "/image/Next.js.png", alt: "Next.js" },
  { src: "/image/Notion.png", alt: "Notion" },
  { src: "/image/Slack.png", alt: "Slack" },
  { src: "/image/Figma.png", alt:  "Figma"},
  { src: "/image/VSCode.png", alt: "VSCode" },
  { src: "/image/Node.js.png", alt: "Node.js" },
  { src: "/image/GitHub.png", alt: "Github" },
];
export function getBackendSkills(): SkillData[] {
  const backendSkills: string[] = [
    "Node.js",
    "JavaScript",
    "TypeScript",
    "AWS",
    "MariaDB",
    "MongoDB",
    "mysql"
  ].flatMap(skill =>
    skillsData.filter(data => data.alt === skill).map(data => data.src) // src만 추출하여 문자열 배열 생성
  );
  return backendSkills.map(src => ({ src, alt: "" })); // alt는 빈 문자열로 설정
}

export function getFrontendSkills(): SkillData[] {
  const frontendSkills: string[] = [
    "HTML",
    "CSS",
    "Tailwind",
    "React",
    "Next.js"
  ].flatMap(skill =>
    skillsData.filter(data => data.alt === skill).map(data => data.src) // src만 추출하여 문자열 배열 생성
  );
  return frontendSkills.map(src => ({ src, alt: "" })); // alt는 빈 문자열로 설정
}

export function getToolSkills(): SkillData[] {
  const toolSkills: string[] = [
    "Github",
    "VSCode",
    "Notion",
    "Slack",
    "Figma"
  ].flatMap(skill =>
    skillsData.filter(data => data.alt === skill).map(data => data.src) // src만 추출하여 문자열 배열 생성
  );
  return toolSkills.map(src => ({ src, alt: "" })); // alt는 빈 문자열로 설정
}