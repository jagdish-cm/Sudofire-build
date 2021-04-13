import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/services/data.service';

@Component({
  selector: 'app-sib1',
  templateUrl: './sib1.component.html',
  styleUrls: ['./sib1.component.scss']
})
export class Sib1Component implements OnInit {

  str1 : string = '';
  constructor( private dataService : DataService ) { }

  ngOnInit(): void {

  }

  sendStr1(){
    this.dataService.mySubjec.next(this.str1);
    console.log(this.str1);
  }

}
