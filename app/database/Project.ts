export interface ProjectContent {
  type: "text" | "subHeader" | "image" | "video" | "list";
  text?: string;
  src?: string;
  alt?: string;
  items?: string[];
}

export interface ProjectList {
  id: number;
  title: string;
  thumbnail: string;
  tools: string[];
  desc: string;
  projLink: string;
  content: ProjectContent[];
}

export const projectList: ProjectList[] = [
  {
    id: 1, 
    title: "Personal Portfolio", 
    thumbnail: "/Screenshot 2025-10-24 at 12.40.32 PM (1) (1).png",
    tools: ["Next.js 15", "Tailwind CSS", "TypeScript", "Figma", "Vercel"],
    desc: "Personal showcase built on the Next.js App Router for maximum performance and superior SEO. Features comprehensive project overviews and a clean, responsive layout tailored for large screens.",
    projLink: "asdasdasdasdasdas",
    content: [
      {
        type: "text", 
        text: "I developed this personal portofolio as a showcase of my capabilities and past project. I design this website from scratch and trying to make it light and fast, ensuring anyone who want to know about me through this website experience zero loading friction."
      }, {
        type: "subHeader",
        text: "Concept & Structure"
      }, {
        type: "text",
        text: "The project began with a sketch on my notebok, where i focusing on a desktop-first. The structure will have three sections :"
      }, {
        type: "list",
        items: [
          "ABOUT : provides a brief professional introduction and background",
          "PROJECTS : lists my most recent project and relevant work",
          "DARK MODE : a feature to turn the web into a DARK MODE. Or is it? It have some easter egg that you should check out. C'mon, try the dark mode",
        ]
      }, {
        type: "image",
        src: "/20251024_114510 (1) (1).jpg",
        alt: "The original sketch"
      }, {
        type: "subHeader",
        text: "Development & Deployment"
      }, {
        type: "text",
        text: "After the skecthes, i build the prototype using Figma, creating the layout. I add the standard for the typography, element size, and responsive breakpoints. I also create the mobile version so the web can still flawlessly beatiful when opened on mobile phone."
      }, {
        type: "image",
        src: "/Screenshot 2025-10-24 at 12.19.25 PM (1).png",
        alt: "Making the prototype on Figma"
      }, {
        type: "text",
        text: "Finally, i turn the prototype into code through code editor. I choose to use Next.js for scalability and optimal SEO performance, Tailwind CSS for easy styling, and TypeScript to make it a little bit fancy. Then when everything is done, i deploy it on vercel (of course, duh) and use custom domain from Niagahoster."
      }, {
        type: "image",
        src: "/Screenshot 2025-10-24 at 12.19.44 PM (1).png",
        alt: "Upload it on Vercel with custom domain"
      }, {
        type: "subHeader",
        text: "Conclusion"
      }, {
        type: "text",
        text: "To sum up, i sketch the design on the notebook, turn it into prototype on Figma, realize it with Next.js with Tailwind CSS and TypeScript, and lastly deploy it on Vercel with custom domain from Niagahoster."
      }
    ]
  }, 
]
