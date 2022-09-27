import { AfterViewInit, Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, AfterViewInit {
  isPhonePortrait = false;
  isPhoneLandscape = false;
  constructor() {}
  ngAfterViewInit(): void {

  }

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
