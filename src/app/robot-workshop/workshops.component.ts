import { Component, OnInit } from '@angular/core';
import { Workshop } from '../Workshop';
import { WORKSHOPS } from '../mock-workshops';

@Component({
  selector: 'app-robot-workshop',
  templateUrl: './workshops.component.html',
  styleUrls: ['./workshops.component.css']
})
export class WorkshopsComponent implements OnInit {
  workshops = WORKSHOPS;
  selectedWorkshop: Workshop;


  constructor() { }

  ngOnInit() {
  }

  onSelect(workshop: Workshop): void {
      this.selectedWorkshop = workshop;
  }
}
