import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutComponentEn } from './about-en.component';

describe('AboutComponent', () => {
  let component: AboutComponentEn;
  let fixture: ComponentFixture<AboutComponentEn>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutComponentEn]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutComponentEn);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
