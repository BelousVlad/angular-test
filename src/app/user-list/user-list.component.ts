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
  titleElement: HoverTitleComponent | undefined

  users!: Array<User>
  private currentHoverUser: User | null = null

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
    
    this.titleElement?.setTop(target.offsetTop + target.offsetHeight);
    this.titleElement?.setLeft(event.x);
    this.currentHoverUser = user;
  }

  onMouseEnter()
  {
    if (this.titleElement && this.titleElement.isHidden)
      this.titleElement.isHidden = false;

  }
  onMouseOut()
  {
    if (this.titleElement && !this.titleElement.isHidden)
    {
      this.titleElement.isHidden = true;
    }
      
  }

  ngOnInit(): void {
    this.getUsers()
  }
  
  ngAfterViewInit(): void {
    
  }

}
