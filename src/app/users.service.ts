import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './domain-model/user';

import { first, map } from 'rxjs/operators';
import { Address } from './domain-model/Address';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  getUsers()
  {
    return this.http.get<any>('https://jsonplaceholder.typicode.com/users')
      .pipe(
        // first()
        map(item => {
            return item.map((el: any) => new User(el.id, el.name, el.username, new Address(el.address.street, el.address.suite, el.address.city)))
          })
      )
  }
}
