import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {

  count: number = 0;
  constructor() { }

  ngOnInit(): void {
  }

  inscrease(): void{
    this.count = this.count + 1;
  }

  decrease(): void{
    this.count = this.count - 1;
  }
  isGreaterOrEqualThanZero(): boolean { 
    return this.count >= 0;

  }
}
