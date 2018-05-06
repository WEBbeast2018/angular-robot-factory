import { Component, Input, OnInit } from '@angular/core';
import { Workshop } from '../Workshop';

@Component({
  selector: 'app-workshop-detail',
  templateUrl: './workshop-detail.component.html',
  styleUrls: ['./workshop-detail.component.css']
})
export class WorkshopDetailComponent implements OnInit {
  @Input() workshop: Workshop;

  constructor() { }

  ngOnInit() {
  }

}
