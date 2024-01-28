import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent {
  
  constructor(private userService: UserService, private router: Router) {}

  user: User = new User();
  errorSignup= '';
  
  signup() {
    this.userService.signUp(this.user).subscribe(
      (response) => { 
        console.log("response", response)
        if(response.Id == undefined){
          this.errorSignup = "קוד משתמש זה כבר קיים במערכת"
        }else{
          localStorage.setItem('id', response.Id);
          this.router.navigate(['/dashboard']);
        }
      },
      (error) => {
        console.log(error)
        this.errorSignup = error.error.error.message;
      }
    );
  }
}
