import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {
  activePanel = 0;
  startIndex = 0;
  constructor() { }

  ngOnInit(): void {
    // this.repeat();
  }
  isActive(panel: number) {
    return panel === this.activePanel ? 'checked' : '';
  }
  public repeat() {
    setTimeout(() => {
      this.__FunctionSlide();
      this.repeat();
    }, 5000);
  }
  public __FunctionSlide() {
    const slides = Array.from(document.getElementsByClassName('carousel-item'));
    if (slides === []) {
      // this.repeat();
    }
    for (const x of slides) {
      const y = x as HTMLElement;
      y.style.opacity = '0';
    }
    if (this.startIndex > slides.length - 1) {
      this.startIndex = 0;
      this.activePanel = 0;
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
