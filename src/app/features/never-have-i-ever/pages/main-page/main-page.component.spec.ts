import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPageComponent } from './main-page.component';

describe('MainPageComponent', () => {
  let component: MainPageComponent;
  let fixture: ComponentFixture<MainPageComponent>;
  let mockData: string[];

  beforeEach(async () => {
    mockData = [
      "mock question A",
      "mock question B",
      "mock question C",
      "mock question D"
    ];

    await TestBed.configureTestingModule({
      imports: [MainPageComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(MainPageComponent);
    component = fixture.componentInstance
    component.availableQuestions = mockData;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should move available question to answeredQuestion when pickQuestion() called', () => {
    component.pickQuestion();
    let pickedQuestion = component.question;
    expect(component.availableQuestions.find(z=>z === pickedQuestion)).toBeUndefined();
    expect(component.answeredQuestion.find(z=>z === pickedQuestion)).toBeDefined();
  });
});
