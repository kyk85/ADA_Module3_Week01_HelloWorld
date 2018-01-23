import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,
    public toastCtrl:ToastController,
    public alertCtrl:AlertController) {

  }
  number=0;
  message='';
  increment(){
    this.number++;
    this.message='';
  }

  decrement(){
    if (this.number==0) {
      let toast = this.toastCtrl.create({
        message: 'Error: Number cannot go below 0',
        duration: 1500
      });
      toast.present();
    } else {
      this.number--;
    }
  }

  reset(){
    let confirm = this.alertCtrl.create({
      title: 'Reset counter?',
      message: 'Are you sure you want to reset the counter?',
      buttons: [
        {
          text: 'Yes',
          handler: () => {
            console.log('Yes clicked');
            this.number=0;
            let toast = this.toastCtrl.create({
              message: 'Counter has been successfully reset!',
              duration: 1500
            });
            toast.present();
            
          }
        },
        {
          text: 'No',
          handler: () => {
            console.log('No clicked');
          }
        }
      ]
    });
    confirm.present();
  }
}


