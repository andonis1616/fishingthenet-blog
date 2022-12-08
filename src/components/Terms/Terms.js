import { connect } from "react-redux";
import { TermsStyle } from "./Terms.style";

function Terms({ ...props }) {
  return (
    <TermsStyle>
      <p>
        Personal information you disclose to us In Short: We collect personal
        information that you provide to us. We collect personal information that
        you voluntarily provide to us when you register on the Services, express
        an interest in obtaining information about us or our products and
        Services, when you participate in activities on the Services, or
        otherwise when you contact us.
      </p>
      <p>
        Personal Information Provided by You. The personal information that we
        collect depends on the context of your interactions with us and the
        Services, the choices you make, and the products and features you use.
        The personal information we collect may include the following:
      </p>
      <p>
        - names <br></br>- email addresses<br></br>- mailing addresses <br></br>
        - usernames<br></br> - passwords
      </p>
      <p>
        Sensitive Information. We do not process sensitive information. Social
        Media Login Data. We may provide you with the option to register with us
        using your existing social media account details, like your Facebook,
        Twitter, or other social media account.
      </p>
      <h3>HOW DO WE PROCESS YOUR INFORMATION? </h3>
      <p>
        In Short: We process your information to provide, improve, and
        administer our Services, communicate with you, for security and fraud
        prevention, and to comply with law. We may also process your information
        for other purposes with your consent. We process your personal
        information for a variety
      </p>
      <p>In Short: </p>
      <p>
        {" "}
        We process your information to provide, improve, and administer our
        Services, communicate with you, for security and fraud prevention, and
        to comply with law. We may also process your information for other
        purposes with your consent. We process your personal information for a
        variety of reasons, depending on how you interact with our Services,
        including:{" "}
      </p>
      <p>
        - To facilitate account creation and authentication and otherwise manage
        user accounts. We may process your information so you can create and log
        in to your account, as well as keep your account in working order.{" "}
      </p>
      <p>
        - To protect our Services. We may process your information as part of
        our efforts to keep our Services safe and secure, including fraud
        monitoring and prevention.{" "}
      </p>
      <p>
        - To save or protect an individual's vital interest. We may process your
        information when necessary to save or protect an individual’s vital
        interest, such as to prevent harm{" "}
      </p>
      <p></p>
    </TermsStyle>
  );
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Terms);
