import { projectList } from "@/app/database/Project";
import { notFound } from "next/navigation";
import ProjectContent from "@/app/components/ProjectContent";

// 1. Tipe untuk params (dibuat seminimal mungkin)
type ProjectParams = {
  slug: string;
};

// 2. GANTI MENJADI FUNGSI ASYNC dan hapus const/arrow function
// Nama fungsi harus diekspor default.
export default async function ProjectDetailPage({ params }: { params: ProjectParams }) {
  
  // Karena ini Server Component, kita bisa mensimulasikan data fetching
  // const project = await fetchProjectData(params.slug); 
  
  const { slug } = params;

  // Lakukan pencarian data (data lookup)
  // Catatan: Pastikan ProjectContent tidak menggunakan hooks (useState/useEffect)
  // jika Anda ingin ProjectDetailPage tetap murni Server Component
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
}

// Catatan: Interface ProjectDetailPageProps tidak diperlukan lagi