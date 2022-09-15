import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Istudent } from '../modal/data';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  firstName!:string;
  lastName!:string;
  eMail!:string;
  contactNo!:string;
 @Output() custEvent : EventEmitter<Istudent> = new EventEmitter<Istudent>();

  constructor() { }

  ngOnInit(): void {
  }
  onClickHandler(){
    let obj = {
      fname:this.firstName,
      lname:this.lastName,
      email:this.eMail,
      contact:this.contactNo
    }
    console.log(obj);
    this.custEvent.emit(obj);
    this.firstName='';
    this.lastName='';
    this.eMail='';
    this.contactNo='';
  }
}
