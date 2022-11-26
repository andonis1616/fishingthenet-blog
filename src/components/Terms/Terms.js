import { connect } from "react-redux";
import { TermsStyle } from "./Terms.style";

function Terms({ ...props }) {
  return <TermsStyle>Terms </TermsStyle>;
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Terms);
