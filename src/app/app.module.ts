import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PreloadAllModules, RouteReuseStrategy, RouterModule, Routes } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'form',
    loadChildren: () => import('./form/form.module').then(m => m.FormPageModule)
  },
];
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),HttpClientModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule {
  
}
