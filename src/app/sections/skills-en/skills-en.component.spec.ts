import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsComponentEn } from './skills-en.component';

describe('SkillsComponent', () => {
  let component: SkillsComponentEn;
  let fixture: ComponentFixture<SkillsComponentEn>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillsComponentEn]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillsComponentEn);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
