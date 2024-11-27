// src/app/services/record.service.ts

import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecordService {

  private recordUpdatedSource = new Subject<void>();
  recordUpdated$ = this.recordUpdatedSource.asObservable();

  // Emit an update event
  emitRecordUpdated() {
    this.recordUpdatedSource.next();
  }

  constructor() { }
}
