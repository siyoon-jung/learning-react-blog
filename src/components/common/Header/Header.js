import React from 'react';
import {Link} from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Header.scss';

const cx = classNames.bind(styles);

const Header = () => (
  <header className={cx('header')}>
    <div className={cx('header-content')}>
      <div className={cx('brand')}>
        <Link to="/">reactblog</Link>
      </div>
      <div className={cx('right')}>
        right
      </div>
    </div>
  </header>
);

export default Header;