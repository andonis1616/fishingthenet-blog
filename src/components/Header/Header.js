import { connect } from 'react-redux';
import { HeaderStyle } from './Header.style';

function Header({ ...props }) {
  return (
    <HeaderStyle>
      <h1>Our Blog</h1>
      <div className="navigation">
        <div className="navigation-menu">
          <div className="navigation-menu-item">Announcements</div>
          <div className="navigation-menu-item">Events</div>
        </div>

        <div className="navigation-serch">
          <input></input>
        </div>
      </div>
    </HeaderStyle>
  );
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
