import { Component, OnInit, Input } from '@angular/core';
import { Project } from 'src/app/data/Project';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ProjectsService } from 'src/app/services/projects.service';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss']
})
export class ProjectDetailsComponent implements OnInit {

  project: Project;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private projectsService: ProjectsService
  ) { }

  ngOnInit(): void {
    this.getPorject();
  }

  getPorject(): void {
    const projectId = +this.route.snapshot.paramMap.get('id');
    this.project = this.projectsService.getProject(projectId);
  }

}
