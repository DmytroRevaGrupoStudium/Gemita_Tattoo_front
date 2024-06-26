import { Component, OnInit, OnDestroy } from '@angular/core';
import { InfoService } from '../services/info.service';
import { AuthService } from '../services/auth.service';
import { UserTiendaService } from '../services/user-tienda.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

  informacion: any = {};
  isAuthenticated = false;
  userName: string = '';
  private authSubscription: Subscription | undefined;

  constructor(
    private infoService: InfoService,
    private authService: AuthService,
    private userTiendaService: UserTiendaService
  ) {
    this.infoService.getInformacion().subscribe(datos => {
      datos.forEach(item => {
        this.informacion[item.dato] = item.valor;
      });
    });
  }

  ngOnInit(): void {
    this.checkAuthentication();
    this.authSubscription = this.authService.authChanged.subscribe({
      next: (isAuthenticated) => {
        this.isAuthenticated = isAuthenticated;
        if (this.isAuthenticated) {
          this.updateUserName();
        } else {
          this.userName = '';
        }
      }
    });
  }

  ngOnDestroy(): void {
    if (this.authSubscription) {
      this.authSubscription.unsubscribe();
    }
  }

  checkAuthentication(): void {
    this.authService.tokenValidation().subscribe({
      next: (isAuthenticated) => {
        this.isAuthenticated = isAuthenticated;
        if (this.isAuthenticated) {
          this.updateUserName();
        } else {
          this.userName = '';
        }
      },
      error: (error) => console.error('Error during token validation', error)
    });
  }

  updateUserName(): void {
    this.userTiendaService.getUserName().subscribe({
      next: (name) => this.userName = name,
      error: (error) => console.error('Error fetching user name', error)
    });
  }

  logout(): void {
    localStorage.removeItem('token');
    this.authService.updateAuthStatus(false);
    this.isAuthenticated = false;
    this.userName = '';
  }
}