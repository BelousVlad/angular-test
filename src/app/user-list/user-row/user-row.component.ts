import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/domain-model/user';

@Component({
  selector: 'app-user-row',
  templateUrl: './user-row.component.html',
  styleUrls: ['./user-row.component.css']
})
export class UserRowComponent {
  @Input() user!: User
  constructor() { }
}
