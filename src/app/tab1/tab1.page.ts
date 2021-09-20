import { Component } from '@angular/core';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  public posts: any[] = [];

  constructor(private postsService: PostsService) {
    console.log('construtor');
    //this.buscarPorId();
    this.buscarTodos();
  }

  exibirComentarios(id: number) {
    console.log('Exibindo os comentários do post ', id);
    this.postsService
      .buscarComentarios(id)
      .then((comments: any) => {
        console.log(comments);
      })
      .catch(error => {
        console.log(error);
      });
  }

  buscarPorId() {
    this.postsService
      .buscarPorId(7)
      //SUCESSO
      .then((post: any) => {
        console.log(post);
      })
      //ERRO
      .catch(erro => {
        console.log(erro);
      });
  }

  buscarTodos() {
    this.postsService
      .buscarTodos()
      //SUCESSO
      .then((posts: any) => {
        this.posts = posts;
      })
      //ERRO
      .catch(erro => {
        console.log('erro');
      });
  }
}
