export default function Placeholder() {
  return (
    <ul className="w-full">
      {
        Array.from(Array(6).keys()).map((_, i) => (
          <li
            key={i}
            className="w-full border-b-2 border-neutral-100 border-opacity-100 py-4 dark:border-opacity-50">
            <h2
              className="w-80 min-h-[1em] mb-1 cursor-wait bg-current align-middle text-base text-neutral-700 opacity-50 dark:text-neutral-50"
            ></h2>
            <p
              className="w-6/12 min-h-[1em] mb-1 cursor-wait bg-current align-middle text-base text-neutral-700 opacity-50 dark:text-neutral-50"
            ></p>
            <p
              className="w-40 min-h-[1em] cursor-wait bg-current align-middle text-base text-neutral-700 opacity-50 dark:text-neutral-50"
            ></p>
          </li>
        ))
      }
    </ul>
  )
}