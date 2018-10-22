import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {MarsMapComponent} from './mars-map/mars-map.component';
import {LobbyComponent} from './lobby/lobby.component';
import {MaterialModule} from './material/material.module';


@NgModule({
    declarations: [
        AppComponent,
        MarsMapComponent,
        LobbyComponent
    ],
    imports: [
        BrowserModule,
        MaterialModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
