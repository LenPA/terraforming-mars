import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {LobbyComponent} from './lobby/lobby.component';
import {MarsMapComponent} from './mars-map/mars-map.component';
import {HomeMenuComponent} from './home-menu/home-menu.component';

const routes: Routes = [
    {
      path: '', component: HomeMenuComponent
    },
    {
        path: 'lobby', component: LobbyComponent
    },
    {
        path: 'mars-map', component: MarsMapComponent
    }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(routes)
    ],
    declarations: [],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
