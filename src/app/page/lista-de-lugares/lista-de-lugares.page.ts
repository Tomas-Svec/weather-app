import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-lista-de-lugares',
  templateUrl: './lista-de-lugares.page.html',
  styleUrls: ['./lista-de-lugares.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class ListaDeLugaresPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
