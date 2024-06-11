import { Component, OnInit } from '@angular/core';
import { AuthService } from '@services/auth.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
})
export class LayoutComponent implements OnInit {
  constructor(
    private authservice: AuthService
  ) {}
  ngOnInit(): void {
this.authservice.getPrfile()
.subscribe();
  }
}
