import Image from "next/image";

interface ProjectListProps {
  title: string;
  tools: string[];
  desc: string;
  thumbnail: string;
}

const ProjectCard = ({title, tools, desc, thumbnail}: ProjectListProps) => {

  return (
    <div
      className="flex flex-col shadow-xl rounded-b-xl w-full"
    >
      <div
        className="h-[190.12px] bg-gray-400 rounded-xl w-full relative overflow-hidden"
      >
        <Image 
          src={thumbnail}
          alt="project-thumbnail"
          layout="fill"
          style={{objectFit: "cover"}}
        />
      </div>
      <div 
        className="m-3" // ini nanti diganti dengan m-[12px]
      >
        <h2
          className="text-[18px] font-bold "
        >
          {title}
        </h2>
        <p
          className="text-[12px] italic mb-[11.5px]"
        >
          {tools.join(", ")}
        </p>
        <p
          className="text-[12px]"
        >
          {desc}
        </p>
      </div>
    </div>
  )
}

export default ProjectCard;