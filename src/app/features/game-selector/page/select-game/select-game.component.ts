import { Component, inject } from '@angular/core';
import { games } from '../../../../constants/game.constant';
import { MatGridListModule } from '@angular/material/grid-list';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-select-game',
  imports: [MatGridListModule, MatCardModule, MatButtonModule],
  templateUrl: './select-game.component.html',
  styleUrl: './select-game.component.css',
})
export class SelectGameComponent {

  private router = inject(Router)

  readonly avaiableGames = games;

  gameSelected(route: string) {
    this.router.navigate([route]);
  }
}
