export type Prompt = {
  id: string;
  title: string;
  description: string;
  category: string;
  content: string;
};

export const prompts: Prompt[] = [
  {
    id: "code-reviewer",
    title: "Code Reviewer",
    description: "Review and improve my code.",
    category: "Coding",
    content:
      "Review the following code. Identify bugs, security issues, performance problems, and opportunities for improvement. Explain each issue clearly and provide an improved version.",
  },
  {
    id: "blog-writer",
    title: "Blog Writer",
    description: "Turn an idea into an engaging blog post.",
    category: "Writing",
    content:
      "Write an engaging blog post about the following topic. Use a clear introduction, useful sections, practical examples, and a strong conclusion.",
  },
  {
    id: "study-assistant",
    title: "Study Assistant",
    description: "Explain difficult topics in simple language.",
    category: "Education",
    content:
      "Explain the following topic as if you were teaching a beginner. Start with the basic concept, then provide examples and finish with a short summary.",
  },
];
