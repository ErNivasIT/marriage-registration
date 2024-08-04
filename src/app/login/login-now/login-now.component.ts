import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BehaviorSubject, Observable } from 'rxjs';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login-now',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login-now.component.html',
  styleUrl: './login-now.component.css'
})
export class LoginNowComponent {
  username: string = '';
  password: string = '';
  private currentUserSubject!: BehaviorSubject<any>;
  public currentUser!: Observable<any>;

  constructor(private authService: AuthService, private router: Router) {
    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('currentUser')!));
    this.currentUser = this.currentUserSubject.asObservable();
  }
  ngOnInit(): void {
  }
  onSubmit(loginForm: any) {
    console.log(loginForm.value);
    this.authService.login(this.username, this.password)
      .subscribe(p => {
        this.router.navigate(['/registration']);
      });
  }

  logout() {
    // remove user from local storage and set current user to null
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }
}
