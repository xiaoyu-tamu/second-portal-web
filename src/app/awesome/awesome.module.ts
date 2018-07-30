import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AwesomeComponent } from './awesome.component';
import { AwesomeListComponent } from './awesome-list/awesome-list.component';
import { AwesomeCreateComponent } from './awesome-create/awesome-create.component';
import { StoreModule } from '@ngrx/store';
import { AwesomeRoutingModule } from './awesome.routing.module';
import { EffectsModule } from '@ngrx/effects';
import { awesomeReducer } from './store/awesome.reducer';
import { AwesomeEffects } from './store/awesome.effects';
import { PageComponent } from '../page/page.component';

@NgModule({
  declarations: [AwesomeComponent, AwesomeListComponent, AwesomeCreateComponent, PageComponent],
  imports: [
    CommonModule,
    AwesomeRoutingModule,
    StoreModule.forFeature('awesome', awesomeReducer),
    EffectsModule.forFeature([AwesomeEffects]),
  ],
  exports: [],
  providers: [],
})
export class AwesomeModule {}
