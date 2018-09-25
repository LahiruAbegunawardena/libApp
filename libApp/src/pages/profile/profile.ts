import { BooksPage } from './../books/books';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, AlertController } from 'ionic-angular';
import { BorrowsPage } from '../borrows/borrows';

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  user:any; 


  usrstr= {
    unm:'', nm:'', pwd:''
  };

  books = [
    ["b001", "Grass for my feet", "Leo Tolstoy",2],
    ["b002", "Les Miserable", "Hugo", 3],
    ["b003", "Tales of the two cities", "Charles Dickens", 3],
    ["b004", "adefsrdfg", "rtdb veb", 3]

  ];

  books2 = [];

  brwdett=[];

  
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public viewCtrl: ViewController, public alerCtrl: AlertController) {

      if(this.user==null){
        this.user = this.navParams.get('user');
        this.books2 = this.books;
        this.brwdett = [];

        this.usrstr.nm = this.user.nm;
        this.usrstr.unm = this.user.unm;
        this.usrstr.pwd = this.user.pwd;

      }else{
        this.user = this.navParams.get('user');
        this.books2 = this.navParams.get('bkdet');
        this.brwdett = this.navParams.get('brwdet');

        // this.usrstr.nm = this.user.nm;
        // this.usrstr.unm = this.user.unm;
        // this.usrstr.pwd = this.user.pwd;

        console.log("Came back to profile page with brw details...");
        console.log(this.books2, this.brwdett, this.usrstr);
      }
  }
      
  
  ionViewWillEnter(){
    
    this.viewCtrl.showBackButton(false);
  }

  ionViewDidLoad() {    
    console.log('ionViewDidLoad ProfilePage');

    // let alert = this.alerCtrl.create({
    //   title: 'Login successfully..',
    //   //message: 'Your friend, Obi wan Kenobi, just approved your friend request!',
    //   message: "You are loggged in as "+ this.usrstr.nm,
    //   buttons: ['Ok']
    // });
    // alert.present();
  }

  popView(){
    // this.viewCtrl.dismiss();
    this.navCtrl.pop();
    // this.navCtrl.popTo(HomePage);
  }

  bkView(){
    this.navCtrl.push(BooksPage, {
      bk:this.books2,
      usr:this.usrstr
    });
  }

  brvView(){
    this.navCtrl.push(BorrowsPage, {
      br:this.brwdett
    });
  }
}