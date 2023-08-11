import useSWR from 'swr';
import { useEffect, useState } from 'react';
import useDebounce from './useDebounce';
import { Octokit } from "octokit";

interface Repo {
  id: number;
  name: string;
  // Add other properties as needed
}

const octokit = new Octokit({
  auth: process.env.NEXT_PUBLIC_GITHUB_ACCESS_KEY,
});

export const fetcher = async (url: string) => {
  const response = await octokit.request('GET ' + url, {
    headers: {
      'X-GitHub-Api-Version': '2022-11-28'
    }
  });
  return response.data;
};

interface GitHubRepoSearchResult {
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
  data: Repo[] | undefined;
  error: any;
  isLoading: boolean;
}

export default function useGitHubRepoSearch(): GitHubRepoSearchResult {
  const [searchQuery, setSearchQuery] = useState('');
  const debouncedSearchQuery = useDebounce<string>(searchQuery, 300); // Debounce with 300ms delay

  const searchUrl = `/search/repositories?q=${debouncedSearchQuery}`;
  const { data, error } = useSWR<Repo[] | undefined>(debouncedSearchQuery ? searchUrl : null, fetcher);

  return {
    searchQuery,
    setSearchQuery,
    data,
    error,
    isLoading: !data && !error,
  };
}