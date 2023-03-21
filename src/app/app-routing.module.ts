import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { InComponent } from './components/in/in.component';
import { OutComponent } from './components/out/out.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'in', component: InComponent },
  { path: 'out', component: OutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
