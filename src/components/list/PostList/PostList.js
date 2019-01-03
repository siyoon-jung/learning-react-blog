import React from 'react';
import styles from './PostList.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const PostItem = () => {
  // 변수나 함수 선언 가능, 이벤트 처리 등이 필요할 때 이런 형태로 컴포넌트 선언
  return (
    <div className={cx('post-item')}>
      <h2><a>title</a></h2>
      <div className={cx('date')}>2019-01-03</div>
      <p>content</p>
      <div className={cx('tags')}>
        <a>#tag</a>
        <a>#tag</a>
        <a>#tag</a>
      </div>
    </div>
  )
}

// return을 생략한 형태 : ()로 묶인 객체를 통으로 반환. ES6
// 숫자 하나만 넘길때는 () 생략 가능
// const PostList = () => 5 
const PostList = () => (
  <div className={cx('post-list')}>
    <PostItem />
    <PostItem />
    <PostItem />
    <PostItem />
  </div>
)

export default PostList;
