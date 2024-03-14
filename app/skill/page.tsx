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
const backendSkills = [
  "Node.js",
  "JavaScript",
  "TypeScript",
  "AWS"
].flatMap(skill =>
  skillsData.filter(data => data.alt === skill)
);

const frontendSkills = [
  "HTML",
  "CSS",
  "React",
  "Tailwind CSS",
  "Next.js"
].flatMap(skill =>
  skillsData.filter(data => data.alt === skill)
);

const toolSkills = [
  "GitHub",
  "VSCode",
  "Notion",
  "Slack",
  "Figma"
].flatMap(skill =>
  skillsData.filter(data => data.alt === skill)
);


export { backendSkills, frontendSkills, toolSkills };
