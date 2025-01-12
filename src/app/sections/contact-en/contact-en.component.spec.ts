import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactComponentEn } from './contact-en.component';

describe('ContactComponent', () => {
  let component: ContactComponentEn;
  let fixture: ComponentFixture<ContactComponentEn>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactComponentEn]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactComponentEn);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
