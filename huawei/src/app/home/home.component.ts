import { Component ,OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { TopComponent } from '../top/top.component';
import { SwipperComponent } from '../swipper/swipper.component';
import { ComputerComponent } from '../computer/computer.component';
import { PhoneComponent } from '../phone/phone.component';
import { BottomComponent } from '../bottom/bottom.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  constructor(public http: HttpClient){
    
  }
  ngOnInit(): void {
    this.getCarData();
      
  }
  carNumber: number = 0;

  getCarData(){
    this.http.get('http://localhost:7777/car/getAllList').subscribe((res:any)=>{
      this.carNumber = res.data.length;
    })
  }


}
