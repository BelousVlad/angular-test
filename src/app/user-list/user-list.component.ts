import { Component, OnInit } from '@angular/core';
import { User } from '../domain-model/user';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users!: Array<User>
  constructor(private usersService: UsersService) { }

  private getUsers()
  {
    this.usersService.getUsers().subscribe(users => this.users = users)
  }
  ngOnInit(): void {
    this.getUsers()
  }
}
