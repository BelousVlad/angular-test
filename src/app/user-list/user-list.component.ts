import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { User } from '../domain-model/user';
import { HoverTitleComponent } from '../hover-title/hover-title.component';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit, AfterViewInit {

  @ViewChild(HoverTitleComponent)
  titleElement: HoverTitleComponent<User> | undefined
  titleLeft: number = 0
  titleTop: number = 0

  users!: Array<User>
  currentHoverUser: User | null = null
  

  constructor(private usersService: UsersService) { }

  private getUsers()
  {
    this.usersService.getUsers().subscribe((users: Array<User>) => {
      this.users = users
    })
  }

  onHover(event: MouseEvent, user: User)
  {
    let target: HTMLElement = event.currentTarget as HTMLElement;

    this.titleLeft = event.x;
    this.titleTop = target.offsetTop + target.offsetHeight;
    this.currentHoverUser = user;
  }

  onMouseEnter(event: MouseEvent)
  {
    this.titleLeft = event.x;
    this.titleTop = event.y;
  }
  onMouseOut()
  {

  }

  onMouseTableOut()
  {
    this.currentHoverUser = null;
  }

  onClick()
  {
    this.titleElement?.setTop(0);
  }

  ngOnInit(): void {
    this.getUsers()
  }
  
  ngAfterViewInit(): void {
    
  }

}
