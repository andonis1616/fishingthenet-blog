import { connect } from "react-redux";
import { AboutUsStyle } from "./AboutUs.style";

function AboutUs({ ...props }) {
  return (
    <AboutUsStyle>
      <h2 className="team-h2">The team</h2>
      <div className="team-container">
        <div className="team-top">
          <div className="empty"></div>

          <div className="team-top-group">
            <img src="/nadia.png" alt="nadia" />
            <div className="text">Nadia Grigoras Designer</div>
          </div>
          <div className="team-top-group">
            <img src="/nadia.png" alt="nadia" />
            <div className="text">Nadia Grigoras Designer</div>
          </div>
          <div className="team-top-group">
            <img src="/nadia.png" alt="nadia" />
            <div className="text">Nadia Grigoras Designer</div>
          </div>
        </div>
        <div className="team-bottom">
          <div className="team-top-group">
            <img src="/nadia.png" alt="nadia" />
            <div className="text">Nadia Grigoras Designer</div>
          </div>
          <div className="team-top-group">
            <img src="/nadia.png" alt="nadia" />
            <div className="text">Nadia Grigoras Designer</div>
          </div>
          <div className="team-top-group">
            <img src="/nadia.png" alt="nadia" />
            <div className="text">Nadia Grigoras Designer</div>
          </div>
          <div className="empty"></div>
        </div>
      </div>

      <div className="team-text">
        <span>How We Started </span>
      </div>

      <p className="text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
        ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
        voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      </p>
    </AboutUsStyle>
  );
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(AboutUs);
