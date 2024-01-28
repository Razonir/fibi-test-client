import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  constructor(private userService: UserService, private router: Router) {}

  userData:any;
  userId = "";
  allow = false;

  ngOnInit(): void {
    this.userId = localStorage.getItem('id') || "";
    this.userService.getOneUser(this.userId).subscribe((data)=>{
      this.userData = data;
      if (data.Id == null || data.Id == undefined) {
        this.router.navigate(['/acsess']);
      } else {
        this.allow = true;
      }
      console.log(this.userData)
    });
  }

}
