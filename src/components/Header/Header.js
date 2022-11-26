import { connect } from "react-redux";
import Search from "../../utils/Icons/Search";
import Fish from "../../utils/Icons/Fish";
import { HeaderStyle } from "./Header.style";
import { Link } from "react-router-dom";
import { useState } from "react";

function Header({ handleFilter, ...props }) {
  const [title, setTitle] = useState("Our Blog");

  const handleChangeTitle = (path) => {
    if (path === "about-us") setTitle("About Us");
    if (path === "announcements") setTitle("Our Blog");
  };

  return (
    <HeaderStyle>
      <Link to="">
        <Fish></Fish>
      </Link>
      <h1>{title}</h1>

      <div className="navigation">
        <div className="navigation-menu">
          <Link
            onClick={() => handleChangeTitle("announcements")}
            to="/announcements"
            className="navigation-menu-item"
          >
            Announcements
          </Link>
          <Link
            onClick={() => handleChangeTitle("about-us")}
            to="/about-us"
            className="navigation-menu-item"
          >
            About Us
          </Link>
        </div>

        <div className="navigation-serch">
          <input placeholder="Search" onChange={(e) => handleFilter(e)}></input>
          <Search></Search>
        </div>
      </div>
    </HeaderStyle>
  );
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
