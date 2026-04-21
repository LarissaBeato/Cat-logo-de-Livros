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
      titulo: 'Harry-Potter',
      autor: 'J. K. Rowling',
      genero: 'Fantasia',
      resumo: 'Harry descobre que é um bruxo e inicia sua jornada em Hogwarts.',
    },
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
    },
    {
      titulo: 'Diário de um Banana: Rodrick é o Cara',
      autor: 'Jeff Kinney',
      genero: 'Comédia',
      resumo: 'Greg tenta lidar com seu irmão Rodrick, que guarda um segredo embaraçoso e vive implicando com ele.',
    }
  ];

  adicionarFavorito(livro: any) {
    this.favoritosService.adicionar(livro);
  }

  removerFavorito(livro: any) {
    this.favoritosService.remover(livro);
  }
}