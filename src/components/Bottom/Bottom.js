import { Link } from "react-router-dom";
import FB from "../../utils/Icons/FB";
import Insta from "../../utils/Icons/Insta";
import LogoBot from "../../utils/Icons/LogoBot";
import { BottomStyle } from "./Bottom.style";

function Bottom() {
  return (
    <BottomStyle>
      <div className="bottom">
        <div className="left">
          <Link to="">
            <LogoBot></LogoBot>
          </Link>
          <div className="social">
            <FB></FB>
            <Insta></Insta>
          </div>
        </div>
        <div className="right">
          <h3>INFO</h3>
          <Link to="/about-us" className="about-us">
            About Us
          </Link>
          <div>
            <Link to="/terms" className="terms">
              Terms of Use
            </Link>
            <Link to="/privacy-policy" className="privacy">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
      <div className="all-rights">© All rights reserved 2022</div>
    </BottomStyle>
  );
}

export default Bottom;
