import { Component,OnInit } from '@angular/core';
import {
  faBell,
  faInfoCircle,
  faClose,
  faAngleDown
} from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '@services/auth.service';
import { Route, Router } from '@angular/router';
import { User } from '@models/user.model';
import { TokenService } from '@services/token.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  faBell = faBell;
  faInfoCircle = faInfoCircle;
  faClose = faClose;
  faAngleDown = faAngleDown;

  isOpenOverlayAvatar = false;
  isOpenOverlayBoards = false;


  user$ = this.authService.user$;

  constructor(
    private authService: AuthService,
    private router: Router,
    private tokenSevice:TokenService
  ) {}

   logout(){
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  isValidToken(){
    console.log(this.tokenSevice.isValidToken());
  }
}
