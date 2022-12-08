import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchAnnouncementsThunk } from "../../state/thunks/announcements.thunk";
import { AnnouncementsStyle } from "./Announcements.style";

const MOCK_DATA = [
  {
    id: 1,
    title: "6 Common Phishing Attacks and How to Protect Against Them",
    img: "/img1.png",
    content: `
    <p>
    Phishing attacks continue to play a dominant role in the digital threat landscape. In its 2021 Data Breach Investigations Report (DBIR), Verizon Enterprise found phishing to be one of the most prevalent action varieties for the data breaches it analyzed. Its researchers specifically observed phishing in more than a third (36%) of breaches. That’s up from 22% a year earlier. 
    </p>
    <p>
    Digital fraudsters show no signs of slowing down their phishing activity for the rest of the year, either. Help Net Security revealed that the volume of phishing attacks increased 22% compared to H1 2020. Of those campaigns, approximately half of them leveraged Office 365 as a lure and targeted accounts used for Single Sign On (SSO) at 51% and 45%, respectively. 
    </p>
    <p>
    The rise of phishing attacks poses a significant threat to organizations everywhere. It’s important that all companies know how to spot some of the most common phishing scams if they are to protect their corporate information. It’s also crucial that they are familiar with some of the most common types of techniques that malicious actors use to pull off these scams. 
    </p>
    <p>
    Towards that end, let’s discuss six of the most common types of phishing attacks and highlight some tips that organizations can use to defend themselves. 
    </p>
    <ol>
      <li>
      Deceptive Phishing 
      </li>

          <li>
          Spear Phishing 
      </li>

      <li>
      Whaling
      </li>

      <li>
      Vishing 
      </li>
      <li>
      Smishing 

      </li>
      <li>
      Pharming 

      </li>
  
    </ol>
    `,
  },
  {
    id: 1,
    title: "What Is Phishing?",
    img: "/img2.png",
    content: `
    <p>Phishing attacks are the practice of sending fraudulent communications that appear to come from a reputable source. It is usually performed through email. The goal is to steal sensitive data like credit card and login information or to install malware on the victim's machine. Phishing is a common type of cyber attack that everyone should learn about in order to protect against email threats. 
    </p>

<h4>
What is phishing? 
</h4>

    <p>Phishing attacks are counterfeit communications that appear to come from a trustworthy source but w What is phishing? 
    </p>

    <p>Phishing attacks are counterfeit communications that appear to come from a trustworthy source but which can compromise all types of data sources. Attacks can facilitate access to your online accounts and personal data, obtain permissions to modify and compromise connected systems--such as point of sale terminals and order processing systems--and in some cases hijack entire computer networks until a ransom fee is delivered. 
    </p>

    <p>Sometimes hackers are satisfied with getting your personal data and credit card information for financial gain. In other cases, phishing emails are sent to gather employee login information or other details for use in more malicious attacks against a few individuals or a specific company. Phishing is a type of cyber attack that everyone should learn about in order to protect themselves and ensure email security throughout an organization. 
    </p>

    <h4>How does phishing work? </h4>

 
    <p>
    Phishing starts with a fraudulent email or other communication designed to lure a victim. The message is made to look as though it comes from a trusted sender. If it fools the victim, he or she is coaxed into providing confidential information--often on a scam website. Sometimes malware is also downloaded onto the target's computer. 
    </p> 
    <p>
    Cybercriminals start by identifying a group of individuals they want to target. Then they create email and text messages that appear to be legitimate but actually contain dangerous links, attachments, or lures that trick their targets into taking an unknown, risky action. In brief: 
    </p> 
    <p>
    Phishers frequently use emotions like fear, curiosity, urgency, and greed to compel recipients to open attachments or click on links. 
    </p> 
    <p>
    Phishing attacks are designed to appear to come from legitimate companies and individuals. 
    </p> 
    <p>
    Cybercriminals are continuously innovating and becoming more and more sophisticated. 
    </p> 
    <p>
    It only takes one successful phishing attack to compromise your network and steal your data, which is why it is always important to Think Before You Click.hich can compromise all types of data sources. Attacks can facilitate access to your online accounts and personal data, obtain permissions to modify and compromise connected systems--such as point of sale terminals and order processing systems--and in some cases hijack entire computer networks until a ransom fee is delivered. 
    </p> 
    <p>
    Sometimes hackers are satisfied with getting your personal data and credit card information for financial gain. In other cases, phishing emails are sent to gather employee login information or other details for use in more malicious attacks against a few individuals or a specific company. Phishing is a type of cyber attack that everyone should learn about in order to protect themselves and ensure email security throughout an organization. 
    </p> 
    <h4>How does phishing work? </h4>
    <p>
    Phishing starts with a fraudulent email or other communication designed to lure a victim. The message is made to look as though it comes from a trusted sender. If it fools the victim, he or she is coaxed into providing confidential information--often on a scam website. Sometimes malware is also downloaded onto the target's computer. 
    </p> 
    <p>
    Cybercriminals start by identifying a group of individuals they want to target. Then they create email and text messages that appear to be legitimate but actually contain dangerous links, attachments, or lures that trick their targets into taking an unknown, risky action. In brief: 
    </p>
    <ol>
    <li>Phishers frequently use emotions like fear, curiosity, urgency, and greed to compel recipients to open attachments or click on links. 
    </li>
    <li>Phishing attacks are designed to appear to come from legitimate companies and individuals. 
    </li>
    <li>Cybercriminals are continuously innovating and becoming more and more sophisticated. 
    </li>
    <li>It only takes one successful phishing attack to compromise your network and steal your data, which is why it is always important to Think Before You Click. 
    </li>
    </ol>
    `,
  },
];

function Announcements({
  filter,
  announcements,
  fetchAnnouncementsThunk,
  ...props
}) {
  // const [data, setData] = useState([]);
  const [data, handleData] = useState([]);

  const [currentPage, setcurrentPage] = useState(1);
  const itemsPerPage = 6;

  const pageNumberLimit = 6;
  const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(6);
  const [minPageNumberLimit, setminPageNumberLimit] = useState(0);

  useEffect(() => {
    fetchAnnouncementsThunk();
  }, []);
  useEffect(() => {
    const value = filter;
    setcurrentPage(1);

    handleData(
      MOCK_DATA.filter((p) => {
        //aici
        return (
          ` ${p.title} `.toLowerCase().indexOf(value.toLowerCase()) !== -1 ||
          ` ${p.title} `.toLocaleUpperCase().indexOf(value.toLowerCase()) !==
            -1 ||
          ` ${p.title} `.toLocaleUpperCase().indexOf(value.toLowerCase()) !== -1
        );
      })
    );
  }, [filter]);

  // const handleChangeFilterInput = (e) => {
  //   const { value } = e.target;
  //   setcurrentPage(1);

  //   handleData(
  //     announcements.filter((p) => {
  //       return (
  //         ` ${p.title} `.toLowerCase().indexOf(value.toLowerCase()) !== -1 ||
  //         ` ${p.title} `.toLocaleUpperCase().indexOf(value.toLowerCase()) !==
  //           -1 ||
  //         ` ${p.title} `.toLocaleUpperCase().indexOf(value.toLowerCase()) !== -1
  //       );
  //     })
  //   );
  // };

  const pages = [];
  for (let i = 1; i <= Math.ceil(data.length / itemsPerPage); i++) {
    pages.push(i);
  }

  useEffect(() => {
    handleData(MOCK_DATA); //aici
  }, [MOCK_DATA]);

  const handlePrevbtn = () => {
    setcurrentPage(currentPage - 1);

    if ((currentPage - 1) % pageNumberLimit == 0) {
      setmaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };

  const handleNextbtn = () => {
    setcurrentPage(currentPage + 1);

    if (currentPage + 1 > maxPageNumberLimit) {
      setmaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <AnnouncementsStyle>
      <h2 className="announcements-h2">Announcements</h2>
      {/* <input
        type="text"
        id="search"
        name="search"
        onChange={handleChangeFilterInput}
      ></input> */}

      <div className="announcements-container">
        {currentItems.map((item, index) => (
          <Link
            key={index}
            to={`/announcements/${item.id}`}
            state={item}
            style={{ textDecoration: "none" }}
          >
            <div className="announcements-card">
              <div className="announcements-card-image">
                <img width={300} height={200} src={item.img} alt="image card" />
              </div>
              <div className="announcements-card-tag">HOW TO</div>
              <div className="announcements-card-title">{item.title}</div>
              <div className="announcements-card-author">
                By Grigoras Nadia 2 weeks ago
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="pagination">
        <button
          className={`${
            currentPage == pages[0] || currentItems.length === 0
              ? "prev-disabled"
              : "prev"
          }`}
          onClick={handlePrevbtn}
          disabled={
            currentPage == pages[0] || currentItems.length === 0 ? true : false
          }
        >
          Previous posts
        </button>
        <button
          className={`${
            currentPage == pages[pages.length - 1] || currentItems.length === 0
              ? "prev-disabled"
              : "prev"
          }`}
          onClick={handleNextbtn}
          disabled={
            currentPage == pages[pages.length - 1] || currentItems.length === 0
              ? true
              : false
          }
        >
          Newer posts
        </button>
      </div>
    </AnnouncementsStyle>
  );
}

const mapStateToProps = (state) => ({
  announcements: state.announcementsState.announcements,
});

const mapDispatchToProps = {
  fetchAnnouncementsThunk: fetchAnnouncementsThunk,
};

export default connect(mapStateToProps, mapDispatchToProps)(Announcements);
