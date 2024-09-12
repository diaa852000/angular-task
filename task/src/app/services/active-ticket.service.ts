import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActiveTicketService {
  private flagSource = new Subject<boolean>();
  public flag = this.flagSource.asObservable();

  constructor() { }

  toggleActivation(flag: boolean) {
    this.flagSource.next(flag);
  }
}
