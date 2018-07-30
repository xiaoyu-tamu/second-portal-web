import { AppState } from '../../app.reducer';
import { AwesomeState } from './awesome.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const selectAwesome = createFeatureSelector<AwesomeState>('awesome');
export const selectCollection = createSelector(selectAwesome, (awesome) => awesome.collection);
