import { Component, OnInit, Input } from '@angular/core';
import {Project} from '../project'
@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent implements OnInit {

@Input() selectedProject: Project;

  constructor() { }

  ngOnInit() {
  }

}
