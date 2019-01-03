import React from 'react';
import classNames from 'classnames/bind';
import Header from './Header/Header';
import styles from './PageTemplate.scss';
import Footer from './Footer/Footer';

const cx = classNames.bind(styles);

const PageTemplate = () => (
  <div className={cx('page-template')}>
    <Header />
    <Footer />
  </div>
);

export default PageTemplate;