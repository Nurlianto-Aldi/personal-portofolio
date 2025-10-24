import Link from "next/link";
import { projectList } from "../database/Project";
import ProjectCard from "../components/ProjectCard";

const ProjectPageList = async () => {

  const projects = await projectList

  if(!projects) {
    return (
      <main className="flex h-[80vh] flex-col items-center justify-center p-[90px]">
        <h1 className="text-4xl font-bold">Sorry, there is no project right now!</h1>
        <h2 className="mt-4 text-xl">Please come back later</h2>
      </main>
    )
  }

  return (
    <main className="p-5 md:p-12 lg:p-[90px]">
      <ul
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {projects.map((project) => (
          <li
            key={project.id}
          >
            <Link
              href={`/project/${project.id}`}
            >
              <ProjectCard
                title={project.title}
                tools={project.tools}
                desc={project.desc}
                thumbnail={project.thumbnail}
              />
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default ProjectPageList;