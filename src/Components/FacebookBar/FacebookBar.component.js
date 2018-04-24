import React, { Component } from 'react';
import FaFacbook from 'react-icons/lib/fa/facebook-official';
import FaSearch from 'react-icons/lib/fa/search';
import FaUser from 'react-icons/lib/fa/user';
import FaUserTimes from 'react-icons/lib/fa/user-plus';
import FaCommenting from 'react-icons/lib/fa/commenting';
import FaGlobe from 'react-icons/lib/fa/globe';
import FaQuestionCircle from 'react-icons/lib/fa/question-circle';
import FaCaretDown from 'react-icons/lib/fa/caret-down';

import './FacebookBar.component.less';

class FacebookBar extends Component {
  render() {
    return (
      <ul className="facebook" role="navigation">
        <li className="facebook__icon"><FaFacbook/></li>
        <li className="facebook__search">
          <form><input type="text" placeholder="Search"/></form>
          <FaSearch/>
        </li>
        <li className="facebook__user"><FaUser/><span>Vuong</span></li>
        <li className="facebook__home"><span>Home</span></li>
        <li className="facebook__friends"><FaUserTimes/></li>
        <li className="facebook__chat"><FaCommenting/></li>
        <li className="facebook_notifications"><FaGlobe/></li>
        <li className="facebook__help"><FaQuestionCircle/></li>
        <li className="facebook__tools"><FaCaretDown/></li>
      </ul>
    );
  }
}

export default FacebookBar;
