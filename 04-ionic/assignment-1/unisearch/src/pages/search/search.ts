import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { UniService } from '../../providers/uni-service';

/*
  Generated class for the Search page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})
export class SearchPage {
  searchList: any;
  inputName = "";

  constructor(public navCtrl: NavController, public navParams: NavParams, private uniService: UniService) { }

  ionViewDidLoad() {
  }

  onSubmit() {
    this.getList(this.inputName);
    this.inputName = "";
  }

  reset() {
    this.inputName = '';
    this.searchList = '';
  }

  getList(name) {
    this.uniService.uniSearch(name).subscribe(res => {
      this.searchList = res;
    });
  }

}
