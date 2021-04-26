import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  styleUrls: ['home.css']
})
export class HomePage {
  Volume_M: number;
  Volume_L:number; 
  Cost_A: number;
  Cost_B: number;
  UnitPrice_A: number;
  UnitPrice_B: number; 
  Savings: number;



  constructor(public navCtrl: NavController) {}

computeCALUMATE() {
  this.UnitPrice_A = (this.Cost_A/this.Volume_M)*1000;
  this.UnitPrice_B = this.Cost_B/this.Volume_L; 
  this.Savings = this.UnitPrice_B - this.UnitPrice_A;
 
  }
}  

