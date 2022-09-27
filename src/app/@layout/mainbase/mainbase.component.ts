import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mainbase',
  templateUrl: './mainbase.component.html',
  styleUrls: ['./mainbase.component.scss']
})
export class MainbaseComponent implements OnInit {
  isMobilePortrait= false;

  constructor() { }

  ngOnInit(): void {
    const screensize$ = sessionStorage.getItem('screen')?.toLowerCase();
    if(screensize$ === 'handsetportrait') this.isMobilePortrait = true;
  }

}
