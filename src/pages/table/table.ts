import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TablePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-table',
  templateUrl: 'table.html',
})
export class TablePage {
  
  restaurants = [
    {name: "Chillis",
    rating: 4.5,
    img:""},
    {name: "KFC",
    rating: 7.5,
    img:""},
    {name: "Fish&Co.",
    rating: 6.5,
    img:""},
    {name: "McDs",
    rating: 3.5,
    img:""}
  ]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TablePage');
  }

}
