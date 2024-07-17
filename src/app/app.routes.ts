import { Routes } from '@angular/router';
import { RegistrationPublicComponent } from './registration-public/registration-public.component';
import { GetRegistrationStatisticsComponent } from './registration-reports/get-registration-statistics/get-registration-statistics.component';
import { LoginNowComponent } from './login/login-now/login-now.component';
import { LoginSignupComponent } from './login/login-signup/login-signup.component';
import { ForgotPasswordComponent } from './login/forgot-password/forgot-password.component';

export const routes: Routes = [
        {path: "registration",component: RegistrationPublicComponent},
        {path: "registration-statistics",component: GetRegistrationStatisticsComponent},
        {path: "login-now",component: LoginNowComponent},
        {path: "signup",component: LoginSignupComponent},
        {path: "forgot-password",component: ForgotPasswordComponent},
        {path: "**",redirectTo:"/"}
    ];
