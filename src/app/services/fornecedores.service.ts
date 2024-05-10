import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Fornecedores } from '../interfaces/fornecedores';

@Injectable({
  providedIn: 'root'
})
export class FornecedoresService {

  private FornecedoresUrl = "http://localhost:3000/fornecedores"
  constructor(private http:HttpClient) {

  }

  //Esta lista virá da API
  fornecedores:Fornecedores[] = [];

  listar():Observable<Fornecedores[]>{
    return this.http.get<Fornecedores[]>(this.FornecedoresUrl) as Observable<Fornecedores[]>
    //return this.Fornecedoress;
  }

  getById(id:string):Observable<Fornecedores>{
    return this.http.get(`${this.FornecedoresUrl}/${id}`) as Observable<Fornecedores>
  }

  remover(id:string){
    // const Fornecedores = this.Fornecedoress.find(c => c.id == id);

    // if(Fornecedores){
    //    const index = this.Fornecedoress.indexOf(Fornecedores);
    //    this.Fornecedoress.splice(index,1);
    // }

    return this.http.delete(`${this.FornecedoresUrl}/${id}`)
  }


  httpHeader =  {
    headers:{
      "Content-Type":"application/json"
    }
  };

  atualizar(Fornecedores:Fornecedores){
    return this.http.put(`${this.FornecedoresUrl}/${Fornecedores.id}`, Fornecedores, this.httpHeader)
  }

  adicionar(Fornecedores:Fornecedores){

    return this.http.post(this.FornecedoresUrl, Fornecedores, this.httpHeader)
  }
}