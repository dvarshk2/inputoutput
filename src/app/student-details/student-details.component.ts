import { Component, OnInit } from '@angular/core';
import { Istudent } from '../modal/data';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.scss']
})
export class StudentDetailsComponent implements OnInit {
  firstName!:string;
  lastName! :string;
  eMail!: string;
  contactNo!:string;
  constructor() { }

  ngOnInit(): void {
  }
  studentInfo :Istudent[] =[
    {
      fname:"Varshketu",
      lname:"Dadhale",
      email:"varsh@gmail.com",
      contact:"123456"
    }
  ];

  onStdAddHandler(){
    let obj ={
      fname: this.firstName,
      lname: this.lastName,
      email :this.eMail,
      contact:this.contactNo,
    }
    console.log(obj);
    this.studentInfo.push(obj);
    console.log(this.studentInfo);
    this.firstName = '';
    this.lastName = '';
    this.eMail = '';
    this.contactNo = '';
  }

  
  
}
