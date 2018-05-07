import { Component, OnInit } from '@angular/core';
import { WorkshopsService } from '../workshops.service';

@Component({
  selector: 'app-workshops',
  templateUrl: './workshops.component.html',
  styleUrls: ['./workshops.component.css']
})
export class WorkshopsComponent implements OnInit {
  workshops;

  constructor(private workshopsService: WorkshopsService) { }

  ngOnInit() {
    this.getWorkshops();
  }

  getWorkshops(): void {
    this.workshopsService.getWorkshops()
      .subscribe(workshops  => this.workshops = workshops);
  }
}
