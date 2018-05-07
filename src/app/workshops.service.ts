import { Injectable } from '@angular/core';
import { WORKSHOPS } from './mock-workshops';
import { Workshop } from './Workshop';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
// import { Observable, of } from 'rxjs';

import { MessageService } from './message.service';

@Injectable()
export class WorkshopsService {

  constructor(private messageService: MessageService) { }

  getWorkshops(): Observable<Workshop[]> {
    this.messageService.add('WorkshopsService: fetched Workshops');
    return of(WORKSHOPS);
  }

  getWorkshop(id: number): Observable<Workshop> {
    this.messageService.add(`WorkshopsService: fetched Workshop id=${id}`);
    return of(WORKSHOPS.find(workshop => workshop.id === id));
  }
}
