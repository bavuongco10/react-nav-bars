import React, { Component } from 'react';
import FaHome from 'react-icons/lib/fa/home';
import FaEnvelope from 'react-icons/lib/fa/envelope-o';
import FaBell from 'react-icons/lib/fa/bell-o';
import FaTwitter from 'react-icons/lib/fa/twitter';
import FaSearch from 'react-icons/lib/fa/search';
import FaUser from 'react-icons/lib/fa/user';

import './TwitterBar.component.less';

class TwitterBar extends Component {
  render() {
    return (
      <ul className="twitter" role="navigation">
        <li className="twitter__home"><FaHome/><span>Home</span></li>
        <li className="twitter__notification"><FaBell/><span>Notification</span></li>
        <li className="twitter__message"><FaEnvelope/><span>Message</span></li>
        <li className="twitter__icon"><FaTwitter/></li>
        <li className="twitter__search">
          <form>
            <input type="text"/>
          </form>
          <FaSearch/>
        </li>
        <li className="twitter_user"><FaUser/></li>
        <li className="twitter_tweet"><button>tweet</button></li>
      </ul>
    );
  }
}

export default TwitterBar;
