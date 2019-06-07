import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccountResolverService } from './core/guards/account-resolver.service';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { EditComponent } from '@account/app/modules/profile/pages/edit/edit.component';
import { SkillComponent } from '@account/app/modules/skill/skill.component';
import { PageNotFoundComponent } from 'shared';

const routes: Routes = [
    { path: 'dashboard', component: DashboardComponent, resolve: {account: AccountResolverService} },
    { path: 'devices', loadChildren: () => import('./modules/device/device.module').then((module) => module.DeviceModule) },
    { path: 'profile', component: EditComponent },
    { path: 'skills', component: SkillComponent },
    { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            routes,
            {
                anchorScrolling: 'enabled',
                scrollPositionRestoration: 'enabled'
            }
        )
    ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {
}
