import { useGitHubRepoSearch } from "@/hooks";

interface IRepoListProps {
  searchQuery: string
}

export default function RepoList({ searchQuery }: IRepoListProps) {
  const { data } = useGitHubRepoSearch(searchQuery);

  if (data && data.items.length === 0) {
    return <p>No results found</p>
  }

  return (
    <ul className="w-full">
      {
        data && data.items.map((repo) => (
          <li
            key={repo.id}
            className="w-full border-b-2 border-neutral-100 border-opacity-100 py-4 dark:border-opacity-50">
            <h2 className="font-bold">{repo.name}</h2>
            <a href={repo.html_url} target="_blank" className="underline">{repo.html_url}</a>
            <p>{repo.owner?.login}</p>
          </li>
        ))
      }
    </ul>
  )
}