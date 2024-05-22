// import { HttpClient } from '@angular/common/http';
// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
// @Component({
//   selector: 'app-details',
//   templateUrl: './details.component.html',
//   styleUrl: './details.component.css'
// })
// export class DetailsComponent implements OnInit {
//   constructor(private route: ActivatedRoute,private http:HttpClient) { 
//   }
//    id=this.route.snapshot.paramMap.get('id');
//    computerData:any={
//     code: 1,
//     msg: "获取成功",
//     data: [
//     ]
//    };
//   ngOnInit():void{
//   this.getData();
//   };
//   getData(){
//   this.http.get(`http://127.0.0.1:7777/computer/getComputerById/${this.id}`).subscribe((res)=>{
//       this.computerData=res;
//     })
//   }


//   }

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent implements OnInit {
  computerData: any = {}
  id: string = '';
  number = 1;
  setColor = "雅丹黑";
  setVersion = "12GB+256GB";
  colors = [
    "雅丹黑",
    "雅川青",
    "白沙银",
    "南糯紫"
  ]
  version = [
    "12GB+256GB",
    "12GB+512GB",
    "12GB+1TB",
  ]


  constructor(
    private http: HttpClient,

    private activatedroute: ActivatedRoute
  ) {

  }

  getData() {
    this.http.get(`http://127.0.0.1:7777/computer/getComputerById/${this.id}`).subscribe((res) => {
      this.computerData = res;
    })
  }

  ngOnInit(): void {
    this.id = this.activatedroute.snapshot.paramMap.get('id')!
    this.getData()
  }


  addnumber() {
    this.number++
  }
  reducenumber() {
    if (this.number > 1) {
      this.number--
    }
  }

  colorClick(color: any) {
    this.setColor = color
  }

  versionClick(version: any) {
    this.setVersion = version
  }

  buy() {
    alert("购买成功")
  }
}

