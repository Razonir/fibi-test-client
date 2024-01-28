import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent {
  constructor(private userService: UserService, private router: Router) {}

  allUsers: any;
  userData: any;
  userId = '';
  allow = false;
  ngOnInit(): void {
    this.userId = localStorage.getItem('id') || '';
    this.userService.getOneUser(this.userId).subscribe((data) => {
      if (data.Role != 'Admin') {
        this.router.navigate(['/acsess']);
      } else {
        this.allow = true;
      }
      this.userData = data;
    });

    this.getData();
  }

  getData() {
    this.userService.getAllUsers().subscribe((data) => {
      this.allUsers = data;
      console.log(this.allUsers);
    });
  }
  remove(id: string) {
    this.userService.remove(id).subscribe(() => {
      this.getData();
    });
  }
}
