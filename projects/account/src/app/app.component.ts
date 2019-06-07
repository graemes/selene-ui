import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { environment } from '../environments/environment';

@Component({
    selector: 'account-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    public environment = environment;
    title = 'Account';
    menuItems = ['Skills', 'Devices', 'Profile'];

    constructor(private router: Router) {
    }

    ngOnInit() {
    }

    onMenuItemSelect(menuItem: string) {
        switch (menuItem) {
            case 'Devices':
                this.router.navigate(['devices']);
                break;
            case 'Profile':
                this.router.navigate(['profile']);
                break;
            case 'Skills':
                this.router.navigate(['skills']);
                break;
        }
    }
}
