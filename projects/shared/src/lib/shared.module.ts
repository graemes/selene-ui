import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
    MatButtonModule,
    MatButtonToggleModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    MatToolbarModule
} from '@angular/material';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SnackbarComponent } from './snackbar/snackbar.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TopnavComponent } from './topnav/topnav.component';


@NgModule({
    declarations: [
        SnackbarComponent,
        PageNotFoundComponent,
        TopnavComponent,
    ],
    entryComponents: [
        SnackbarComponent,
        PageNotFoundComponent,
    ],
    imports: [
        CommonModule,
        FlexLayoutModule,
        FontAwesomeModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatSnackBarModule,
        MatProgressSpinnerModule,
        MatToolbarModule
    ],
    exports: [
        PageNotFoundComponent,
        SnackbarComponent,
        TopnavComponent
    ],
})
export class SharedModule { }
