import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-currentdata',
  templateUrl: './currentdata.component.html',
  styleUrls: ['./currentdata.component.css']
})
export class CurrentdataComponent implements OnInit {

  companyName:string;

  constructor(private appService :AppService) {
    this.appService.readDbData().subscribe(data => {
      console.log(data);
  });

   }

  ngOnInit() {
  }

  date:string = "2018-11-26";
  open:string = "8.03";
  low:string = "8.01";
  high:string = "8.50";
  close:string = "8.50";
  wap:string ="8.05";
  noshares:string ="104,700";
  notrades:string ="18";
  totalturnover:string = "842,452";
  delieverquantity:string="99,700";
}
