import { Component, OnInit } from '@angular/core';
import { ServerService } from '../../services/server.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-containers',
  templateUrl: './containers.component.html',
  styleUrls: ['./containers.component.scss']
})
export class ContainersComponent implements OnInit {
  containers: any[] = [];

  constructor(
    private serverService: ServerService,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.loadContainers();
  }

  loadContainers(): void {
    this.serverService.getUserContainers().subscribe(
      data => {
        this.containers = data;
      },
      error => {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Error loading containers' });
      }
    );
  }

  deleteContainer(containerId: string): void {
    this.serverService.deleteContainer(containerId).subscribe(
      response => {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Container deleted successfully' });
        this.loadContainers(); // Reload the container list
      },
      error => {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Error deleting container' });
      }
    );
  }
}
