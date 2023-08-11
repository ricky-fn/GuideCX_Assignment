import { motion } from "framer-motion";

export default function Placeholder() {
  return (
    <motion.ul
      initial={{ opacity: 0 }} // Set initial opacity to 0
      animate={{ opacity: 1 }} // Animate opacity to 1
      className="w-full divide-y divide-gray-200 dark:divide-gray-700"
    >
      {Array.from(Array(6).keys()).map((_, i) => (
        <motion.li
          key={i}
          initial={{ opacity: 0 }} // Set initial opacity of each item to 0
          animate={{ opacity: 1 }} // Animate opacity of each item to 1
          transition={{ delay: i * 0.1 }} // Delay animation for each item
          className="py-4 sm:py-5"
        >
          <div className="flex items-center space-x-4">
            <div className="flex-shrink-0">
              <div className="w-8 h-8 rounded-full bg-gray-300 animate-pulse"></div>
            </div>
            <div className="flex-1 min-w-0">
              <div className="w-3/4 h-4 bg-gray-300 animate-pulse"></div>
              <div className="w-2/3 h-3 mt-1 bg-gray-300 animate-pulse"></div>
            </div>
            <div className="w-20 h-6 bg-gray-300 animate-pulse"></div>
          </div>
        </motion.li>
      ))}
    </motion.ul>
  );
}
