import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-phone',
  templateUrl: './phone.component.html',
  styleUrl: './phone.component.css'
})
export class PhoneComponent implements OnInit {
phoneData: any={};
  constructor(private http:HttpClient,private router: Router) {
    
  }

  ngOnInit(): void {
    this.getAllList();
  }
  getAllList(){
    this.http.get('http://127.0.0.1:7777/phone/getAllList').subscribe(res=>{
      console.log(res);
      this.phoneData=res;
    })
  }
  goToDetail(phoneId:number) {
    this.router.navigate(['/phone', phoneId]);
  }
}

  