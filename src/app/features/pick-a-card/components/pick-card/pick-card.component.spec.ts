import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PickCardComponent } from './pick-card.component';
import { cardDrinkingGamePrompts } from '../../constants/pick-card.questions.contants';

describe('PickCardComponent', () => {
  let component: PickCardComponent;
  let fixture: ComponentFixture<PickCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [PickCardComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(PickCardComponent);
    component = fixture.componentInstance;

    // Provide some test players
    component.players = ['Alice', 'Bob', 'Charlie'];
  });

  it('should populate availableQuestions on init', () => {
    component.ngOnInit();

    expect(component.availableQuestions).toEqual(cardDrinkingGamePrompts);
  });

  it('should pick a question and player and move question to answered', () => {
    component.ngOnInit();

    // Mock getQuestion and getPlayer to be deterministic
    spyOn<any>(component, 'getQuestion').and.returnValue(cardDrinkingGamePrompts[0]);
    spyOn<any>(component, 'getPlayer').and.returnValue('Bob');
    spyOn<any>(component, 'moveQuestionToAnswered').and.callThrough();

    component.pickQuestion();

    expect(component.initialLoad).toBeFalse();
    expect(component.question).toBe(cardDrinkingGamePrompts[0]);
    expect(component.player).toBe('Bob');
    expect(component.answeredQuestion).toContain(cardDrinkingGamePrompts[0]);
    expect(component.availableQuestions).not.toContain(cardDrinkingGamePrompts[0]);
    expect((component as any).moveQuestionToAnswered).toHaveBeenCalledWith(cardDrinkingGamePrompts[0]);
  });

  it('should not have picked question in availableQuestions after pick', () => {
    component.ngOnInit();

    spyOn<any>(component, 'getQuestion').and.returnValue(cardDrinkingGamePrompts[1]);
    spyOn<any>(component, 'getPlayer').and.returnValue('Alice');

    component.pickQuestion();

    expect(component.availableQuestions).not.toContain(cardDrinkingGamePrompts[1]);
    expect(component.answeredQuestion).toContain(cardDrinkingGamePrompts[1]);
  });

  it('should change initialLoad flag after pick', () => {
    component.ngOnInit();
    expect(component.initialLoad).toBeTrue();

    spyOn<any>(component, 'getQuestion').and.returnValue(cardDrinkingGamePrompts[0]);
    spyOn<any>(component, 'getPlayer').and.returnValue('Charlie');

    component.pickQuestion();

    expect(component.initialLoad).toBeFalse();
  });
});