import { Component, Input, OnInit } from '@angular/core';
import { cardDrinkingGamePrompts } from '../../constants/pick-card.questions.contants';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-pick-card',
  imports: [MatButtonModule, MatCardModule],
  templateUrl: './pick-card.component.html',
  styleUrl: './pick-card.component.css',
})
export class PickCardComponent implements OnInit {

  @Input()
  players: string[] = [];

  initialLoad = true;

  ngOnInit(): void {
    this.availableQuestions = [...cardDrinkingGamePrompts];
  }

  player: string | undefined;

  availableQuestions: string[] = [];
  answeredQuestion: string[] = [];

  question: string | undefined;

  private getQuestion(): string {
    const randomIndex = Math.floor(Math.random() * this.availableQuestions.length);
    return this.availableQuestions[randomIndex];
  }

  private getPlayer(): string {
    const randomIndex = Math.floor(Math.random() * this.players.length);
    return this.players[randomIndex];
  }

  private moveQuestionToAnswered(question: string) {
    let index = this.availableQuestions.findIndex(z => z === question);
    this.availableQuestions.splice(index, 1);
    this.answeredQuestion.push(question);
  }

  pickQuestion() {
    this.initialLoad = false;
    this.question = this.getQuestion();
    this.player = this.getPlayer();
    this.moveQuestionToAnswered(this.question);
  }
}
