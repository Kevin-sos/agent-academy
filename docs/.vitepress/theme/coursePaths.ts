export type CoursePath = {
  label: string;
  description: string;
  /** Landing page for the path. */
  home: string;
  /** URL prefix shared by every page in the path. */
  root: string;
  /** Short selling points shown on the chooser cards. */
  highlights: string[];
  /** Optional ribbon text shown on the chooser cards. */
  tag?: string;
};

export type CoursePathGroup = {
  course: string;
  /** Chooser page that sits above the paths. */
  hub: string;
  paths: CoursePath[];
};

export const coursePathGroups: CoursePathGroup[] = [
  {
    course: "Recruit",
    hub: "/recruit-nextgen/",
    paths: [
      {
        label: "Microsoft Copilot harness",
        description:
          "Guide agent behavior with instructions, skills, tools, and workflows",
        home: "/recruit-nextgen/",
        root: "/recruit-nextgen/",
        tag: "Instruction-driven",
        highlights: [
          "10 missions",
          "Instructions, Skills, Tools, and Workflows",
          "Best for reasoning-heavy, multi-step work",
        ],
      },
    ],
  },
  {
    course: "Operative",
    hub: "/operative-nextgen/",
    paths: [
      {
        label: "Microsoft Copilot harness",
        description:
          "Build the hiring system with instructions, skills, tools, and workflows",
        home: "/operative-nextgen/",
        root: "/operative-nextgen/",
        tag: "Instruction-driven",
        highlights: [
          "12 missions",
          "Dataverse MCP, connected agents, and Python skills",
          "Best for reasoning-heavy, multi-step hiring workflows",
        ],
      },
    ],
  },
];

export function findGroupForPath(relativePath: string) {
  return coursePathGroups.find(
    (group) =>
      relativePath === group.hub ||
      group.paths.some((path) => relativePath.startsWith(path.root))
  );
}

export function isPathActive(
  group: CoursePathGroup,
  path: CoursePath,
  relativePath: string
) {
  // The course landing page should not count as an active nested path.
  if (relativePath === group.hub) return false;
  return relativePath.startsWith(path.root);
}
