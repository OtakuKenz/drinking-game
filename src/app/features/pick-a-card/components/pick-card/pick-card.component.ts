import { Component, Input, OnInit } from '@angular/core';
import { cardDrinkingGamePrompts, cardGameQuestion } from '../../constants/pick-card.questions.contants';
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

  readonly cardPicker = 'Card Picker';

  initialLoad = true;

  ngOnInit(): void {
    this.availableQuestions = [...cardDrinkingGamePrompts];
  }

  player: string | undefined;

  availableQuestions: cardGameQuestion[] = [];
  answeredQuestion: cardGameQuestion[] = [];

  question: cardGameQuestion | undefined;

  private getQuestion(): cardGameQuestion {
    const randomIndex = Math.floor(Math.random() * this.availableQuestions.length);
    return this.availableQuestions[randomIndex];
  }

  private getPlayer(category: string): string {
    if (['player', 'playerOrGroup'].includes(category)) {
      const randomIndex = Math.floor(Math.random() * this.players.length);
      return this.players[randomIndex];
    }
    return this.cardPicker;
  }

  private moveQuestionToAnswered(question: cardGameQuestion) {
    let index = this.availableQuestions.findIndex(z => z.prompt === question.prompt);
    this.availableQuestions.splice(index, 1);
    this.answeredQuestion.push(question);
  }

  pickQuestion() {
    this.initialLoad = false;
    this.question = this.getQuestion();
    this.player = this.getPlayer(this.question.category);
    this.moveQuestionToAnswered(this.question);
  }
}
