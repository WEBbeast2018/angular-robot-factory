import { Component, Input, OnInit } from '@angular/core';
import { Workshop } from '../Workshop';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { WorkshopsService } from '../workshops.service';

@Component({
  selector: 'app-workshop-detail',
  templateUrl: './workshop-detail.component.html',
  styleUrls: ['./workshop-detail.component.css']
})
export class WorkshopDetailComponent implements OnInit {
  @Input() workshop: Workshop;

  constructor(  private route: ActivatedRoute,
                private workshopsService: WorkshopsService,
                private location: Location) { }

  ngOnInit() {
    this.getWorkshop();
  }

  getWorkshop(): void {
    // reminder: The JavaScript (+) operator converts the string to a number
    const id = +this.route.snapshot.paramMap.get('id');
    this.workshopsService.getWorkshop(id)
      .subscribe(workshop  => this.workshop = workshop);
  }

  goBack(): void {
    this.location.back();
  }
}
