import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { StocksComponent } from './stocks/stocks.component';
import { CryptocurrencyComponent } from './cryptocurrency/cryptocurrency.component';

const appRoutes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'app-stocks' },
    { path: 'app-stocks', component: StocksComponent },
    { path: 'app-cryptocurrency', component: CryptocurrencyComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule],
})

export class AppRoutingModule { }