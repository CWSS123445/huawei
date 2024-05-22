import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { PhoneDetailsComponent } from './phone-details/phone-details.component';
import { MateComponent } from './mate/mate.component';
import { ShoppingCarComponent } from './shopping-car/shopping-car.component';

const routes: Routes = [

  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'computer/:id', component: DetailsComponent },
  { path: 'phone/:id', component: PhoneDetailsComponent },
  { path: "mate", component: MateComponent },
  { path: "shopping-car", component: ShoppingCarComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
