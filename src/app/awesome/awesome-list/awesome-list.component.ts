import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../../app.reducer';
import { FetchAwesomeRequest } from '../store/awesome.actions';
import { selectAwesome, selectCollection } from '../store/awesome.selectors';
import { Awesome } from '../metadata/awesome.interface';

@Component({
  selector: 'app-awesome-list',
  templateUrl: './awesome-list.component.html',
  styleUrls: ['./awesome-list.component.styl'],
})
export class AwesomeListComponent implements OnInit, OnDestroy {
  awesomes: Observable<Awesome[]>;
  loading: Observable<boolean>;

  constructor(private readonly store: Store<AppState>) {}

  ngOnInit() {
    this.store.dispatch(new FetchAwesomeRequest());
    this.awesomes = this.store.select(selectCollection);
  }

  ngOnDestroy(): void {}
}
