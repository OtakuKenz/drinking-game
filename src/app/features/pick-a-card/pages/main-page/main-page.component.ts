import { Component, OnInit } from '@angular/core';
import { PlayerStorageService } from '../../services/playerStorage.service';
import { MatButtonModule } from '@angular/material/button';
import { PickCardComponent } from "../../components/pick-card/pick-card.component";
import { MatExpansionModule } from '@angular/material/expansion';
import { PlayersComponent } from "../../components/players/players.component";
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-main-page',
  imports: [MatButtonModule, PickCardComponent, MatExpansionModule, PlayersComponent, MatCardModule],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css',
})
export class MainPageComponent implements OnInit {

  players: string[] = [];

  constructor(private playerStorageService: PlayerStorageService) {
  }

  ngOnInit(): void {
    this.players = this.playerStorageService.load() ?? [];
  }

  onAddPlayer(playerName: string) {
    this.players.push(playerName);
    this.players = [...this.players];
    this.savePlayers();
  }

  onRemovePlayer(index: number) {
    this.players.splice(index, 1);
    this.playerStorageService.save(this.players);
    this.players = [...this.players];
    this.savePlayers();
  }

  private savePlayers() {
    this.playerStorageService.save(this.players);
  }
}
