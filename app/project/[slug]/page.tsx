// import { projectList } from "@/app/database/Project";
// import { notFound } from "next/navigation";
// import ProjectContent from "@/app/components/ProjectContent";

// // Tipe untuk props halaman, termasuk params
// type ProjectDetailPageProps = {
//   params: {
//   slug: string;
//   }
// };

// /**
//  * Fungsi ini diekspor untuk memberitahu Next.js rute dinamis mana
//  * yang harus dibuat secara statis saat proses build.
//  */
// export async function generateStaticParams() {
//   return projectList.map((project) => ({
//     slug: project.id.toString(),
//   }));
// }

// export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
//   const { slug } = params;

//   // Cari data proyek berdasarkan slug dari params.
//   const project = projectList.find((p) => p.id.toString() === slug);
  
//   if (!project) {
//     notFound();
//   }

//   return (
//     <main className="py-10 md:py-12 lg:py-[90px] px-7 md:px-12 lg:px-[360px]">
//       <ProjectContent project={project} /> 
//     </main>
//   );
// }