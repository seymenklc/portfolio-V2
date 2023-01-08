import { IProject } from "@/types";

interface Props {
   project: IProject;
}

export default function Project({ project }: Props) {
   console.log(project);
   return (
      <div>Projects</div>
   );
}