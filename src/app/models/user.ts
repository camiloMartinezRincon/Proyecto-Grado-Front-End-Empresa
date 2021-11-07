import { Project } from "./project";
import { ProjectDelivery } from "./project-delivery";
import { Requirement } from "./requirement";

export class User {
  id: number;
  name: string;
  lastname: string;
  email: string;
  password: string;
  requirements: Array<Requirement> = [];
  projects: Array<Project> = [];
  projectDeliveries: Array<ProjectDelivery> = [];
}
