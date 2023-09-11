import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SetsComponent } from './sets/sets.component';
import { CircuitComponent} from './circuit/circuit.component';

const routes: Routes = [
  { path: 'sets', component: SetsComponent},
  { path: 'circuit', component : CircuitComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
