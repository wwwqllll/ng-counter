import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { CounterGroupComponent } from './counter-group/counter-group.component';

@NgModule({
  declarations: [AppComponent, CounterComponent, CounterGroupComponent],
  imports: [BrowserModule, AppRoutingModule, NzButtonModule, NzIconModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
