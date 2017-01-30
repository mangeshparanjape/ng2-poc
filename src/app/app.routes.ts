/**
 * Created by nevraun on 2016/12/16.
 */
import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { HOME_ROUTES } from "./home/index";

const ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  ...HOME_ROUTES
];

export const APP_ROUTING_PROVIDERS: any[] = [

];

export const APP_ROUTING: ModuleWithProviders = RouterModule.forRoot(ROUTES);
