import en from '@angular/common/locales/en';
import { registerLocaleData } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { environment } from '../environments/environment';
import { reducers } from './app.reducer';

registerLocaleData(en);

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,

    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([]),
    StoreRouterConnectingModule,
    !environment.production ? StoreDevtoolsModule.instrument() : [],

    AppRoutingModule,
    DashboardModule,
    NgZorroAntdModule,
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent],
})
export class AppModule {}
