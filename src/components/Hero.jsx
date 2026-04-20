import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center px-6 md:px-20">
      <div className="max-w-3xl">

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-bold leading-tight"
        > Yoel TELOUK
        
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-6 text-lg text-gray-500 dark:text-gray-400"
        >
          
        </motion.p>

        <div className="mt-8 flex gap-6 text-sm">
          <a href="https://linkedin.com/in/yoel-telouk" className="underline">
            LinkedIn
          </a>
          
          <a href="mailto:yoel.telouk@gmail.com" className="underline">
            Contact
          </a>
        </div>

      </div>
    </section>
  );
}