import { Component, OnInit } from '@angular/core';
import { Istudent } from './modal/data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Inputoutput Decorators';
  studentInfo: Istudent[] = [];
  constructor(){}
  ngOnInit(): void {
  }
  emitedData(e:Istudent){
    console.log(e);
    this.studentInfo.push(e);
    console.log(this.studentInfo);
  }
  
  

}
 