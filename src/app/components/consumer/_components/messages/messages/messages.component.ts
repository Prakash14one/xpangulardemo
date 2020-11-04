import { Component, OnInit } from '@angular/core';
import { Pagination } from '../../../../../shared/_models/pagination.model'
import { MessagesService } from './../messages.service';
import { Observable } from 'rxjs';
import { Project } from 'src/app/shared/_models/project.model';
import { MatDrawer } from '@angular/material';
import { Message, MessagePage } from 'src/app/shared/_models/message.model';

@Component({
  selector: 'xb-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {

  pageData$: Observable<Pagination<Project>>;
  messages$: Observable<MessagePage>;
  activeProject: Project;
  constructor(private readonly messageService: MessagesService) {}

  ngOnInit() {
    this.pageData$ = this.messageService.getPage(1, 8);
  }

  goto(pageNumber: number) {
    this.pageData$ = this.messageService.getPage(pageNumber, 8);
  }

  getMessages(project: Project, drawer: MatDrawer) {
    this.messages$ = this.messageService.getMessagesByProjectId(project.id);
    this.activeProject = project;
    drawer.toggle();
  }

  reloadMessages() {
    this.messages$ = this.messageService.getMessagesByProjectId(
      this.activeProject.id
    );
  }

}
