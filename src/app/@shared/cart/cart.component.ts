import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '@app/@services/data.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  constructor(private dataService: DataService, private router: Router) {}
  isCartEmpty = false;
  isMobilePortrait= false;
cart: any;

  ngOnInit(): void {
    const screensize$ = sessionStorage.getItem('screen')?.toLowerCase();
    if(screensize$ === 'handsetportrait') this.isMobilePortrait = true;
    this.getCatalog();
  }

  private getCatalog() {
    this.dataService.getProducts().subscribe((products$) => {
      this.cart = products$.default;
    });
  }
  onOpenProduct(sku: string){
    console.log('sku', sku)
    // this.router.navigateByUrl('/Store/product/' + sku);
  }
}
