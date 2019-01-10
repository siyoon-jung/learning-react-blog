import React from 'react';
import styles from './Pagination.scss';
import classNames from 'classnames/bind';
import Button from 'components/common/Button';

const cx = classNames.bind(styles);

const Pagination = () => (
  <div className={cx('pagination')}>
    <Button disabled>
      prev page
    </Button>  
    <div className={cx('number')}>
      page 1
    </div>
    <Button>
      next page
    </Button>

  </div>
);

export default Pagination;