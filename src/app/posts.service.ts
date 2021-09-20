import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class PostsService {
  private urlBase: string = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) {}

  buscarTodos() {
    //return this.http.get(this.urlBase).toPromise();

    //Template Strings
    return this.http.get(`${this.urlBase}`).toPromise();
  }

  buscarPorId(id: number) {
    //return this.http.get(this.urlBase + '/' + id).toPromise();

    //Template Strings
    return this.http.get(`${this.urlBase}/${id}`).toPromise();
  }

  buscarComentarios(idPost: number) {
    return this.http.get(`${this.urlBase}/${idPost}/comments`).toPromise();
  }
}
