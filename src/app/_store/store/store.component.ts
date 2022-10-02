import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '@app/@services/data.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss'],
})
export class StoreComponent implements OnInit {
  products: any;
  isMobilePortrait= false;
  constructor(private dataService: DataService, private router: Router) {}

  ngOnInit(): void {
    const screensize$ = sessionStorage.getItem('screen')?.toLowerCase();
    if(screensize$ === 'handsetportrait') this.isMobilePortrait = true;
    this.getCatalog();
  }

  private getCatalog() {
    this.dataService.getProducts().subscribe((products$) => {
      this.products = products$.default;
      console.log(this.products);
    });
  }
  onOpenProduct(sku: string){
    console.log('sku', sku)
    this.router.navigateByUrl('/Store/product/' + sku);
  }
}
