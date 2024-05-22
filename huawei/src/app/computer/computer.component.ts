import { HttpClient } from '@angular/common/http';
import { Component ,OnInit} from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-computer',
  templateUrl: './computer.component.html',
  styleUrl: './computer.component.css'
})
export class ComputerComponent implements OnInit  {
  computerData:any={};
  // computerData: any[] = [];
constructor(private http: HttpClient,private router: Router){
}
ngOnInit(): void {
    this.getAllList()
}

getAllList(){
  this.http.get('http://localhost:7777/computer/getAllList').subscribe(res =>{
    console.log(res)
    this.computerData = res
  })
}

goToDetail(computerId:number) {
  this.router.navigate(['/computer', computerId]);
}

}