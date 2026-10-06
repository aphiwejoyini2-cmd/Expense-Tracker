import Link from "next/link";
import type { Prompt } from "./lib/prompts";

type PromptCardProps = {
  prompt: Prompt;
};

export default function PromptCard({ prompt }: PromptCardProps) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
      <span className="text-sm font-medium text-blue-400">
        {prompt.category}
      </span>

      <h2 className="mt-3 text-xl font-semibold">
        {prompt.title}
      </h2>

      <p className="mt-3 text-slate-400">
        {prompt.description}
      </p>

      <Link
        href={`/prompts/${prompt.id}`}
        className="mt-6 inline-block rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium hover:bg-blue-500"
      >
        View Prompt
      </Link>
    </div>
  );
}
