import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { imagesReducer } from './searchImagesCollection';

const rootReducer = combineReducers({
  imagesReducer
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
