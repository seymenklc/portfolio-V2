import { motion } from "framer-motion";
import { transition } from "@/utils/iconConstants";

export default function MoonIcon() {
   const variants = {
      initial: { scale: 0.6, rotate: 90 },
      animate: { scale: 1, rotate: 0, transition },
      whileTap: { scale: 0.95, rotate: 15 }
   };

   return (
      <motion.svg width="1em" height="1em" viewBox="0 0 24 24">
         <motion.path
            animate="animate"
            initial="initial"
            whileTap="whileTap"
            variants={variants}
            fill="currentColor"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9.353 3C5.849 4.408 3 7.463 3 11.47A9.53 9.53 0 0 0 12.53 21c4.007 0 7.062-2.849 8.47-6.353C8.17 17.065 8.14 8.14 9.353 3z"
         />
      </motion.svg>
   );
}