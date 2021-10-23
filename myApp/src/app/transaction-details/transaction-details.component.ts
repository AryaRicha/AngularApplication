import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transaction-details',
  templateUrl: './transaction-details.component.html',
  styleUrls: ['./transaction-details.component.css']
})
export class TransactionDetailsComponent implements OnInit {

  data: any[] =[
    {fName:'Richa',lName:"Arya",cDate:"20-May-2021",error:'network issue'},
    {fName:'Anshu',lName:"Smriti",cDate:"25-May-2021",error:'http.1.1 404 status not found'},
    {fName:'XYZ',lName:"PIU",cDate:"29-June-2021",error:'network issue'},
    {fName:'Tina',lName:"Kumari",cDate:"30-May-2021",error:''},
    {fName:'Alberto',lName:"Sosa",cDate:"02-Sept-2021",error:'Exception found'},
    {fName:'Ramanand',lName:"",cDate:"10-Oct-2021",error:'network issue'}

  ] 

  constructor() { }

  ngOnInit(): void {
  }

}
