import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';
import { App } from '@capacitor/app';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private inAppBrowser: InAppBrowser) { }

  ngOnInit(): void {
    const browser = this.inAppBrowser.create('https://front-app-notas.vercel.app/',
      '_self',
      'location=no,hideurlbar=true, hidenavigationbuttons=true,zoom=no');
    browser.on("exit").subscribe((evt) => {
      App.exitApp();
    })
  }

}
