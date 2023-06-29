import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private _users: User[] = [];

  constructor(
    private http: HttpClient
  ) {
    this.getUsers();
  }

  get users() {
    return this._users;
  }

  private set users(users) {
    console.log('someone updated users', users);
    this._users = users;
  }

  private getUsers() {
    this.http.get<User[]>('https://jsonplaceholder.typicode.com/users').subscribe(data => {
      console.log(data);
      this.users = data;
    });
  }

  getFilteredUsers(searchTerm: string) {
    return this.users.filter((user) => user.name.includes(searchTerm));
  }
}
