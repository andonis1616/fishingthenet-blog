import { fetchAnnouncementsAction } from "../actions/announcements.action";
import axios from "axios";

/**
 * Change Page
 */

export const fetchAnnouncementsThunk = () => async (dispatch) => {
  return await axios
    .get("https://jsonplaceholder.typicode.com/posts")
    .then((response) => {
      return dispatch(fetchAnnouncementsAction(response.data));
    })
    .catch((err) => console.log("err", err));
};
