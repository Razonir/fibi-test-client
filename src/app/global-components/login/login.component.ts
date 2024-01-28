import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(private userService: UserService, private router: Router) {}

  @Output() hideLogin: EventEmitter<void> = new EventEmitter<void>();

  userlogin: User = new User();
  errorlogin = '';

  closeLoginPopup() {
    this.hideLogin.emit();
  }

  login() {
    this.errorlogin =""
    this.userService.login(this.userlogin).subscribe(
      (response) => {
        
        if(response.Id != null){
          localStorage.setItem('id', response.Id),
            this.router.navigate(['/dashboard']);
        }else{
          this.errorlogin = "משתמש או סיסמא שגויים"
        }
      },(error)=>{
        this.errorlogin = error.error
      }
  
    );
  }
}
