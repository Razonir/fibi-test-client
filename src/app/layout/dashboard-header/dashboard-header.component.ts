import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-dashboard-header',
  templateUrl: './dashboard-header.component.html',
  styleUrls: ['./dashboard-header.component.scss'],
})
export class DashboardHeaderComponent {
  constructor(private userService: UserService) {}

  userData: any;
  userId: any;
  allow = false;

  ngOnInit(): void {
    this.userId = localStorage.getItem('id') || '';
    this.userService.getOneUser(this.userId).subscribe((data) => {
      if (data.Role == 'Admin') {
        this.allow = true;
      }
    });
  }
}
