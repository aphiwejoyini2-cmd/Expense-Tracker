import PromptBrowser from "@/expense-tracker/components/PromptBrowser";
import { prompts } from "@/lib/prompts";


export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="max-w-2xl">
          <p className="mb-4 text-sm font-semibold text-blue-400">
            PROMPTHUB
          </p>

          <h1 className="text-5xl font-bold tracking-tight">
            Find the right prompt for your next idea.
          </h1>

          <p className="mt-6 text-lg text-slate-400">
            A collection of useful AI prompts for coding,
            writing, productivity and learning.
          </p>
        </div>

        <PromptBrowser prompts={prompts} />
      </section>
    </main>
  );
}
