import { Action } from '@ngrx/store';
import { Awesome } from '../metadata/awesome.interface';

export enum AwesomeActionTypes {
  CREATE_REQUEST = '[AWESOME] CREATE_REQUEST',
  CREATE_SUCCESS = '[AWESOME] CREATE_SUCCESS',
  CREATE_FAILURE = '[AWESOME] CREATE_FAILURE',
  DELETE_REQUEST = '[AWESOME] DELETE_REQUEST',
  DELETE_SUCCESS = '[AWESOME] DELETE_SUCCESS',
  DELETE_FAILURE = '[AWESOME] DELETE_FAILURE',
  FETCH_REQUEST = '[AWESOME] FETCH_REQUEST',
  FETCH_SUCCESS = '[AWESOME] FETCH_SUCCESS',
  FETCH_FAILURE = '[AWESOME] FETCH_FAILURE',
}

export class CreateAwesomeRequest implements Action {
  readonly type = AwesomeActionTypes.CREATE_REQUEST;
  constructor(public readonly payload: Awesome) {}
}

export class CreateAwesomeSuccess implements Action {
  readonly type = AwesomeActionTypes.CREATE_SUCCESS;
  constructor(public readonly payload: Awesome) {}
}

export class DeleteAwesomeRequest implements Action {
  readonly type = AwesomeActionTypes.DELETE_REQUEST;
  constructor(public readonly payload: string) {}
}

export class DeleteAwesomeSuccess implements Action {
  readonly type = AwesomeActionTypes.DELETE_SUCCESS;
  constructor(public readonly payload: string) {}
}

export class FetchAwesomeRequest implements Action {
  readonly type = AwesomeActionTypes.FETCH_REQUEST;
}

export class FetchAwesomeSuccess implements Action {
  readonly type = AwesomeActionTypes.FETCH_SUCCESS;
  constructor(public readonly payload: Awesome[]) {}
}

export type AwesomesActions =
  | CreateAwesomeRequest
  | CreateAwesomeSuccess
  | DeleteAwesomeRequest
  | DeleteAwesomeSuccess
  | FetchAwesomeRequest
  | FetchAwesomeSuccess;
