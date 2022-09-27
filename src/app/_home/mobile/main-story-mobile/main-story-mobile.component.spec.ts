import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainStoryMobileComponent } from './main-story-mobile.component';

describe('MainStoryMobileComponent', () => {
  let component: MainStoryMobileComponent;
  let fixture: ComponentFixture<MainStoryMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainStoryMobileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainStoryMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
