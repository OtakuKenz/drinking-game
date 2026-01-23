import { Component, EventEmitter, Injectable, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatCard, MatCardContent, MatCardModule } from "@angular/material/card";
import { MatFormField, MatLabel, MatError, MatInputModule } from "@angular/material/input";
import { MatList, MatListItem } from "@angular/material/list";
import { MatIcon } from "@angular/material/icon";
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { PlayerStorageService } from '../../services/playerStorage.service';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-players',
  imports: [MatCard, MatCardContent, MatFormField, MatLabel, MatError, MatList, MatListItem, MatIcon, ReactiveFormsModule, CommonModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatCardModule],
  templateUrl: './players.component.html',
  styleUrl: './players.component.css',
})
export class PlayersComponent implements OnInit {

  @Input()
  players: string[] = [];

  @Output()
  addPlayer: EventEmitter<string> = new EventEmitter<string>();

  @Output()
  removePlayer: EventEmitter<number> = new EventEmitter<number>();

  playersForm = new FormGroup({
    playerName: new FormControl('', Validators.required)
  });

  constructor(private playerStorageService: PlayerStorageService) {
  }

  ngOnInit(): void {
    this.players = this.playerStorageService.load() ?? [];
  }

  onAddPlayer() {
    if (this.playersForm.valid) {
      const playerName = this.playersForm.get('playerName')?.value;
      if (playerName) {
        this.addPlayer.emit(playerName);
        this.playerStorageService.save(this.players);
        this.playersForm.reset();
      }
    }
  }

  onRemovePlayer(index: number) {
    this.removePlayer.emit(index);
  }
}
