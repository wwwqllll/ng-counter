import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Counter } from '../models/counter.model';
import { CounterService } from '../services/counter.service';

@Component({
  selector: 'app-counter-group',
  templateUrl: './counter-group.component.html',
  styleUrls: ['./counter-group.component.scss']
})
export class CounterGroupComponent implements OnInit {


  counters: Counter[] = []

  constructor(private counterService: CounterService) { 
    console.log(this.counterService.counters)

  }

  ngOnInit(): void {
  }

  doCreateCounter(): void{ 
    this.counters.push(new Counter(0))
  }

  sumCounts(): number {

    return this.counterService.sumCounts(this.counters);
  }

  resetAll(): void { 
    for (const counter of this.counters) {
      counter.count = 0;
    }

  }

}
