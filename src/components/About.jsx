import { summary } from "../data/data";

export default function About() {
  return (
    <section className="px-6 md:px-20 py-12 max-w-4xl">
      <h2 className="text-xl font-bold uppercase tracking-wide border-b pb-2 mb-4">
        Summary
      </h2>

      <p className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">
        {summary.trim()}
      </p>
    </section>
  );
}