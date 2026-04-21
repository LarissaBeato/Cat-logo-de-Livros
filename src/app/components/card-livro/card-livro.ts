import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card-livro',
  standalone: true,
  templateUrl: './card-livro.html',
  styleUrl: './card-livro.css'
})
export class CardLivroComponent {
  @Input() livro: any;

  @Output() favoritar = new EventEmitter<any>();
  @Output() remover = new EventEmitter<any>();

  adicionarFavorito() {
    this.favoritar.emit(this.livro);
  }

  removerLivro() {
    this.remover.emit(this.livro);
  }
}
