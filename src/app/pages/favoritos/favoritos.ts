import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardLivroComponent } from '../../components/card-livro/card-livro';
import { FavoritosService } from '../../services/favoritos.service';

@Component({
  selector: 'app-favoritos',
  standalone: true,
  imports: [CommonModule, CardLivroComponent],
  templateUrl: './favoritos.html'
})
export class FavoritosComponent {

  constructor(public favoritosService: FavoritosService) {}

  remover(livro: any) {
    this.favoritosService.remover(livro);
  }
}