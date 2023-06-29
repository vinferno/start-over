import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-user-by-id',
  templateUrl: './user-by-id.component.html',
  styleUrls: ['./user-by-id.component.scss']
})
export class UserByIdComponent implements OnInit {

  @Input() userId!: number;

  constructor(private userService: UsersService) { }

  ngOnInit(): void {
  }

  get user() {
    return this.userService.users.find((user) => user.id === this.userId);
  }

}
