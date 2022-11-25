import { connect } from 'react-redux';
import { fetchAnnouncementsThunk } from '../../state/thunks/announcements.thunk';
import { AnnouncementsStyle } from './Announcements.style';

function Announcements({ announcements, fetchAnnouncementsThunk, ...props }) {
  return <AnnouncementsStyle>Announcements {announcements}</AnnouncementsStyle>;
}

const mapStateToProps = state => ({
  announcements: state.announcementsState.announcements,
});

const mapDispatchToProps = {
  fetchAnnouncementsThunk: fetchAnnouncementsThunk,
};

export default connect(mapStateToProps, mapDispatchToProps)(Announcements);
