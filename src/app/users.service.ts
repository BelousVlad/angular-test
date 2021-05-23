import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http' 
import { User } from './domain-model/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  getUsers()
  {
    return this.http.get<Array<User>>('https://jsonplaceholder.typicode.com/users')
  }
}
