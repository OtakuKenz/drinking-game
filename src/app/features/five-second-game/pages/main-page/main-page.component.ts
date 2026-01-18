import { Component, OnInit, ViewChild } from '@angular/core';
import { fiveSecondPrompts, Prompt } from '../../constants/questions.constants';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { TimerComponent } from '../../../../shared/component/timer/timer.component';
import { MatInputModule } from '@angular/material/input';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';

@Component({
  selector: 'app-main-page',
  imports: [MatCardModule, MatButtonModule, MatButtonModule, TimerComponent, MatInputModule, ReactiveFormsModule, FormsModule, MatFormFieldModule, MatGridListModule],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css',
})
export class MainPageComponent implements OnInit {

  availableQuestions: Prompt[] = [];
  answeredQuestion: Prompt[] = [];

  question: Prompt | undefined;
  displayTimer = false;
  showNext = false;

  timerDuration = 5;

  timerFormControl = new FormControl('5', [Validators.required, Validators.min(1), Validators.max(60)]);

  @ViewChild("timer")
  timerComponent: TimerComponent | undefined;

  ngOnInit(): void {
    this.availableQuestions = [...fiveSecondPrompts];
  }

  private getQuestion(): Prompt {
    const randomIndex = Math.floor(Math.random() * this.availableQuestions.length);
    return { ...this.availableQuestions[randomIndex] };
  }

  private moveQuestionToAnswered(question: Prompt) {
    let index = this.availableQuestions.findIndex(z => z.id === question.id);
    this.availableQuestions.splice(index, 1);
    this.answeredQuestion.push(question);
  }

  pickQuestion() {
    this.timerComponent?.resetState();
    this.question = this.getQuestion();
    this.showNext = false;
  }

  timeUp() {
    this.showNext = true;
    if (this.question) {
      this.moveQuestionToAnswered(this.question);
    }
  }

  setTimerDuration(){
    if (!this.timerFormControl.valid) {
      return;
    }
    let inputValue = this.timerFormControl.value;
    this.timerDuration = Number(inputValue);
    this.pickQuestion();
  }

}
