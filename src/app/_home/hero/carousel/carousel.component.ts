import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  activePanel = 1;
  startIndex = 1;
  constructor() { }

  ngOnInit(): void {
   this.repeat();
  }
  isActive(panel: number) {
    return panel === this.activePanel ? 'checked' : '';
  }
  public repeat() {
    setTimeout(() => {
      this.__FunctionSlide();
      this.repeat();
    }, 12000);
  }
  public __FunctionSlide() {
    const slides = Array.from(document.getElementsByClassName('carousel__slide'));
    console.log(slides);
    if (slides === []) {
      // this.repeat();
    }
    for (const x of slides) {
      const y = x as HTMLElement;
      y.style.opacity = '0';
    }
    if (this.startIndex > slides.length - 1) {
      this.startIndex = 1;
      this.activePanel = 1;
      const slide = slides[this.startIndex] as HTMLElement;
      slide.style.opacity = '100';
      this.startIndex++;
      this.activePanel++;
    } else {
      const slide = slides[this.startIndex] as HTMLElement;
      slide.style.opacity = '100';
      this.startIndex++;
      this.activePanel++;
    }
  }
}
