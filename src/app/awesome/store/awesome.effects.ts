import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { AwesomeActionTypes } from './awesome.actions';
import { HttpClient } from '@angular/common/http';
import { ApiService } from 'src/utilities/api.service';
import { Awesome } from '../metadata/awesome.interface';

@Injectable()
export class AwesomeEffects {
  @Effect()
  name$: Observable<Action> = this.actions$.pipe(
    ofType(AwesomeActionTypes.FETCH_REQUEST),
    mergeMap((action) =>
      this.http.get<Awesome[]>(this.api.awesomes).pipe(
        map((data) => ({ type: AwesomeActionTypes.FETCH_SUCCESS, payload: data })),
        catchError(() => of({ type: AwesomeActionTypes.FETCH_FAILURE }))
      )
    )
  );

  constructor(
    private readonly actions$: Actions,
    private readonly http: HttpClient,
    private readonly api: ApiService
  ) {}
}
