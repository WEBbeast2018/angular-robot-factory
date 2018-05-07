import { Component, OnInit } from '@angular/core';
import { Workshop } from '../Workshop';
import { WorkshopsService } from '../workshops.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  workshops: Workshop[] = [];

  constructor(private workshopsService: WorkshopsService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.workshopsService.getWorkshops()
      .subscribe(workshops => {
        // sort by number of employees and get top 4
        this.workshops = workshops.sort((a, b) => a.employees - b.employees)
          .slice(1, 5);
      });
  }
}
