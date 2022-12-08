import { connect } from "react-redux";
import { useLocation } from "react-router-dom";
import parse from "html-react-parser";
import { SingleAnnouncementStyle } from "./SingleAnnouncement.style";

function SingleAnnouncement({ ...props }) {
  const location = useLocation();
  const { id, title, content, img } = location.state;
  console.log(location);

  return (
    <SingleAnnouncementStyle>
      <header>
        <h2>{title}</h2>
      </header>
      <section className="section-image">
        <img width={1200} height={437} src={img} alt="image single"></img>
      </section>
      <section className="content">{parse(content)}</section>
    </SingleAnnouncementStyle>
  );
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(SingleAnnouncement);
