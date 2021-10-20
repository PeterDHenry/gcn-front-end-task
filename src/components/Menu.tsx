import React from 'react';
import styled from 'styled-components';

const Panel = styled.div`
  width: 100%;
`;

const MenuHolder = styled.menu`
  background: #000;

  .stack-true & {
  }
`;
export const Menu = () => (
  <MenuHolder>
    <div className="columns title-bar" data-responsive-toggle="gcn-menu" data-hide-for="large">
      <button className="menu-icon" type="button" data-toggle="gcn-menu"></button>
    </div>
    <div className="columns shrink social-links--header-m">
      <ul className="social-links">
        <li>
          <a
            className="facebook"
            target="_blank"
            rel="noreferrer"
            href="https://facebook.com/globalcyclingnetwork"
          >
            <i className="fa fa-facebook"></i>
          </a>
        </li>
        <li>
          <a
            className="twitter"
            target="_blank"
            rel="noreferrer"
            href="https://twitter.com/gcntweet"
          >
            <i className="fa fa-twitter"></i>
          </a>
        </li>
        <li>
          <a
            className="instagram"
            target="_blank"
            rel="noreferrer"
            href="https://instagram.com/globalcyclingnetwork/?hl=en"
          >
            <i className="fa fa-instagram"></i>
          </a>
        </li>
        <li>
          <a
            className="google-plus"
            target="_blank"
            rel="noreferrer"
            href="https://plus.google.com/b/108391701717886882981/108391701717886882981/posts"
          >
            <i className="fa fa-google-plus"></i>
          </a>
        </li>
      </ul>
    </div>
  </MenuHolder>
);