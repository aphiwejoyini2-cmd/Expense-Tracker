"use client";

import { useState } from "react";

type SearchBarProps = {
  onSearch: (value: string) => void;
};

export default function SearchBar({
  onSearch,
}: SearchBarProps) {
  const [search, setSearch] = useState("");

  function handleChange(value: string) {
    setSearch(value);
    onSearch(value);
  }

  return (
    <input
      type="text"
      value={search}
      onChange={(event) => handleChange(event.target.value)}
      placeholder="Search prompts..."
      className="w-full rounded-xl border border-slate-800 bg-slate-900 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-blue-500"
    />
  );
}
