import { Routes } from '@angular/router';
import { RegistrationPublicComponent } from './registration-public/registration-public.component';
import { GetRegistrationStatisticsComponent } from './registration-reports/get-registration-statistics/get-registration-statistics.component';

export const routes: Routes = [
        {path: "registration",component: RegistrationPublicComponent},
        {path: "registration-statistics",component: GetRegistrationStatisticsComponent}
    ];
