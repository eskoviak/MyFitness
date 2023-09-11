import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SetsComponent } from './sets/sets.component';
import { CircuitComponent } from './circuit/circuit.component';

@NgModule({
  declarations: [
    AppComponent,
    SetsComponent,
    CircuitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
