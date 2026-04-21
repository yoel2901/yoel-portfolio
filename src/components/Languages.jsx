
import { language } from "../data/data";

export default  function Languages() {

  return (
    <section className="px-6 md:px-20 py-12 max-w-4xl">
      <h2 className="text-xl font-bold uppercase tracking-wide border-b pb-2 mb-6">
        Languages
      </h2>

           <ul className="space-y-3">
        {language.map((lang, index) => (
          <li key={index} className="flex items-center gap-3">
            <img
              src={lang.flag}
              alt={lang.name}
              className="w-5 h-4 object-cover rounded-sm"
            />
            <span>
              {lang.name} - {lang.level}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}