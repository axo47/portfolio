import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsComponentEn } from './projects-en.component';

describe('ProjectsComponent', () => {
  let component: ProjectsComponentEn;
  let fixture: ComponentFixture<ProjectsComponentEn>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectsComponentEn]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectsComponentEn);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
