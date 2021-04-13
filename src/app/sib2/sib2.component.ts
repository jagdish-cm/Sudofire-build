import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/services/data.service';

@Component({
  selector: 'app-sib2',
  templateUrl: './sib2.component.html',
  styleUrls: ['./sib2.component.scss']
})
export class Sib2Component implements OnInit {

  str1 : string = '';
  constructor( private dataService : DataService ) { }

  ngOnInit(): void {
    this.getStr1();
  }


  getStr1(){
    this.dataService.mySubjec.subscribe(data =>{
      this.str1 = data;
      console.log(this.str1);
    })
  }

}
