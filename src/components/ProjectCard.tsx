import { BsArrowUpRight } from "react-icons/bs";

export default function ProjectCard({ title, tech, link }) {
  // If `tech` is a string, convert to array
  const techArray =
    typeof tech === "string" ? tech.split(",").map((t) => t.trim()) : tech;

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block p-6 border rounded-xl bg-gray-800 hover:bg-gray-700 hover:shadow-xl transition transform hover:-translate-y-1 duration-300"
    >
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <BsArrowUpRight className="text-white w-5 h-5" />
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {techArray.map((t, index) => (
          <span
            key={index}
            className="px-2 py-1 text-xs font-medium bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full"
          >
            {t}
          </span>
        ))}
      </div>
    </a>
  );
}
