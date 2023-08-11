import { useGitHubRepoSearch } from "@/hooks";

interface IRepoListProps {
  searchQuery: string
}

export default function RepoList({ searchQuery }: IRepoListProps) {
  const { data, isLoading, error } = useGitHubRepoSearch(searchQuery);

  if (isLoading) return <p>Loading...</p>
  return (
    <ul className="w-full">
      {
        data!.items.map((repo) => (
          <li
            key={repo.id}
            className="w-full border-b-2 border-neutral-100 border-opacity-100 py-4 dark:border-opacity-50">
            {repo.name}
          </li>
        ))
      }
    </ul>
  )
}