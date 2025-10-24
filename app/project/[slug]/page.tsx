import { projectList } from "@/app/database/Project";
import { notFound } from "next/navigation";
import ProjectContent from "@/app/components/ProjectContent";
import { FC } from "react"; // Tambahkan ini jika Anda ingin memastikan itu adalah komponen React

// 1. Definisikan tipe untuk PARAMS saja, bukan untuk keseluruhan props halaman
type ProjectParams = {
  slug: string;
};

// 2. Langsung terapkan tipe params ke fungsi komponen (metode paling aman)
// Komponen App Router (page.tsx) tidak perlu didefinisikan sebagai FC secara eksplisit 
// jika Anda menggunakan async, tapi untuk non-async seperti ini, ini membantu.
const ProjectDetailPage: FC<{ params: ProjectParams }> = ({ params }) => {
  const { slug } = params;

  // Catatan: Jika Anda menggunakan ID numerik, ganti .toString() menjadi parseInt(slug)
  const project = projectList.find((p) => p.id.toString() === slug); 
  
  // Jika 'project' tidak ditemukan, tampilkan 404
  if (!project) {
    notFound();
  }

  return (
    <main className="py-10 md:py-12 lg:py-[90px] px-7 md:px-12 lg:px-[360px]">
      {/* Pastikan komponen ProjectContent Anda dapat menerima tipe data proyek */}
      <ProjectContent project={project} /> 
    </main>
  );
};

export default ProjectDetailPage;

// CATATAN TAMBAHAN:
// Jika Anda mengubah komponen ini menjadi async (seperti yang disarankan Next.js
// untuk data fetching server-side), Anda bisa menyingkirkan FC<...>
// dan hanya menggunakan:
// export default async function ProjectDetailPage({ params }: { params: ProjectParams }) { ... }
















// import { projectList } from "@/app/database/Project";
// import { notFound } from "next/navigation";
// import ProjectContent from "@/app/components/ProjectContent";


// type ProjectDetailPageProps = {
//   params: {
//     slug: string;
//   };
// };

// const ProjectDetailPage = ({ params }: ProjectDetailPageProps) => {
//   const { slug } = params;

//   const project = projectList.find((p) => p.id.toString() === slug);

//   if (!project) {
//     notFound();
//   }

//   return (
//     <main className="py-10 md:py-12 lg:py-[90px] px-7 md:px-12 lg:px-[360px]">
//       <ProjectContent project={project} />
//     </main>
//   );
// };

// export default ProjectDetailPage;