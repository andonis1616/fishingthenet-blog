import { combineReducers } from 'redux';

import { announcementsReducer } from './reducers/announcements.reducers';

export const rootReducers = combineReducers({
  announcementsState: announcementsReducer,
});
