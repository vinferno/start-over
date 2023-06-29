import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent {
  public searchTerm = '';
  constructor(private usersService: UsersService) { }
  get users() {
    return this.usersService.getFilteredUsers(this.searchTerm);
  }
}
