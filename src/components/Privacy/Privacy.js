import { connect } from "react-redux";
import { PrivacyStyle } from "./Privacy.style";

function Privacy({ ...props }) {
  return <PrivacyStyle>Privacy </PrivacyStyle>;
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Privacy);
