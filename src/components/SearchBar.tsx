'use client';

interface ISearchBarProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode
}

export default function SearchBar(props: ISearchBarProps) {

  return (
    <div className="relative w-full mb-4">
      <input
        type="text"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Search GitHub Repositories"
        {...props}
      />
      <button type="button" className="absolute inset-y-0 right-0 flex items-center pr-3">
        {props.icon}
      </button>
    </div>
  )
}