"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

const SearchBox = () => {
  const [search, setSearch] = useState("");
  const [login, setLogin] = useState(true);
  const router = useRouter();

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!search) {
      return;
    }
    router.push(`/search/${search}`);
    setSearch("")
  };

  return (
    <form
      className="flex max-w-6xl mx-auto justify-between items-center px-5"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        placeholder="Search keywords"
        value={search}
        onChange={handleChange}
        className="w-full h-14  rounded-sm placeholder-gray-500 outline-none bg-transparent flex-1"
      />
      <button
        type="submit"
        disabled={!search}
        className="text-amber-600 disabled:text-red-400"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBox;
