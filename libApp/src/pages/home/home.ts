import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LsttryPage } from '../lsttry/lsttry';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  goon(){
    this.navCtrl.push(LsttryPage, {aaa:"aesd"});
  }

}
