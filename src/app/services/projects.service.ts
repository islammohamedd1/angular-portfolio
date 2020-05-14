import { Injectable } from '@angular/core';
import { Project } from '../data/Project';
import { PROJECTS } from '../data/projects';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  projects: Project[] = PROJECTS;

  constructor() { }

  getAllProjectS(): Project[] {
    return this.projects;
  }

  getProject(id: number): Project {
    return this.projects.find(p => p.id === id);
  }
}
