"use client";

import { useState } from "react";
import SearchBar from "./SearchBar";
import PromptCard from "./PromptCard";
import type { Prompt } from "./lib/prompts";

type PromptBrowserProps = {
  prompts: Prompt[];
};

export default function PromptBrowser({
  prompts,
}: PromptBrowserProps) {
  const [search, setSearch] = useState("");

  const filteredPrompts = prompts.filter((prompt) => {
    const searchTerm = search.toLowerCase();

    return (
      prompt.title.toLowerCase().includes(searchTerm) ||
      prompt.description.toLowerCase().includes(searchTerm) ||
      prompt.category.toLowerCase().includes(searchTerm)
    );
  });

  return (
    <>
      <div className="mt-10 max-w-xl">
        <SearchBar onSearch={setSearch} />
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {filteredPrompts.map((prompt) => (
          <PromptCard
            key={prompt.id}
            prompt={prompt}
          />
        ))}
      </div>

      {filteredPrompts.length === 0 && (
        <p className="mt-10 text-slate-400">
          No prompts found.
        </p>
      )}
    </>
  );
}
