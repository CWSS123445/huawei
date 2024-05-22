import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-shopping-car',
  templateUrl: './shopping-car.component.html',
  styleUrl: './shopping-car.component.css'
})
export class ShoppingCarComponent {
  carData: any = {}


  constructor(public http: HttpClient) {
    this.getData()
  }

  getData() {
    this.http.get('http://localhost:7777/car/getAllList').subscribe((res: any) => {
      this.carData = res;
    })
  }

  allChecked: boolean = false;

  selectAll() {
    this.allChecked = !this.allChecked;
  }

  reduce(id: number) {
      this.http.post('http://localhost:7777/car/reduceNum', { id: id }).subscribe(
        res => {
          // console.log(res);
          this.getData()
        })
  }
  add(id: number) {
    this.http.post('http://localhost:7777/car/addNum', { id: id }).subscribe(
      res => {
        this.getData()
        
      }
    )
  }


  // reduce() {
  //   if (this.count > 1) {
  //     this.count--
  //   }
  //   else {
  //     this.count = 1
  //   }
  // }
  // add() {
  //   this.count++
  // }

}
