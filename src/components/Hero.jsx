import { motion } from "framer-motion";
import { FaWhatsapp, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="min-h-[50vh] flex items-center px-6 md:px-20">
      <div className="max-w-3xl">

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-bold leading-tight"
        >
          Yoel TELOUK
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-6 text-lg text-gray-500 dark:text-gray-400"
        >
          Software Engineer
        </motion.p>

        <div className="mt-8 flex gap-6 text-sm items-center">

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/yoel-telouk"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 underline hover:text-blue-600 transition"
          >
            <FaLinkedin />
            LinkedIn
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/972557738701"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 underline hover:text-green-500 transition"
          >
            <FaWhatsapp />
            WhatsApp
          </a>

          {/* Email */}
          <a
            href="mailto:yoel.telouk@gmail.com"
            className="flex items-center gap-2 underline hover:text-red-500 transition"
          >
            <FaEnvelope />
            Contact
          </a>

        </div>

      </div>
    </section>
  );
}