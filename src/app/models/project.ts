import { ProjectDelivery } from "./project-delivery";
import { Requirement } from "./requirement";
import { User } from "./user";

export class Project {
  id: number;
  projectName: string;
  projectCode: string;
  serviceType: string;
  clientName: string;
  clientEmail: string;
  startDate: string;
  endDate: string;
  projectDescription: string;
  requirements: Array<Requirement> = [];
  projectDeliveries: Array<ProjectDelivery> = [];
  user: User;
}
