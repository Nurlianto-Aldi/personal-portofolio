import { ProjectList } from "../database/Project"

type ProjectContentProps = {
  project: ProjectList;
}

const ProjectContent = ({ project }: ProjectContentProps) => {
  return (
    <div>
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">{project.title}</h1>
      <div className="mt-12 text-justify">
        {project.content.map((proj, index) => {
          switch (proj.type) {
            case "text":
              return <p key={index} className="mb-4 leading-relaxed">{proj.text}</p>;
            case "subHeader":
              return <h2 key={index} className="text-2xl font-bold my-2">{proj.text}</h2>;
            case "image":
              return <img 
                src={proj.src}
                alt={proj.alt} 
                className="w-[480px] h-60 bg-gray-200 my-6" // nanti rubah jadi h-[240px] lagi
              />
            case "video":
              return <img 
                src={proj.src}
                alt={proj.alt} 
                className="w-[480px] h-60 bg-gray-200" // nanti rubah jadi h-[240px] lagi
              />
            case "list":
              return (
                <ul
                  key={index}
                  className="list-disc list-outside mx-4 my-4 space-y-2"
                >
                  {proj.items?.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              )
            default:
              return null;
          }
        })}
      </div>
      <span
        className="italic"
      >
        See the project here : 
        <a 
          href={project.projLink} 
          className="text-blue-800 underline"
        >
          {project.projLink}
        </a>
      </span>
    </div>
  )
}

export default ProjectContent