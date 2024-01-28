import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  isLoginVisible: boolean = false;

  showLoginPopup() {
    this.isLoginVisible = true;
  }

  hideLoginPopup() {
    this.isLoginVisible = false;
  }
}
