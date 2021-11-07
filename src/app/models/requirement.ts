import { Project } from "./project";
import { User } from "./user";

export class Requirement {
  id: number;
  code: string;
  type: string;
  projectName: string;
  title: string;
  priority: string;
  description: string;
  project: Project;
  user: User;
}
