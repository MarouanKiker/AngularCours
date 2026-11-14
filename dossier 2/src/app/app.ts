import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title: string = "TaskFlow";
  changeTitre(nouveauTitre: string): void {
    this.title = nouveauTitre;

  }
  supprimerTitre() {
    this.title = ""

  }
  taches: string[] = [
    'Apprendre le data binding',
    'Créer la liste de tâches',
    'Tester l\'état vide'
  ];


  viderTaches(): void {
    this.taches = [];
  }


  reinitialiserTaches(): void {
    this.taches = [
      'Apprendre le data binding',
      'Créer la liste de tâches',
      'Tester l\'état vide'
    ];
  }
}
