import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parts-price',
  templateUrl: './parts-price.component.html',
  styleUrls: ['./parts-price.component.scss']
})
export class PartsPriceComponent implements OnInit {
  public cpuPrice:string;
  public cpuQuantities:number;
  public motherBoardPrice:string;
  public motherBoardQuantities:number;
  public ramPrice:string;
  public ramQuantities:number;
  public HDDPrice:string;
  public HDDQuantities:number;
  public SSDPrice:string;
  public SSDQuantities:number;
  public graphicCardPrice:string;
  public graphicCardQuantities:number;
  public pcCasePrice:string;
  public pcCaseQuantities:number;
  public monitorPrice:string;
  public monitorQuantities:number;
  public OSPrice:string;
  public OSQuantities:number;
  public powerPrice:string;
  public powerQuantities:number;
  public DVDPrice:string;
  public DVDQuantities:number;
  public wifiPrice:string;
  public wifiQuantities:number;
  public othersPrice:string;
  public othersQuantities:number;
  public totalPrice:string;



  constructor() {
    this.cpuPrice="";
    this.cpuQuantities=1;
    this.motherBoardPrice="";
    this.motherBoardQuantities=1;
    this.ramPrice="";
    this.ramQuantities=1;
    this.HDDPrice="";
    this.HDDQuantities=1;
    this.SSDPrice="";
    this.SSDQuantities=1;
    this.graphicCardPrice="";
    this.graphicCardQuantities=1;
    this.pcCasePrice="";
    this.pcCaseQuantities=1;
    this.monitorPrice="";
    this.monitorQuantities=1;

    this.OSPrice="";
    this.OSQuantities=1;

    this.powerPrice="";
    this.powerQuantities=1;
    this.DVDPrice="";
    this.DVDQuantities=1;
    this.othersPrice="";
    this.othersQuantities=1;
    this.wifiPrice="";
    this.wifiQuantities=1;
    this.totalPrice="";

  }

  ngOnInit() {
  }
  cleanData(){
    this.cpuPrice="";
    this.cpuQuantities=1;
    this.motherBoardPrice="";
    this.motherBoardQuantities=1;
    this.ramPrice="";
    this.ramQuantities=1;
    this.HDDPrice="";
    this.HDDQuantities=1;
    this.SSDPrice="";
    this.SSDQuantities=1;
    this.graphicCardPrice="";
    this.graphicCardQuantities=1;
    this.pcCasePrice="";
    this.pcCaseQuantities=1;
    this.monitorPrice="";
    this.monitorQuantities=1;

    this.OSPrice="";
    this.OSQuantities=1;

    this.powerPrice="";
    this.powerQuantities=1;
    this.DVDPrice="";
    this.DVDQuantities=1;
    this.othersPrice="";
    this.othersQuantities=1;
    this.wifiPrice="";
    this.wifiQuantities=1;
    this.totalPrice="";


  }

  sumTotal(){
    let cpuTotal= Number(this.cpuPrice)*this.cpuQuantities;
    let motherBoardTotal=Number(this.motherBoardPrice)*this.motherBoardQuantities;
    let ramTotal=Number(this.ramPrice)*this.ramQuantities;
    let dvdTotal=Number(this.DVDPrice)*this.DVDQuantities;
    let HDDTotal = Number(this.HDDPrice)*this.HDDQuantities;
    let SSDTotal= Number(this.SSDPrice)*this.SSDQuantities;
    let graphicCardTotal= Number(this.graphicCardPrice)*this.graphicCardQuantities;
    let caseTotal= Number(this.pcCasePrice)*this.pcCaseQuantities;
    let monitorTotal= Number(this.monitorPrice)*this.monitorQuantities;
    let osTotal= Number(this.OSPrice)*this.OSQuantities;
    let powerTotal= Number(this.powerPrice)*this.powerQuantities;
    let wifiTotal= Number(this.wifiPrice)*this.wifiQuantities;
    let othersTotal= Number(this.othersPrice)*this.othersQuantities;
    let total= cpuTotal+motherBoardTotal+ramTotal+dvdTotal+HDDTotal+SSDTotal+graphicCardTotal+caseTotal+monitorTotal+osTotal+powerTotal+wifiTotal+othersTotal;

    this.totalPrice=total.toString();

  }
  onChange($event){

    this.sumTotal();
  }

}
