import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BottomComponent } from '../bottom/bottom.component';
import { NgModel, FormsModule } from '@angular/forms';


@Component({
  selector: 'app-mate',
  templateUrl: './mate.component.html',
  styleUrl: './mate.component.css'
})
export class MateComponent {
  title = 'mate系列';
  mateData: any = { data: [] };
  selectData: any = { data: [] };
  sortData: any = { data: [] };
  minPrice = "";
  maxPrice = "";
  isShow: boolean = false;
  sortBy: boolean = false;


  constructor(private http: HttpClient) {
    this.getAllList();
  }
  getAllList() {
    this.http.get('http://localhost:7777/mate/getAllList').subscribe(res => {
      this.mateData = res
    })
  }
  getListByPrice() {
    this.http.get(`http://127.0.0.1:7777/mate/getListByPrice/${this.minPrice}/${this.maxPrice}`).subscribe(res => {
      this.selectData = res;
      this.isShow = true;
    })
  }
  clearPrice() {
    this.minPrice = "";
    this.maxPrice = "";
    this.isShow = false;
    this.getAllList();
  }

  sortByComment() {
    this.http.get(`http://127.0.0.1:7777/mate/getListByComment`).subscribe(res => {
      this.sortBy = !this.sortBy;
      this.sortData = res;
      this.mateData = this.sortData;
      if (!this.sortBy) {
        this.getAllList();
      }
    })
  }






}
