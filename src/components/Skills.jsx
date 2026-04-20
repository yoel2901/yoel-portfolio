import { skills } from "../data/data";

export default function Skills() {
  return (
    <section className="px-6 md:px-20 py-12 max-w-4xl">
      <h2 className="text-xl font-bold uppercase tracking-wide border-b pb-2 mb-4">
        Technical Skills
      </h2>

      <ul className="grid grid-cols-2 md:grid-cols-3 gap-2 text-gray-700 dark:text-gray-300">
        {skills.map((skill, i) => (
          <li key={i}>{skill}</li>
        ))}
      </ul>
    </section>
  );
}