import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WpService } from '@app/@services/wp.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  id: any;
  isPhonePortrait = false;
  isPhoneLandscape = false;
  blog: any;
  constructor(public wpService: WpService, private router: Router, private activatedroute:ActivatedRoute) { }

  ngOnInit(): void {
    this.id=this.activatedroute.snapshot.paramMap.get("postid");
    this.getPost();
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
getPost(){
  this.wpService.getPost(this.id).subscribe((response:any) => {
    console.log(response);
    // this.loading = fa lse;
    // this.blogMain = response.slice(0,1);
    this.blog = response;
  });
}
}
