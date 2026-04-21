import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardLivroComponent } from '../../components/card-livro/card-livro';
import { FavoritosService } from '../../services/favoritos.service';

@Component({
  selector: 'app-listagem',
  standalone: true,
  imports: [CommonModule, CardLivroComponent],
  templateUrl: './listagem.html'
})
export class ListagemComponent {

  constructor(private favoritosService: FavoritosService) {}

  livros = [
    {
      titulo: 'Dom Casmurro',
      autor: 'Machado de Assis',
      genero: 'Romance',
      resumo: 'História de Bentinho e Capitu.'
    },
    {
      titulo: '1984',
      autor: 'George Orwell',
      genero: 'Distopia',
      resumo: 'Um futuro controlado pelo governo.'
    }
  ];

  adicionarFavorito(livro: any) {
    this.favoritosService.adicionar(livro);
  }

  removerFavorito(livro: any) {
    this.favoritosService.remover(livro);
  }
}