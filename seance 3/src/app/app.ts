import { Component, signal, computed } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  // 1. SIGNAL t
  compteur = signal(0);

  // 2. COMPUTED
  double = computed(() => this.compteur() * 2);

  // 3. UPDATE
  incrementer(): void {
    this.compteur.update(valeur => valeur + 1);
  }

  decrementer(): void {
    this.compteur.update(valeur => valeur - 1);
  }

  // 4. SET
  mettreACent(): void {
    this.compteur.set(100);
  }

  remettreAZero(): void {
    this.compteur.set(0);
  }
}
