import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { AwesomeComponent } from './awesome/awesome.component';
import { SiderComponent } from './layout/sider/sider.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, AwesomeComponent, SiderComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
