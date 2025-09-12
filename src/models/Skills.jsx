import { Code, BrainCog, Smartphone, Server } from "lucide-react";

const skills = [
  {
    name: "Web Development",
    icon: Code,
    items: [
      { name: "React Js", skill: 4 },
      { name: "Angular", skill: 2 },
      { name: "JavaScript", skill: 4 },
      { name: "TypeScript", skill: 3 },
      { name: "Tailwind", skill: 3 },
      { name: "Bootstrap", skill: 5 },
      { name: "Laravel", skill: 4 },
    ],
  },
  {
    name: "Backend Development",
    icon: Server,
    items: [
      { name: "Golang", skill: 4 },
      { name: "Express", skill: 4 },
      { name: "My SQL", skill: 4 },
      { name: "PostgreSQL", skill: 4 },
    ],
  },
  {
    name: "Mobile Development",
    icon: Smartphone,
    items: [
      { name: "Kotlin Multiplatform", skill: 4 },
      { name: "Kotlin Compose", skill: 4 },
      { name: "Java", skill: 1 },
      { name: "Flutter", skill: 3 },
    ],
  },
  {
    name: "Machine Learning",
    icon: BrainCog,
    items: [
      { name: "Python", skill: 4 },
      { name: "Numpy", skill: 3 },
      { name: "Matplotlib", skill: 3 },
      { name: "Scikit-learn", skill: 2 },
      { name: "TensorFlow", skill: 2 },
      { name: "OpenCV", skill: 3 },
    ],
  },
];

export default skills;
