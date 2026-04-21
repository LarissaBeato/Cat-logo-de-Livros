import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoritosService {

  favoritos: any[] = [];

  adicionar(livro: any) {
    if (!this.favoritos.includes(livro)) {
      this.favoritos.push(livro);
    }
  }

  remover(livro: any) {
    this.favoritos = this.favoritos.filter(l => l !== livro);
  }

  listar() {
    return this.favoritos;
  }
}