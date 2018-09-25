import { ProfilePage } from './../profile/profile';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public loadingCtrl: LoadingController, public navCtrl: NavController, public navParams: NavParams, public alerCtrl: AlertController) {
  }


  unm = ["001", "002", "003", "004", "005"];
  pwd = ["123", "424", "435", "221", "214"];
  user = ["LAHIRU", "afgsd", "sgrd", "defwg", "ewre"];

  usr = {
    unm:"",
    pwd:""
  }

  lgdusr = {
    unm:"", pwd:"", nm:""
  }

  // userParams:string;
  
  ionViewWillEnter(){
    // this.viewCtrl.showBackButton(false);

    this.usr.unm = this.usr.pwd="";
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  lgn(usr:any){

    for (let index = 0; index < this.unm.length; index++) {
      //const element = array[index];
      if(this.unm[index] == usr.unm){
        console.log("username matches..");
        
        if(this.pwd[index] == usr.pwd){
          console.log("Password matches..");
          console.log("You are loggged in as "+ this.user[index]);

          this.lgdusr.unm = usr.unm;
          this.lgdusr.pwd = usr.pwd;
          this.lgdusr.nm = this.user[index];
          
          const loader = this.loadingCtrl.create({
            content: "Logging as "+ this.lgdusr.nm +"...",
            duration: 1500
          });
          loader.present();

          console.log(this.navCtrl.push(ProfilePage, {
            user:this.lgdusr
          }));         
          
        }else{
          console.log("Password doesnt match..");
        }
        break;
      }else{
        if(index==(this.unm.length-1)){

          console.log("Username doesn't match..");
          
          let alert = this.alerCtrl.create({
            title: 'Login failed..',
            //message: 'Your friend, Obi wan Kenobi, just approved your friend request!',
            message: "Username doesn't match..",
            buttons: ['Ok']
          });
          alert.present();


        }
      }
    } 

  }
}