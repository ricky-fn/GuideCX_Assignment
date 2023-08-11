import { motion } from "framer-motion";

export default function Placeholder() {
  return (
    <motion.ul
      initial={{ opacity: 0 }} // Set initial opacity to 0
      animate={{ opacity: 1 }} // Animate opacity to 1
      className="w-full"
    >
      {Array.from(Array(6).keys()).map((_, i) => (
        <motion.li
          key={i}
          initial={{ opacity: 0 }} // Set initial opacity of each item to 0
          animate={{ opacity: 1 }} // Animate opacity of each item to 1
          transition={{ delay: i * 0.1 }} // Delay animation for each item
          className="w-full border-b-2 border-neutral-100 border-opacity-100 py-4 dark:border-opacity-50"
        >
          <motion.h2
            className="w-80 min-h-[1em] mb-1 cursor-wait bg-current align-middle text-base text-neutral-700 opacity-50 dark:text-neutral-50"
          ></motion.h2>
          <motion.p
            className="w-6/12 min-h-[1em] mb-1 cursor-wait bg-current align-middle text-base text-neutral-700 opacity-50 dark:text-neutral-50"
          ></motion.p>
          <motion.p
            className="w-40 min-h-[1em] cursor-wait bg-current align-middle text-base text-neutral-700 opacity-50 dark:text-neutral-50"
          ></motion.p>
        </motion.li>
      ))}
    </motion.ul>
  );
}