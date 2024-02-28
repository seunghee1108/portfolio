export interface SkillData {
  src: string;
  alt: string;
  description: string;
}

const skillsData: SkillData[] = [
  { src: "/js.png", alt: "JavaScript", description: "JavaScript에 대한 설명" },
  { src: "/ts.png", alt: "TypeScript", description: "TypeScript에 대한 설명" },
  { src: "/mariadb.png", alt: "MariaDB", description: "MariaDB 대한 설명" },
  { src: "/mongodb.png", alt: "MongoDB에", description: "MongoDB에 대한 설명" },
  { src: "/aws2.png", alt: "AWS", description: "AWS에 대한 설명" },
  { src: "/html.png", alt: "HTML", description: "HTML 대한 설명" },
  { src: "/css.png", alt: "CSS", description: "CSS 대한 설명" },
  { src: "/react.png", alt: "React", description: "React 대한 설명" },
  { src: "/tailwind.png", alt: "Tailwind", description: "Tailwind 대한 설명" },
  { src: "/nextjs.svg", alt: "Next.js", description: "Next.js 대한 설명" },
  { src: "/python.png", alt: "Python", description: "Python 대한 설명" },
  { src: "/notion.svg", alt: "Notion", description: "Notion 대한 설명" },
  { src: "/slack2.png", alt: "Slack", description: "Slack 대한 설명" },
  { src: "/figma.png", alt: "Figma", description: "Figma 대한 설명" },
  { src: "/vscode.png", alt: "VSCode", description: "VSCode 대한 설명" },
];

export default skillsData;
