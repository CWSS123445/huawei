import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { TopComponent } from './top/top.component';
import { SwipperComponent } from './swipper/swipper.component';
import { ComputerComponent } from './computer/computer.component';
import { PhoneComponent } from './phone/phone.component';
import { BottomComponent } from './bottom/bottom.component';
import { DetailsComponent } from './details/details.component';
import { PhoneDetailsComponent } from './phone-details/phone-details.component';
import { MateComponent } from './mate/mate.component';
import { ShoppingCarComponent } from './shopping-car/shopping-car.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TopComponent,
    SwipperComponent,
    ComputerComponent,
    PhoneComponent,
    BottomComponent,
    DetailsComponent,
    PhoneDetailsComponent,
    MateComponent,
    ShoppingCarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
