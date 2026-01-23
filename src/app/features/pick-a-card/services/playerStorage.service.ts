import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root' 
})
export class PlayerStorageService {
  private key = 'pickACardGame';

  save(players: string[]) {
    localStorage.setItem(this.key, JSON.stringify(players));
  }

  load(): string[] | null {
    const raw = localStorage.getItem(this.key);
    return raw ? JSON.parse(raw) : null;
  }

  clear() {
    localStorage.removeItem(this.key);
  }
}