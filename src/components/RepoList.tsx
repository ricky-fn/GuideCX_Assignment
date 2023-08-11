import { useGitHubRepoSearch } from "@/hooks";
import { motion } from "framer-motion";
import Image from "next/image";

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
      initial="hidden"
      animate="show"
      className="w-full divide-y divide-gray-200 dark:divide-gray-700"
    >
      {
        data && data.items.map((repo, index) => (
          <motion.li
            key={repo.id}
            variants={stat}
            initial="hidden"
            animate="show"
            transition={{ delay: index * 0.1 }}
            className="py-3 sm:py-4">

            {/* <h2 className="font-bold">{repo.name}</h2>
            <a href={repo.html_url} target="_blank" className="underline">{repo.html_url}</a>
            <p>{repo.owner?.login}</p> */}
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                <Image className="w-8 h-8 rounded-full" src={repo.owner!.avatar_url} alt={repo.owner!.login} width={40} height={40} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                  {repo.name}
                </p>
                <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                  {repo.owner?.name || repo.owner?.login}
                </p>
              </div>
              <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                {repo.forks_count} forks
              </div>
            </div>
          </motion.li>
        ))
      }
    </motion.ul>
  )
}