import { connect } from "react-redux";
import { SingleAnnouncementStyle } from "./SingleAnnouncement.style";

function SingleAnnouncement({ ...props }) {
  return <SingleAnnouncementStyle>SingleAnnouncement</SingleAnnouncementStyle>;
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(SingleAnnouncement);
