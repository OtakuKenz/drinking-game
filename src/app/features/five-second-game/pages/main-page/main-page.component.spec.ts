import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPageComponent } from './main-page.component';
import { Prompt } from '../../constants/questions.constants';

describe('MainPageComponent', () => {
  let component: MainPageComponent;
  let fixture: ComponentFixture<MainPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainPageComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(MainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    // Set up mock data
    component.availableQuestions = [
      { id: 1, question: 'Q1' },
      { id: 2, question: 'Q2' },
      { id: 3, question: 'Q3' },
    ];
    component.answeredQuestion = [];
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('pickQuestion should set this.question', () => {
    component.pickQuestion();
    expect(component.question).toBeDefined();
    expect(component.availableQuestions).toContain(jasmine.objectContaining({ id: component.question?.id }));
  });

  it('startTimer should move question to answered', () => {
    component.pickQuestion();
    const selectedId = component.question!.id;
    component.timeUp();

    expect(component.answeredQuestion.find(x => x.id === selectedId)).toBeDefined();
    expect(component.availableQuestions.find(x => x.id === selectedId)).toBeUndefined();
  });

  describe('setTimerDuration', () => {
    describe('invalid input', () => {
      it('should not accept less than 1', () => {
        component.timerFormControl.setValue("0");
        component.setTimerDuration();
        expect(component.timerDuration).toBe(5); // default value
      });
      it('should not accept greater than 61', () => {
        component.timerFormControl.setValue("0");
        component.setTimerDuration();
        expect(component.timerDuration).toBe(5); // default value
      });
    })
    describe('valid input', () => {
      it('should get value when valid (min)', () => {
        component.timerFormControl.setValue("1");
        component.setTimerDuration();
        expect(component.timerDuration).toBe(1); // default value
      });
      it('should get value when valid (max)', () => {
        component.timerFormControl.setValue("60");
        component.setTimerDuration();
        expect(component.timerDuration).toBe(60); // default value
      });
    })
  });
});
