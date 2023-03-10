import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillscompetencesComponent } from './skillscompetences.component';

describe('SkillscompetencesComponent', () => {
  let component: SkillscompetencesComponent;
  let fixture: ComponentFixture<SkillscompetencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillscompetencesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillscompetencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
