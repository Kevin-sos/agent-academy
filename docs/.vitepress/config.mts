import { defineConfig } from "vitepress";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { mermaidPlugin } from "./plugins/vitepress-mermaid";
import { missionsPlugin } from "./plugins/missions";
import { previewBannerPlugin } from "./plugins/preview-banner";
import { downloadFilesPlugin } from "./plugins/download-files";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const docsDir = path.resolve(__dirname, "..");

export default defineConfig({
  title: "Agent Academy",
  base: "/agent-academy/",
  cleanUrls: true,
  srcExclude: ["intelligence-officer/**/assets/**/*.md"],
  ignoreDeadLinks: [/\.docx$/],
  head: [
    ["link", { rel: "icon", href: "/agent-academy/logo.png" }],
    [
      "script",
      { text: "text/javascript" },
      `(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window, document, "clarity", "script", "u32wbf0qvv");`,
    ],
  ],
  description:
    "Welcome to Copilot Studio Agent Academy. Curated lessons on getting started building agents with Copilot Studio.",
  themeConfig: {
    logo: "/logo.png",
    nav: [
      {
        text: "Home",
        items: [
          { text: "Home", link: "/" },
          { text: "Our Team", link: "/our-team/" },
          { text: "Recent Changes", link: "/recent-changes/" },
          { text: "Videos", link: "/videos/" },
        ],
      },
      {
        text: "Courses",
        items: [
          { text: "Recruit", link: "/recruit-nextgen/" },
          { text: "Operative", link: "/operative-nextgen/" },
          { text: "Commander (Coming Soon)", link: "/commander/" },
        ],
      },
      {
        text: "Labs",
        items: [
          { text: "Special Ops", link: "/special-ops/" },
          { text: "Cowork Collective", link: "/cowork-collective/" },
        ],
      },
      {
        text: "Events",
        items: [
          { text: "Live Event", link: "/events/live/" },
          { text: "Hackathon", link: "/events/hackathon/" },
          { text: "Workshops", link: "/events/workshops/" },
        ],
      },
    ],
    search: {
      provider: "local",
    },
    sidebar: [
      { text: "Home", link: "/" },
      { text: "Our Team", link: "/our-team/" },
      { text: "Recent Changes", link: "/recent-changes/" },
      { text: "Videos", link: "/videos/" },
      {
        text: "Courses",
        items: [
          {
            text: "Recruit",
            link: "/recruit-nextgen/",
            collapsed: true,
            items: [
              {
                text: "Microsoft Copilot harness",
                link: "/recruit-nextgen/",
                collapsed: true,
                items: [
                  {
                    text: "Course Setup",
                    link: "/recruit-nextgen/00-course-setup/",
                  },
                  {
                    text: "Introduction to Agents",
                    link: "/recruit-nextgen/01-introduction-to-agents/",
                  },
                  {
                    text: "Copilot Studio Fundamentals",
                    link: "/recruit-nextgen/02-copilot-studio-fundamentals/",
                  },
                  {
                    text: "Creating A Solution",
                    link: "/recruit-nextgen/03-creating-a-solution/",
                  },
                  {
                    text: "Build with the Microsoft Copilot Harness",
                    link: "/recruit-nextgen/04-build-a-custom-agent/",
                  },
                  {
                    text: "Add a Tool",
                    link: "/recruit-nextgen/05-add-tools/",
                  },
                  {
                    text: "Add Skills",
                    link: "/recruit-nextgen/06-add-skills/",
                  },
                  {
                    text: "Automate with Workflows",
                    link: "/recruit-nextgen/07-automate-with-workflows/",
                  },
                  {
                    text: "Publish Your Agent",
                    link: "/recruit-nextgen/08-publish-your-agent/",
                  },
                  {
                    text: "Understanding Licensing",
                    link: "/recruit-nextgen/09-understanding-licensing/",
                  },
                  {
                    text: "Course Completion Badge",
                    link: "/recruit-nextgen/course-completion-badges-recruit/",
                  },
                ],
              },
            ],
          },
          {
            text: "Operative",
            link: "/operative-nextgen/",
            collapsed: true,
            items: [
              {
                text: "Microsoft Copilot harness",
                link: "/operative-nextgen/",
                collapsed: true,
                items: [
                  {
                    text: "Establish the Hiring Hub",
                    link: "/operative-nextgen/01-get-started/",
                  },
                  {
                    text: "Instructions, Skills and Dataverse MCP",
                    link: "/operative-nextgen/02-instructions-skills-dataverse-mcp/",
                  },
                  {
                    text: "Add a Connected Interview Agent",
                    link: "/operative-nextgen/03-connected-agent/",
                  },
                  {
                    text: "Model, Response and Safety",
                    link: "/operative-nextgen/04-model-response-and-safety/",
                  },
                  {
                    text: "Resume Intake, Matching and Applications",
                    link: "/operative-nextgen/05-intake-matching-applications/",
                  },
                  {
                    text: "Generate Documents with a Python Skill",
                    link: "/operative-nextgen/06-document-skill/",
                  },
                  {
                    text: "Automate Resume Intake with a Workflow",
                    link: "/operative-nextgen/07-workflow-trigger/",
                  },
                  {
                    text: "Add Agents to a Workflow",
                    link: "/operative-nextgen/08-workflow-agents/",
                  },
                  {
                    text: "Human Oversight and Alternative Flows",
                    link: "/operative-nextgen/09-human-oversight/",
                  },
                  {
                    text: "Schedule Interviews with Work IQ",
                    link: "/operative-nextgen/10-work-iq-scheduling/",
                  },
                  {
                    text: "Evaluate, Publish, and Monitor Your Agent",
                    link: "/operative-nextgen/11-publish-and-monitor/",
                  },
                  {
                    text: "Course Completion Badge",
                    link: "/operative-nextgen/course-completion-badges-operative/",
                  },
                ],
              },
            ],
          },
          { text: "Commander (Coming Soon)", link: "/commander/" },
        ],
      },
      {
        text: "Labs",
        items: [
          {
            text: "Special Ops",
            link: "/special-ops/",
            collapsed: true,
            items: [
              {
                text: "Marketing Agent with Skills",
                link: "/special-ops/ghostwriter/",
              },
              {
                text: "MCS + Docusign MCP",
                link: "/special-ops/docusign-mcp/",
              },
              { text: "MCS ❤️ MCP", link: "/special-ops/mcs-mcp/" },
              {
                text: "Microsoft Learn Docs MCP",
                link: "/special-ops/ms-learn-mcp/",
              },
              {
                text: "Power Platform CLI MCP",
                link: "/special-ops/pac-cli-mcp/",
              },
              {
                text: "RAG with Azure AI Search",
                link: "/special-ops/azure-ai-search-rag/",
              },
              {
                text: "Secure MCP with OAuth 2.0",
                link: "/special-ops/mcp-oauth/",
              },
              {
                text: "YAML Specialist",
                link: "/special-ops/yaml-specialist/",
              },
            ],
          },
          {
            text: "Cowork Collective",
            link: "/cowork-collective/",
            collapsed: true,
            items: [
              { text: "Badge Check", link: "/cowork-collective/badge-check/" },
              {
                text: "Out of Office Vacation Handoff",
                link: "/cowork-collective/out-of-office-prep/",
              },
              {
                text: "The Compliance Packet",
                link: "/cowork-collective/compliance-packet/",
              },
            ],
          },
        ],
      },
      {
        text: "Events",
        items: [
          { text: "Live Event", link: "/events/live/" },
          { text: "Hackathon", link: "/events/hackathon/" },
          { text: "Workshops", link: "/events/workshops/" },
        ],
      },
    ],
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/microsoft/agent-academy/",
      },
    ],
  },
  markdown: {
    config: (md) => {
      md.use(mermaidPlugin);
      md.use(previewBannerPlugin);
    },
  },
  vite: {
    plugins: [missionsPlugin(docsDir), downloadFilesPlugin(docsDir)],
  },
});
