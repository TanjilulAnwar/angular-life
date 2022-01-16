import { Component, OnInit } from '@angular/core';
import { RecordsService } from '../records.service';

@Component({
  selector: 'employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  providers: [RecordsService]
})
export class EmployeeComponent implements OnInit {


  infoRecieved1: string[]=[];
  infoRecieved2: string[]=[];
  infoRecieved3: string[]=[];

  getInfoFromServiceClass1(){
    this.infoRecieved1 = this.rservice.getinfo1();
  }
  
  getInfoFromServiceClass2(){
    this.infoRecieved2 = this.rservice.getinfo2();
  }
  
  getInfoFromServiceClass3(){
    this.infoRecieved3 = this.rservice.getinfo3();
  }
  constructor(private rservice: RecordsService) { }

  ngOnInit(): void {
  }

}
