import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-cupom',
  templateUrl: './home-cupom.component.html',
  styleUrls: ['./home-cupom.component.sass']
})
export class HomeCupomComponent {
  constructor(
    private router: Router
  ) { }

  ngOnInit() {

  }

  goToLogin() {
    this.router.navigate(['/cupom']);
  }

}



