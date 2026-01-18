import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadComponent: () => import('./features/game-selector/page/select-game/select-game.component').then(m => m.SelectGameComponent) },
  { path: '5-second-game', loadComponent: () => import('./features/five-second-game/pages/main-page/main-page.component').then(m => m.MainPageComponent) }
];