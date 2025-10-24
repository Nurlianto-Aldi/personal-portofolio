import { projectList } from "@/app/database/Project";
import { notFound } from "next/navigation";
import ProjectContent from "@/app/components/ProjectContent";

type ProjectDetailPageProps = {
  params: {
    slug: string;
  };
};

const ProjectDetailPage = ({ params }: ProjectDetailPageProps) => {
  const { slug } = params;

  const project = projectList.find((p) => p.id.toString() === slug); 
  
  // Jika 'project' tidak ditemukan, tampilkan 404
  if (!project) {
    notFound();
  }

  return (
    <main className="py-10 md:py-12 lg:py-[90px] px-7 md:px-12 lg:px-[360px]">
      <ProjectContent project={project} /> 
    </main>
  );
};

export default ProjectDetailPage;