import { Component } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-project';
  loggedIn: boolean = false;

  constructor(private keycloakService: KeycloakService) {}

  ngOnInit() {
    // Check if the user is logged in
    this.loggedIn = this.keycloakService.isLoggedIn();  // Directly assign the boolean value
  }

  logout() {
    this.keycloakService.logout();
  }
}
