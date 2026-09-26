
import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";

interface InfiniteScrollLoaderProps {
  isLoading: boolean;
  hasNextPage: boolean;
}

const InfiniteScrollLoader = ({ isLoading, hasNextPage }: InfiniteScrollLoaderProps) => {
  if (!hasNextPage && !isLoading) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center py-8"
      >
        <p className="text-slate-400">No more items to load</p>
      </motion.div>
    );
  }

  if (isLoading) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex justify-center items-center py-8"
      >
        <Loader2 className="h-8 w-8 animate-spin text-blue-500 mr-3" />
        <span className="text-slate-300">Loading more items...</span>
      </motion.div>
    );
  }

  return null;
};

export default InfiniteScrollLoader;
