import { Injectable } from '@angular/core';
import { Counter } from '../models/counter.model';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  counters: Counter[] = [new Counter(2)];
  constructor() { }

  sumCounts(counters: Counter[]): number { 
    return counters.map(counter => counter.count)
      .reduce((a, b) => a + b, 0)

  }
}
