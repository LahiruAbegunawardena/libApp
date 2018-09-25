import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-borrows',
  templateUrl: 'borrows.html',
})
export class BorrowsPage {

  brr =[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.brr = navParams.get('br');

    console.log(this.brr);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BorrowsPage');
  }

}
