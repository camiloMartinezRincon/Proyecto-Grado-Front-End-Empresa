import { Project } from "./project";
import { User } from "./user";

export class ProjectDelivery {
  id: number;
  clientFullName: string;
  clientEmail: string;
  projectName: string;
  deliveryDate: string;
  deliveryHour: string;
  deliveryPlace: string;
  project: Project;
  user: User;
}
