import { Profile } from "./model";

export const profiles: Profile[] = [
  {
    name: "John Doe",
    description: "Full-stack developer with 5 years of experience",
    imgUrl:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60",
    website: "https://johndoe.com",
    skills: ["JavaScript", "React", "Node.js", "MYSQL"],
  },
  {
    name: "Jane Smith",
    description:
      "UX/UI designer with a passion for creating beautiful interfaces",
    imgUrl:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60",
    skills: ["Sketch", "Figma", "Adobe XD", "InVision"],
  },
  {
    name: "Bob Johnson",
    description:
      "Data analyst with expertise in statistical analysis and data visualization",
    imgUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60",
    website: "https://bobjohnson.com",
    skills: ["Python", "R", "Tableau", "Spreedsheet"],
  },
];
