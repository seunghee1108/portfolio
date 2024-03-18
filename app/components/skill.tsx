export interface SkillData {
  src: string;
  alt: string;
}

const skillsData: SkillData[] = [
  { src: "/image/JavaScript.png", alt: "JavaScript"},
  { src: "/image/TypeScript.png", alt: "TypeScript"},
  { src: "/image/MariaDB.png", alt: "MariaDB" },
  { src: "/image/MongoDB.png", alt: "MongoDB"},
  { src: "/image/AWS.png", alt: "AWS" },
  { src: "/image/HTML.png", alt: "HTML" },
  { src: "/image/CSS.png", alt: "CSS"},
  { src: "/image/React.png", alt: "React" },
  { src: "/image/TailwindCSS.png", alt: "Tailwind " },
  { src: "/image/Next.js.png", alt: "Next.js" },
  { src: "/image/Notion.png", alt: "Notion" },
  { src: "/image/Slack.png", alt: "Slack" },
  { src: "/image/Figma.png", alt:  "Figma"},
  { src: "/image/vscode.png", alt: "VSCode" },
  { src: "/image/Node.js.png", alt: "Node.js" },
  { src: "/image/GitHub.png", alt: "Github" },
];
export function getBackendSkills(): SkillData[] {
  const backendSkills: SkillData[] = [
    "Node.js",
    "JavaScript",
    "TypeScript",
    "AWS"
  ].flatMap(skill =>
    skillsData.filter(data => data.alt === skill)
  );
  return backendSkills;
}

export function getFrontendSkills(): SkillData[] {
  const frontendSkills: SkillData[] = [
    "HTML",
    "CSS",
    "React",
    "Tailwind CSS",
    "Next.js"
  ].flatMap(skill =>
    skillsData.filter(data => data.alt === skill)
  );
  return frontendSkills;
}

export function getToolSkills(): SkillData[] {
  const toolSkills: SkillData[] = [
    "GitHub",
    "VSCode",
    "Notion",
    "Slack",
    "Figma"
  ].flatMap(skill =>
    skillsData.filter(data => data.alt === skill)
  );
  return toolSkills;
}
