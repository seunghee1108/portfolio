export interface SkillData {
  src: string;
  alt: string;
}

const skillsData: SkillData[] = [
  { src: "/JavaScript.png", alt: "JavaScript"},
  { src: "/TypeScript.png", alt: "TypeScript"},
  { src: "/MariaDB.png", alt: "MariaDB" },
  { src: "/MongoDB.png", alt: "MongoDB"},
  { src: "/AWS.png", alt: "AWS" },
  { src: "/HTML.png", alt: "HTML" },
  { src: "/CSS.png", alt: "CSS"},
  { src: "/React.png", alt: "React" },
  { src: "/TailwindCSS.png", alt: "Tailwind " },
  { src: "/Next.js.png", alt: "Next.js" },
  { src: "/Notion.png", alt: "Notion" },
  { src: "/Slack.png", alt: "Slack" },
  { src: "/Figma.png", alt:  "Figma"},
  { src: "/vscode.png", alt: "VSCode" },
  { src: "/Node.js.png", alt: "Node.js" },
  { src: "/GitHub.png", alt: "Github" },
];
const backendSkills = skillsData.filter(skill =>
  skill.alt.toLowerCase().includes("node.js") ||
  skill.alt.toLowerCase().includes("javascript") ||
  skill.alt.toLowerCase().includes("typescript") ||
  skill.alt.toLowerCase().includes("aws")
);

// 프론트엔드 스킬 필터링
const frontendSkills = skillsData.filter(skill =>
  skill.alt.toLowerCase().includes("html") ||
  skill.alt.toLowerCase().includes("react") ||
  skill.alt.toLowerCase().includes("next.js") ||
  skill.alt.toLowerCase().includes("css") ||
  skill.alt.toLowerCase().includes("tailwind")
);

// 도구 스킬 필터링
const toolSkills = skillsData.filter(skill =>
  skill.alt.toLowerCase().includes("github") ||
  skill.alt.toLowerCase().includes("vscode") ||
  skill.alt.toLowerCase().includes("notion") ||
  skill.alt.toLowerCase().includes("slack") ||
  skill.alt.toLowerCase().includes("figma")
);

export { backendSkills, frontendSkills, toolSkills };
