import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { HttpClient } from '@angular/common/http';
import { AppService } from '../app.service';

declare var google: any;
declare var $: any;


@Component({
  selector: 'app-stocks',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.css']

})
export class StocksComponent implements OnInit {

  showCompanyGraph: boolean = false;
  showCompanyCurrentData: boolean = true;
  showDiv: boolean = false;
  serviceRawData: any;
  showFailure: boolean = false;
  showSuccess: boolean = false;

  date: string;
  open: string;
  low: string;
  high: string;
  close: string;
  wap: string;
  noshares: string;
  notrades: string;
  totalturnover: string;

  options = {
    url: "../assets/data/compList.json",

    getValue: "name",

    template: {
      type: "description",
      fields: {
        description: "email"
      }
    },

    list: {
      match: {
        enabled: true
      }
    },

    theme: "plate-dark"
  };

  constructor(private http: HttpClient, private appService: AppService) {
    this.showCompaniesList();
    $("#seachCompanyName").easyAutocomplete(this.options);

  }



  ngOnInit() {



  }


  searchRequestForm = new FormGroup({
    seachCompanyName: new FormControl('')
  });

  showCompanyData(CompanyName: any) {
    /*this.appService.showCompanyData().subscribe(Compnieslist => {
      console.log(Compnieslist);
  });*/
  }

  showCompaniesList() {
    this.appService.getCompaniesNames().subscribe(Compnieslist => {
      console.log(Compnieslist);
    });
  }

  drawChart() {
    /*var rawData = [
      ["2019-01-17",728.75,733.4,736.45,738.65],
      ["2019-01-16",729,737.65,729,736.55],
      ["2019-01-15",705.1,729.8,705.1,726.55],
      ["2019-01-14",706,709,695.7,700.9],
      ["2019-01-11",683.9,686,672.8,683.7]
    ];*/

    var company = localStorage.getItem("orgname");
    switch (company) {
      case "INFOSYS LTD. EOD Prices":
        var rawData = [
          ["2019-01-17", 728.75, 733.4, 736.45, 738.65],
          ["2019-01-16", 729, 736.55, 729, 737.65],
          ["2019-01-15", 705.1, 726.55, 705.1, 729.8],
          ["2019-01-14", 695.7, 700.9, 706, 709],
          ["2019-01-11", 672.8, 683.7, 683.9, 686]
        ];
        break;

      case "TATA CHEMICHALS PVT. LTD":
        var rawData = [
          ["2019-01-17", 690.9, 694.35, 695.35, 697],
          ["2019-01-16", 692.5, 695.35, 696.75, 701.9],
          ["2019-01-15", 692.2, 695.35, 696.85, 698.75],
          ["2019-01-14", 692.5, 694.7, 693.4, 697.15],
          ["2019-01-11", 694, 697.8, 698.75, 700.5]
        ];
        break;

      case "TATA CHEMICHALS PVT. LTD":
        var rawData = [
          ["2019-01-17", 690.9, 694.35, 695.35, 697],
          ["2019-01-16", 692.5, 695.35, 696.75, 701.9],
          ["2019-01-15", 692.2, 695.35, 696.85, 698.75],
          ["2019-01-14", 692.5, 694.7, 693.4, 697.15],
          ["2019-01-11", 694, 697.8, 698.75, 700.5]
        ];
        break;

      case "TATA CONSULTANCY SERVICES LTD. EOD Prices":
        var rawData = [
          ["2019-01-16", 1848.55, 1870.1, 1869.95, 1874.8],
          ["2019-01-15", 1809.55, 1864.2, 1813.55, 1868],
          ["2019-01-14", 1810.5, 1814.4, 1854.7, 1854.8],
          ["2019-01-11", 1836.1, 1841.95, 1875, 1876.05],
          ["2019-01-10", 1874.1, 1888.15, 1904, 1906.8]
        ];
        break;

      case "HDFC Bank Ltd EOD Prices":
        var rawData = [
          ["2019-01-16", 2108.9, 2120, 2120, 2124],
          ["2019-01-15", 2100.05, 2121.05, 2105, 2126],
          ["2019-01-14", 2097, 2100.85, 2114.55, 2114.55],
          ["2019-01-11", 2107, 2112.15, 2114, 2124],
          ["2019-01-10", 2103.5, 2109.55, 2116, 2123.15]
        ];
        break;
    }


    var data = google.visualization.arrayToDataTable(rawData, true);

    // Set chart options
    var options = {
      'title': 'Stock Prices of Selected Company',
      titleTextStyle: {
        color: 'white',
        fontSize: 20,
        fontName: 'SourceSansPro-Regular'
      },
      'is3D': true,
      hAxis: {
        title: 'DATES',
        textStyle: {
          color: 'white',
          fontSize: 20,
          fontName: 'SourceSansPro-Regular'
        },
        titleTextStyle: {
          color: 'white',
          fontSize: 20,
          fontName: 'SourceSansPro-Regular'
        }
      },
      vAxis: {
        title: 'PRICES',
        textStyle: {
          color: 'white',
          fontSize: 20,
          fontName: 'SourceSansPro-Regular'
        },
        titleTextStyle: {
          color: 'white',
          fontSize: 20,
          fontName: 'SourceSansPro-Regular'
        }
      },
      backgroundColor: '#000000',
      legend: { textStyle: { color: 'white' } }

    };

    var chart = new google.visualization.CandlestickChart(document.getElementById('chart_div'));
    chart.draw(data, options);
  }



  loadChart() {
    console.log("in load chart");
    google.charts.load('current', { 'packages': ['corechart'] });
    google.charts.setOnLoadCallback(this.drawChart);
  }


  showContainer(selectedCompanyName) {
    localStorage.setItem("orgname", selectedCompanyName.seachCompanyName);
    this.showDiv = true;
    console.log(selectedCompanyName.seachCompanyName);
    this.appService.readDbData().subscribe(data => {
      data.forEach(element => {
        if (element.company_name == selectedCompanyName.seachCompanyName) {
          console.log(element);
          this.date = element.data[0].current_data.Date;
          this.open = element.data[0].current_data.Open;
          this.low = element.data[0].current_data.Low;
          this.high = element.data[0].current_data.High;
          this.close = element.data[0].current_data.Close;
          this.wap = element.data[0].current_data.WAP;
          this.noshares = element.data[0].current_data.NoShares;
          this.notrades = element.data[0].current_data.NoTrades;
          this.totalturnover = element.data[0].current_data.TotalTurnover;
        }
      });
    });


    /*this.appService.readDbData().subscribe(data => {
      data.forEach(element => {
        if(element.company_name == selectedCompanyName.seachCompanyName){
          this.serviceRawData = element.data[0].graph_row;
        }
      });      
    });*/

    //this.appService.perdictionData().subscribe(data => {
      if (localStorage.getItem("orgname") == "INFOSYS LTD. EOD Prices") {
        this.showSuccess = true;
        this.showFailure = false;
        setTimeout(() => {
          this.showSuccess = false;
        }, 5000);
      }
      else {
        this.showFailure = true;
        this.showSuccess = false;
        setTimeout(() => {
          this.showFailure = false;

        }, 5000);
      }
    //});
  }

  showCurrentData() {
    this.showCompanyGraph = false;
    this.showCompanyCurrentData = true;
  }

  showGraph() {
    this.showCompanyGraph = true;
    this.showCompanyCurrentData = false;
    this.loadChart();
  }

  speakableData = [
    ["2019-01-17", 728.75, 733.4, 736.45, 738.65],
    ["2019-01-16", 729, 736.55, 729, 737.65],
    ["2019-01-15", 705.1, 726.55, 705.1, 729.8],
    ["2019-01-14", 695.7, 700.9, 706, 709],
    ["2019-01-11", 672.8, 683.7, 683.9, 686]
  ];

  currentIndex = 0;

  speakGraph(currentDay) {

    switch (currentDay) {
      case "start":
        this.currentIndex = 0;
        var Infosis = this.speakableData[this.currentIndex];
        var script = "Hello Client, This is captured for Infosis where day is ";
        script += Infosis[0]
          + "and low price is " + Infosis[1]
          + "and close price is " + Infosis[2]
          + "and open price is " + Infosis[3]
          + "and high price is " + Infosis[4]
          + "That's It. Thank you so much."
        break;

      case "next":
        this.currentIndex = this.currentIndex + 1;
        var Infosis = this.speakableData[this.currentIndex];
        var script = "Hello Client, This is captured for Infosis where day is ";
        script += Infosis[0]
          + "and low price is " + Infosis[1]
          + "and close price is " + Infosis[2]
          + "and open price is " + Infosis[3]
          + "and high price is " + Infosis[4]
          + "That's It. Thank you so much."
        break;

      case "prev":
        this.currentIndex = this.currentIndex - 1;
        var Infosis = this.speakableData[this.currentIndex];
        var script = "Hello Client, This is captured for Infosis where day is ";
        script += Infosis[0]
          + "and low price is " + Infosis[1]
          + "and close price is " + Infosis[2]
          + "and open price is " + Infosis[3]
          + "and high price is " + Infosis[4]
          + "That's It. Thank you so much."
        break;
    }

    var msg = new SpeechSynthesisUtterance(script);
    window.speechSynthesis.speak(msg);
  }

  stopGraph() {
    window.speechSynthesis.cancel();
  }






}