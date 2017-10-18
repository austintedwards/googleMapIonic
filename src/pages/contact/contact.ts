import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GoogleMap, GoogleMaps } from '@ionic-native/google-maps';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController, public googleMaps: GoogleMaps) {

  }

  ngAfterViewInit() {
    this.loadMap();
  }

  loadMap() {
    let element = document.getElementById('map');
    let map = new GoogleMap(element, {});
    }
}
