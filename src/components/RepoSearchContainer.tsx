'use client';
import SearchBar from "@/components/SearchBar";
import RepoList from "@/components/RepoList";
import { Suspense, useState } from "react";
import Placeholder from "@/components/Placeholder";

export default function RepoSearchContainer() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <>
      <SearchBar
        onChange={handleSearch}
        value={searchQuery}
        placeholder="Search GitHub Repositories Here"
        icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-5 w-5">
            <path
              fillRule="evenodd"
              d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
              clipRule="evenodd" />
          </svg>
        }
      />
      {/* <Placeholder /> */}
      <Suspense fallback={<Placeholder />}>
        <RepoList searchQuery={searchQuery} />
      </Suspense>
    </>
  )
}