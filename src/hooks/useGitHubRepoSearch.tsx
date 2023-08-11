import useSWR from 'swr';
import useDebounce from './useDebounce';
import { Octokit } from "octokit";
import { Endpoints } from '@octokit/types';

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

type IGitHubRepos = Endpoints['GET /search/repositories']['response']['data'];

interface IGitHubRepoSearchResult {
  data: IGitHubRepos | undefined;
  error: any;
  isLoading: boolean;
}

export function useGitHubRepoSearch(searchQuery: string): IGitHubRepoSearchResult {
  const debouncedSearchQuery = useDebounce(searchQuery, 300); // Debounce with 300ms delay

  const searchUrl = `/search/repositories?q=${debouncedSearchQuery}`;
  const { data, error } = useSWR<IGitHubRepos>(
    debouncedSearchQuery ? searchUrl : null,
    fetcher,
    { suspense: true }
  );

  return {
    data,
    error,
    isLoading: !data && !error,
  };
}