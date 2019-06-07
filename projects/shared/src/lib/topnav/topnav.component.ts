import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

export interface WebApps {
    account: string;
    chat: string;
    forum: string;
    marketplace: string;
    mimic: string;
    singleSignOn: string;
    translate: string;
    wordPress: string;
}

@Component({
    selector: 'shared-topnav',
    templateUrl: './topnav.component.html',
    styleUrls: ['./topnav.component.scss']
})
export class TopnavComponent implements OnInit {
    @Input() mycroftUrls: WebApps;
    @Input() siteName: string;
    @Input() menuItems: string[];
    public breadCrumbIcon = faChevronRight;
    @Output() selectedMenuItem = new EventEmitter<string>();

    constructor() { }

    ngOnInit() {
    }

    onMenuItemClick(menuItem: string) {
        this.selectedMenuItem.emit(menuItem);
    }

}
