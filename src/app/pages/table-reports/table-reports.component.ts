import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/services/project.service';


@Component({
  selector: 'app-table-reports',
  templateUrl: './table-reports.component.html',
  styleUrls: ['./table-reports.component.scss'],
})
export class TableReportsComponent implements OnInit {

  projectsList: any;
  listA:any;

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
    this.projectService.getAllProjects().subscribe((resp: any) => {
      this.projectsList = resp;
      let currentDay = new Date().toISOString().slice(0, 10);
     let projectsClose = this.projectsList.filter(p => (p.endDate < currentDay));
     let projectsOpen = this.projectsList.filter(p => (p.endDate > currentDay));
    var newTrue = this.convertTrue(projectsClose);
    var newFalse = this.convertFalse(projectsOpen);

    this.listA =  projectsClose.concat(projectsOpen);

    },
      (error) => {
        console.log(error);
      }
    );
  }

  convertFalse(projectsClose:any){
    for(var i=0; i< projectsClose.length; i++){
      projectsClose[i].endDate = 'false';
    }
  }

  convertTrue(projectsOpen:any){
    for(var i=0; i< projectsOpen.length; i++){
      projectsOpen[i].endDate = 'true';
    }
  }
}
