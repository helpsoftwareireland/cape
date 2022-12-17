import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingService } from '@app/@services/loading.service';
import { WpService } from '@app/@services/wp.service';
import { delay } from 'rxjs';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsComponent implements OnInit {
  isPhonePortrait = false;
  isPhoneLandscape = false;
  blogData: any;
  blogMain: any;
  loading: boolean = false;

  constructor(public wpService: WpService, private router: Router,
    private _loading: LoadingService) {}

  ngOnInit(): void {
    this.listenToLoading();
    this.getAllBlog();
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
  listenToLoading(): void {
    this._loading.loadingSub
      .pipe(delay(0)) // This prevents a ExpressionChangedAfterItHasBeenCheckedError for subsequent requests
      .subscribe((loading) => {
        this.loading = loading;
        console.log('loading');
      });
  }
  getAllBlog() {
    // this.loading = true;
    this.wpService.getBlog().subscribe((response:any) => {
      console.log(response);
      // this.loading = false;
      this.blogMain = response.slice(0,1);
      this.blogData = response;
    });
  }
  openPost(index:number){
    this.router.navigate(['/News/post',index]);
  }
}
