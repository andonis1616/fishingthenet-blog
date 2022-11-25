import { FETCH_ANNOUNCEMENTS } from '../actions/announcements.action';

const initialState = {
  announcements: 'ceva acolo',
};

export const announcementsReducer = (state = { ...initialState }, action) => {
  switch (action.type) {
    /**
     * Announcements
     */
    case FETCH_ANNOUNCEMENTS:
      return {
        ...state,
        announcements: action.payload,
      };

    default:
      return { ...state };
  }
};
