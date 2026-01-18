import { Component, OnInit } from '@angular/core';
import { neverHaveIEverQuestions } from '../../constants/never-have-i-ever.questions.constants';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-main-page',
  imports: [MatCardModule, MatButtonModule, MatButtonModule],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css',
})
export class MainPageComponent implements OnInit {


  availableQuestions: string[] = [];
  answeredQuestion: string[] = [];

  question: string | undefined;

  ngOnInit(): void {
    this.availableQuestions = [...neverHaveIEverQuestions];
  }

  private getQuestion(): string {
    const randomIndex = Math.floor(Math.random() * this.availableQuestions.length);
    return this.availableQuestions[randomIndex];
  }

  private moveQuestionToAnswered(question: string) {
    let index = this.availableQuestions.findIndex(z => z === question);
    this.availableQuestions.splice(index, 1);
    this.answeredQuestion.push(question);
  }

  pickQuestion() {
    this.question = this.getQuestion();
    this.moveQuestionToAnswered(this.question);
  }
}
