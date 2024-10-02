import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../core/services/auth/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{
  userLoginOn: boolean=false;

  constructor(
    private loginService: LoginService
  ){}
  ngOnInit(): void {
    this.loginService.currentUserLoginOn.subscribe({
      next: (userLoginOn) => {
        this.userLoginOn = userLoginOn;
      }
    })
  }


}
