import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.scss']
})
export class AboutusComponent implements OnInit {
  isPhonePortrait = false;
  isPhoneLandscape = false;
  constructor() { }

  ngOnInit(): void {
    const screensize$ = sessionStorage.getItem('screen')?.toLowerCase();
    console.log(screensize$);
    this.isPhonePortrait = false;
    this.isPhoneLandscape = false;
    switch (screensize$) {
      case 'handsetportrait':
        this.isPhonePortrait = true;
        break;

      default:
        break;
    }
  }

}
