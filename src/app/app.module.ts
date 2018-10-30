import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {MarsMapComponent} from './mars-map/mars-map.component';
import {LobbyComponent} from './lobby/lobby.component';
import {MaterialModule} from './material.module';
import {MenuComponent} from './menu/menu.component';
import {HomeMenuComponent} from './home-menu/home-menu.component';
import {AppRoutingModule} from './/app-routing.module';


@NgModule({
    declarations: [
        AppComponent,
        MarsMapComponent,
        LobbyComponent,
        MenuComponent,
        HomeMenuComponent
    ],
    imports: [
        BrowserModule,
        MaterialModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
