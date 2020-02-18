import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  public allUsers:User[];
  public selectedUser: User;

  constructor(private userService:UserService) { }

  ngOnInit() {}

  public getUsers( groupNumber:number){
    //get all users
    this.userService.getAllUsersAsync(groupNumber)
      .subscribe(
        users => {
          this.allUsers = users;
          this.selectedUser = this.allUsers[0];
        },
        err => {
          alert(err.message);
        },
        () => console.log("Done.")
      );
  }


  onUserSelected(user: User) {
    this.selectedUser = user;
  }

}
