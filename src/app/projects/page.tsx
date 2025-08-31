import ProjectCard from "@/components/ProjectCard";

export default function Projects() {
  const projects = [
    { title: "E-commerce App", tech: "React, Redux", link: "#" },
    { title: "Time Tracker", tech: "Next.js, Node.js", link: "#" },
  ];

  return (
    <section className="py-20 px-6">
      <h2 className="text-3xl font-bold mb-6">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((p, idx) => (
          <ProjectCard key={idx} {...p} />
        ))}
      </div>
    </section>
  );
}
