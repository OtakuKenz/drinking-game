import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadComponent: () => import('./features/game-selector/pages/select-game/select-game.component').then(m => m.SelectGameComponent) },
  { path: '5-second-game', loadComponent: () => import('./features/five-second-game/pages/main-page/main-page.component').then(m => m.MainPageComponent) },
  { path: 'never-have-i-ever', loadComponent: () => import('./features/never-have-i-ever/pages/main-page/main-page.component').then(m => m.MainPageComponent) },
  { path: 'pick-a-card', loadComponent: () => import('./features/pick-a-card/pages/main-page/main-page.component').then(m => m.MainPageComponent) }
];