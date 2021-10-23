import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loginexercise',
  templateUrl: './loginexercise.component.html',
  styleUrls: ['./loginexercise.component.css']
})
export class LoginexerciseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  employeeData=[
    {
      "empId": 100,
      "empName": "Emp1",
      "age": 60,
      "gender": "M",
      "hobbies": [
        "cricket",
        "football"
      ],
      "address": "Mysore"
    },
    {
      "empId": 101,
      "empName": "Emp2",
      "age": 25,
      "gender": "F",
      "hobbies": [
        "chess",
        "reading"
      ],
      "address": "Bangalore"
    },
    {
      "empId": 102,
      "empName": "Emp3",
      "age": 45,
      "gender": "M",
      "hobbies": [
        "cricket",
        "reading"
      ],
      "address": "Chennai"
    }
  ]
  

}
