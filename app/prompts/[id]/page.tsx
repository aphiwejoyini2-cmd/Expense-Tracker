import { notFound } from "next/navigation";
import Link from "next/link";
import { prompts } from "@/lib/prompts";

type PromptPageProps = {
  params: Proms<{
    id: string;
  }>;
};

export default async function PromptPage({
  params,
}: PromptPageProps) {
  const { id } = await params;

  const prompt = prompts.find((prompt) => prompt.id === id);

  if (!prompt) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto max-w-4xl px-6 py-20">
        <Link
          href="/"
          className="text-sm text-blue-400 hover:text-blue-300"
        >
          ← Back to prompts
        </Link>

        <div className="mt-10">
          <span className="text-sm font-medium text-blue-400">
            {prompt.category}
          </span>

          <h1 className="mt-3 text-4xl font-bold">
            {prompt.title}
          </h1>

          <p className="mt-4 text-lg text-slate-400">
            {prompt.description}
          </p>

          <div className="mt-10 rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <h2 className="text-lg font-semibold">
              Prompt
            </h2>

            <p className="mt-4 whitespace-pre-wrap text-slate-300">
              {prompt.content}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
