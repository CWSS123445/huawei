import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-phone-details',
  templateUrl: './phone-details.component.html',
  styleUrl: './phone-details.component.css'
})
export class PhoneDetailsComponent implements OnInit {
  constructor(private route: ActivatedRoute, private http: HttpClient) {
  }
  id = this.route.snapshot.paramMap.get('id');
  phoneData: any = {
    code: 1,
    msg: "获取成功",
    data: [
    ]
  };
  ngOnInit(): void {
    this.getData();
  };
  getData() {
    this.http.get(`http://127.0.0.1:7777/phone/getPhoneById/${this.id}`).subscribe((res) => {
    this.phoneData = res;

    })
  }
}

