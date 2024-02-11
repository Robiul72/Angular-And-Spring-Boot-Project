import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HouseComponentComponent } from './house-component/house-component.component';
import { HouseViewComponentComponent } from './house-view-component/house-view-component.component';

const routes: Routes = [
  {path: "house", component:HouseComponentComponent},
  {path: "view", component:HouseViewComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
