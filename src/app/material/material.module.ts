import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule, MatCardModule, MatIconModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


@NgModule({
    imports: [
        CommonModule,
        MatMenuModule,
        MatIconModule,
        MatButtonModule,
        MatCardModule,
        BrowserAnimationsModule
    ],
    exports: [
        MatMenuModule,
        MatCardModule,
        MatIconModule,
        MatButtonModule,
        BrowserAnimationsModule
    ],
    declarations: [
    ]
})
export class MaterialModule {
}
