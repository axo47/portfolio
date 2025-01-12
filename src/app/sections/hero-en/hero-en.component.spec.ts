import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroComponentEn } from './hero-en.component';

describe('HeroComponent', () => {
  let component: HeroComponentEn;
  let fixture: ComponentFixture<HeroComponentEn>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroComponentEn]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroComponentEn);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
