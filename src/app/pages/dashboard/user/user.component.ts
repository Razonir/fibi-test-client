import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent {
  constructor(private userService: UserService, private router: Router) {}

  user: User = new User();
  errorUpdate = '';
  userId = '';
  loading = true;
  allow = false;

  ngOnInit(): void {
    this.userId = localStorage.getItem('id') || '';
    this.userService.getOneUser(this.userId).subscribe((data) => {
      this.user = data;
      if (data.Id == null || data.Id == undefined) {
        this.router.navigate(['/acsess']);
      } else {
        this.allow = true;
      }
      this.loading = false
    });
  }

  update() {
    this.userService.Update(this.user).subscribe((response) => {
      console.log('response', response);
      this.router.navigate(['/dashboard']);
    });
  }
}
