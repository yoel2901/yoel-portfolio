import { experiences } from "../data/data";

export default function Experience() {
  return (
    <section className="px-6 md:px-20 py-12 max-w-4xl">
      <h2 className="text-xl font-bold uppercase tracking-wide border-b pb-2 mb-6">
        Experience
      </h2>

      <div className="space-y-8">
        {experiences.map((exp, i) => (
          <div key={i}>
            
            <div className="flex justify-between flex-wrap">
              <h3 className="font-semibold">
                {exp.role} — {exp.company}
              </h3>
              <span className="text-sm text-gray-500">
                {exp.date}
              </span>
            </div>

            <ul className="mt-2 list-disc ml-6 text-gray-700 dark:text-gray-300">
              {exp.points.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>

          </div>
        ))}
      </div>
    </section>
  );
}