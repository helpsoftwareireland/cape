import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '@app/@services/data.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  product: any;
  isMobilePortrait = false;
  sub: any;
  route: any;
  sku: any;
  constructor(
    private activatedroute: ActivatedRoute,
    private dataService: DataService
  ) {
    this.sub = this.activatedroute.paramMap.subscribe((params) => {
      this.sku = params.get('sku');
    });
  }

  ngOnInit(): void {
    const screensize$ = sessionStorage.getItem('screen')?.toLowerCase();
    if (screensize$ === 'handsetportrait') this.isMobilePortrait = true;

    this.getProduct();
  }
  getProduct() {
    this.dataService.getProducts().subscribe((products$) => {
      const products = products$.default;
      const singleProduct = products.filter((p: any) => p.sku === this.sku);
      if(singleProduct){
      this.product = singleProduct[0];
      }
      else {
        this.product=null;
      }
    });
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
