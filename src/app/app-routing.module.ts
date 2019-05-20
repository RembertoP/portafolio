import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { AboutComponent } from './pages/about/about.component';
import { ItemComponent } from './pages/item/item.component';
import { HomeComponent } from './pages/home/home.component';
import { SearchComponent } from './pages/search/search.component';



const  APP_ROUTES: Routes = [
{path: '',  component: HomeComponent},
{path: 'home',  component: HomeComponent},
{path: 'portafolio',  component: PortafolioComponent},
{path: 'about',  component: AboutComponent},
{path: 'item/:id',  component: ItemComponent},
{path: 'search/:termino',  component: SearchComponent},
{path: '**',  pathMatch: 'full' ,  redirectTo: ''}
];

@NgModule({
    imports: [RouterModule.forRoot(APP_ROUTES, { useHash : true })],
    exports: [RouterModule]
})

export class AppRoutingModule {

}
