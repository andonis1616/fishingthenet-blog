import { connect } from "react-redux";
import { PrivacyStyle } from "./Privacy.style";

function Privacy({ ...props }) {
  return (
    <PrivacyStyle>
      <p>
        Last updated December 02, 2022 This privacy notice for Fishing the net
        (doing business as FTN) ("FTN," "we," "us," or "our"), describes how and
        why we might collect, store, use, and/or share ("process") your
        information when you use our services ("Services"), such as when you:
      </p>
      <p>
        - Visit our website at http://www.fishingnet.com, or any website of ours
        that links to this privacy notice
      </p>

      <p>
        - Engage with us in other related ways, including any sales, marketing,
        or events
      </p>

      <p>
        Questions or concerns? Reading this privacy notice will help you
        understand your privacy rights and choices. If you do not agree with our
        policies and practices, please do not use our Services. If you still
        have any questions or concerns, please contact us at
        fishing.the.net@yahoo.com.
      </p>

      <h2>SUMMARY OF KEY POINTS</h2>

      <p>
        This summary provides key points from our privacy notice, but you can
        find out more details about any of these topics by clicking the link
        following each key point or by using our table of contents below to find
        the section you are looking for. You can also click here to go directly
        to our table of contents. What personal information do we process? When
        you visit, use, or navigate our Services, we may process personal
        information depending on how you interact with FTN and the Services, the
        choices you make, and the products and features you use. Click here to
        learn more. Do we process any sensitive personal information? We do not
        process sensitive personal information. Do we receive any information
        from third parties? We do not receive any information from third
        parties. How do we process your information? We process your information
        to provide, improve, and administer our Services, communicate with you,
        for security and fraud prevention, and to comply with law. We may also
        process your information for other purposes with your consent. We
        process your information only when we have a valid legal reason to do
        so. Click here to learn more. In what situations and with which parties
        do we share personal information? We may share information in specific
        situations and with specific third parties. How do we keep your
        information safe? We have organizational and technical processes and
        procedures in place to protect your personal information. However, no
        electronic transmission over the internet or information storage
        technology guaranteed to be 100% secure, so we cannot promise or
        guarantee that hackers, cybercriminals, or other unauthorized third
        parties will not be able to defeat our security and improperly collect,
        access, steal, or modify your information. What are your rights?
        Depending on where you are located geographically, the applicable
        privacy law may mean you have certain rights regarding your personal
        information.
      </p>

      <p>
        How do you exercise your rights? The easiest way to exercise your rights
        is by filling out our data subject request form available here, or by
        contacting us. We will consider and act upon any request in accordance
        with applicable data protection laws.
      </p>
    </PrivacyStyle>
  );
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Privacy);
