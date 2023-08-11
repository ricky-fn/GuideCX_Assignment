import { useGitHubRepoSearch } from "@/hooks";
import { motion } from "framer-motion";

interface IRepoListProps {
  searchQuery: string
}

let parent = {
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

let stat = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

export default function RepoList({ searchQuery }: IRepoListProps) {
  const { data } = useGitHubRepoSearch(searchQuery);

  if (data && data.items.length === 0) {
    return <p>No results found</p>
  }

  return (
    <motion.ul
      variants={parent}
      initial="show"
      animate="show"
      className="w-full"
    >
      {
        data && data.items.map((repo, index) => (
          <motion.li
            key={repo.id}
            variants={stat}
            initial="hidden"
            animate="show"
            transition={{ delay: index * 0.1 }}
            className="w-full border-b-2 border-neutral-100 border-opacity-100 py-4 dark:border-opacity-50">
            <h2 className="font-bold">{repo.name}</h2>
            <a href={repo.html_url} target="_blank" className="underline">{repo.html_url}</a>
            <p>{repo.owner?.login}</p>
          </motion.li>
        ))
      }
    </motion.ul>
  )
}