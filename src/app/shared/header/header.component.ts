import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  appName: string = "Baked Goods";
  menuActive = false;

  toggleMenu() {
    debugger;
    this.menuActive = !this.menuActive;
  }
}
