import { ProfilePage } from './../profile/profile';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ViewController } from 'ionic-angular';
import { BorrowsPage } from '../borrows/borrows';

/**
 * Generated class for the BooksPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-books',
  templateUrl: 'books.html',
})
export class BooksPage {

  bkarr:any;
  lgdUser:any;

  brwdbk = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public alerCtrl:AlertController,public viewCtrl:ViewController) {
    this.bkarr = navParams.get('bk');
    this.lgdUser = navParams.get('usr');

    this.bkarr.forEach(element => {
      for (let index = 0; index < element.length; index++) {
        let element2 = element[index];

        console.log(element2);
      }
      console.log("");
    });
  }

  ionViewWillEnter(){
    this.viewCtrl.showBackButton(false);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BooksPage');
    console.log('');
  }

  brw(bk:any, User:any){

   // User = this.lgdUser.nm;

    if(bk[3]>0){

    

      let alert = this.alerCtrl.create({
        title: 'Book borrowed..',
        //message: 'Your friend, Obi wan Kenobi, just approved your friend request!',
        message: bk[1]+ " is borrowed..",
        buttons: ['Ok']
      });
      alert.present();

      bk[3]--;


      this.brwdbk.push([bk[0], bk[1], bk[2], User.nm]);

      console.log("borrowed book details..");
      console.log("");

      this.brwdbk.forEach(element => {
        for (let index = 0; index < element.length; index++) {
          const element2 = element[index];

          // if(index==2){
          //   console.log(element2.nm);
          // }
          // else{
          //   console.log(element2);
          // }

          console.log(element2);
        }
        console.log("");
      });
    
    }else{
      let alert = this.alerCtrl.create({
        title: 'Book borrow cancelled..',
        //message: 'Your friend, Obi wan Kenobi, just approved your friend request!',
        message: "This book is out of stock.. <br>Try again later..",
        buttons: ['Ok']
      });
      alert.present();
    }
  }

  leaveBk(){
    this.navCtrl.push(ProfilePage, {
      bkdet:this.bkarr,
      brwdet:this.brwdbk,
      user:this.lgdUser
    });
    console.log("Got back from Book page.. \nBooks: "+ this.bkarr + "\nBorrows: " + this.brwdbk + "\nUser: "+ this.lgdUser.nm);
  }

  brvView(){
    console.log("Borrows: " + this.brwdbk);

    this.navCtrl.push(BorrowsPage, {
      br:this.brwdbk
    });
  }
}