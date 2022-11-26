export const FETCH_ANNOUNCEMENTS = "FETCH_ANNOUNCEMENTS";

/**
 * Announcements
 */
export const fetchAnnouncementsAction = (announcements) => ({
  type: FETCH_ANNOUNCEMENTS,
  payload: announcements,
});
