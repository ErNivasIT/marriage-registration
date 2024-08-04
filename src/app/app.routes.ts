import { Routes } from '@angular/router';
import { RegistrationPublicComponent } from './registration-public/registration-public.component';
import { GetRegistrationStatisticsComponent } from './registration-reports/get-registration-statistics/get-registration-statistics.component';
import { LoginNowComponent } from './login/login-now/login-now.component';
import { LoginSignupComponent } from './login/login-signup/login-signup.component';
import { ForgotPasswordComponent } from './login/forgot-password/forgot-password.component';
import { AuthGuard } from './services/auth.guard';

export const routes: Routes = [
        {path: "registration",component: RegistrationPublicComponent, canActivate: [AuthGuard]},
        {path: "registration-statistics",component: GetRegistrationStatisticsComponent, canActivate: [AuthGuard]},
        {path: "login-now",component: LoginNowComponent},
        {path: "signup",component: LoginSignupComponent, canActivate: [AuthGuard]},
        {path: "forgot-password",component: ForgotPasswordComponent},
        {path: "**",redirectTo:"/"}
    ];
