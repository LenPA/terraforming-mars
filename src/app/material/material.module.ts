import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule, MatIconModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


@NgModule({
    imports: [
        CommonModule,
        MatMenuModule,
        MatIconModule,
        MatButtonModule,
        BrowserAnimationsModule
    ],
    exports: [
        MatMenuModule,
        MatIconModule,
        MatButtonModule,
        BrowserAnimationsModule
    ],
    declarations: [
    ]
})
export class MaterialModule {
}
