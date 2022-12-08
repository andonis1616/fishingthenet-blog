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
            <img src="/lacra.png" alt="nadia" />
            <div className="text">Lacramioara Chirieac</div>
          </div>
          <div className="team-top-group">
            <img src="/andrei.png" alt="nadia" />
            <div className="text">Razvan Axinia</div>
          </div>
        </div>
        <div className="team-bottom">
          <div className="team-top-group">
            <img src="/razvan.png" alt="nadia" />
            <div className="text">Andrei Cuzenco</div>
          </div>
          <div className="team-top-group">
            <img src="/vali.png" alt="nadia" />
            <div className="text">Valentin Boghean</div>
          </div>
          <div className="team-top-group">
            <img src="/sebastian.png" alt="nadia" />
            <div className="text">Murarescu Sebastian-Marian</div>
          </div>
          <div className="empty"></div>
        </div>
      </div>

      <div className="team-text">
        <span>How We Started </span>
      </div>

      <p className="text">
        HOW CAN YOU CONTACT US ABOUT THIS NOTICE? <br></br>
        If you have questions or comments about this notice, you may email us at
        <br></br>
        Fish.the.net@yahoo.com or by post to:
        <br></br>
        Fishing the net
        <br></br>
        Fishy street
        <br></br>
        Suceava, Romania 727602
        <br></br>
        Romania
        <br></br>
        If you are a resident in the European Economic Area, the "data
        controller" of your personal information is Fishing the net. You can
        contact them directly regarding the processing of your information by
        Fishing the net.
      </p>
    </AboutUsStyle>
  );
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(AboutUs);
