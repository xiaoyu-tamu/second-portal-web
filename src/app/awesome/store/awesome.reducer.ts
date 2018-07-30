import { Awesome } from '../metadata/awesome.interface';
import { AwesomeActionTypes, AwesomesActions } from './awesome.actions';

export interface AwesomeState {
  collection: Awesome[];
  loading: boolean;
}

const initialState: AwesomeState = {
  collection: [],
  loading: false,
};

export function awesomeReducer(state = initialState, action: AwesomesActions) {
  switch (action.type) {
    case AwesomeActionTypes.FETCH_REQUEST:
    case AwesomeActionTypes.CREATE_REQUEST:
    case AwesomeActionTypes.DELETE_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case AwesomeActionTypes.FETCH_SUCCESS:
      return {
        ...state,
        collection: action.payload,
        loading: false,
      };

    case AwesomeActionTypes.CREATE_SUCCESS:
      return {
        ...state,
        collection: [...state.collection, action.payload],
        loading: false,
      };

    case AwesomeActionTypes.DELETE_SUCCESS: {
      const idx = state.collection.findIndex((record) => record.id === action.payload);
      if (idx === -1) {
        return state;
      }
      const collection = [...state.collection];
      collection.splice(idx, 1);
      return { ...state, collection, loading: false };
    }

    default:
      return state;
  }
}
