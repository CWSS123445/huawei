import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrl: './top.component.css'
})
export class TopComponent {
  isShow:boolean = true;
  @Input() carNumber: number | undefined;

  search(){
    // 搜索
    this.isShow = !this.isShow;

    
  }

}
