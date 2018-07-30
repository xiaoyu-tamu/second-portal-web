import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AwesomeComponent } from './awesome.component';

const routes: Routes = [{ path: '', component: AwesomeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AwesomeRoutingModule {}
