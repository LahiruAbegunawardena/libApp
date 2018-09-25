import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the LsttryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lsttry',
  templateUrl: 'lsttry.html',
})
export class LsttryPage {

  
  aaa_str : string;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public viewCtrl: ViewController) {
    this.aaa_str = this.navParams.get('aaa');
    console.log("trial data passed : " + this.aaa_str);
  }
  
  ionViewWillEnter(){
    this.viewCtrl.showBackButton(true);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LsttryPage');
  }

}
