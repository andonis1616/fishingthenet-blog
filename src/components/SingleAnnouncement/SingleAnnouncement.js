import { connect } from "react-redux";
import { useLocation } from "react-router-dom";
import parse from "html-react-parser";
import { SingleAnnouncementStyle } from "./SingleAnnouncement.style";

function SingleAnnouncement({ ...props }) {
  const location = useLocation();
  const { id, title, content } = location.state;
  console.log(location);

  return (
    <SingleAnnouncementStyle>
      <header>
        <h2>{title}</h2>
        <span>Lorem ipsum dolor sit amet lorem </span>
        <div className="tags">
          <div className="tag">#business</div>
          <div className="tag">#mindset</div>
          <div className="tag">#howto</div>
        </div>
      </header>
      <section className="section-image">
        <img
          width={1200}
          height={437}
          src="https://cdn.dailydriven.ro/media/4619/c/bmw-m4-1200x900.jpg"
          alt="image single"
        ></img>
      </section>
      <section className="content">{parse(content)}</section>
    </SingleAnnouncementStyle>
  );
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(SingleAnnouncement);
