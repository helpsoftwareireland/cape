import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private responsive: BreakpointObserver) {}

  ngOnInit(): void {
    // this.responsive
    //   .observe([
    //     Breakpoints.Handset,
    //     Breakpoints.HandsetLandscape,
    //     Breakpoints.HandsetPortrait,
    //   ])
    //   .subscribe((result) => {
    //     console.log(result.breakpoints);
    //     if (result.matches) {
    //       console.log('screens matches Handset');
    //       const breakpoint$ = Object.keys(
    //         Object.fromEntries(
    //           Object.entries(result.breakpoints).filter(
    //             ([key, value]) => value === true
    //           )
    //         )
    //       ).toString();
    //       sessionStorage.setItem('screen', breakpoint$);
    //     } else {
    //       console.log('not matching');
    //     }
    //   });

    this.responsive
      .observe([
        Breakpoints.TabletPortrait,
        Breakpoints.HandsetPortrait,
        Breakpoints.TabletLandscape,
        Breakpoints.HandsetLandscape,
      ])
      .subscribe((result) => {
        const breakpoints = result.breakpoints;
        let screensize$: string ='';
        if (breakpoints[Breakpoints.TabletPortrait]) {
          screensize$ = 'TabletPortrait';
        } else if (breakpoints[Breakpoints.HandsetPortrait]) {
          screensize$ = 'HandsetPortrait';
        } else if (breakpoints[Breakpoints.HandsetLandscape]) {
          screensize$ = 'HandsetLandscape';
        } else if (breakpoints[Breakpoints.TabletLandscape]) {
          screensize$ = 'TabletLandscape';
        }
        console.log(screensize$);
        sessionStorage.setItem('screen', screensize$);
      });

    //     console.log('Web ' + Breakpoints.Web);
    // console.log('WebLandscape ' + Breakpoints.WebLandscape);
    // console.log('WebPortrait ' + Breakpoints.WebPortrait);

    // console.log('Tablet ' + Breakpoints.Tablet);
    // console.log('TabletPortrait ' + Breakpoints.TabletPortrait);
    // console.log('TabletLandscape ' + Breakpoints.TabletLandscape);

    // console.log('Handset ' + Breakpoints.Handset);
    // console.log('HandsetLandscape ' + Breakpoints.HandsetLandscape);
    // console.log('HandsetPortrait ' + Breakpoints.HandsetPortrait);

    // console.log('XSmall ' + Breakpoints.XSmall);
    // console.log('Small ' + Breakpoints.Small);
    // console.log('Medium ' + Breakpoints.Medium);
    // console.log('Large ' + Breakpoints.Large);
    // console.log('XLarge ' + Breakpoints.XLarge);
  }
}
