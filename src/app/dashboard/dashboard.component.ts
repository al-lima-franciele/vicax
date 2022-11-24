import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {

  }

  goToLogin() {
    this.router.navigate(['/dashboard']);
  }

}

