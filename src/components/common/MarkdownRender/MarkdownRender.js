import React, { Component } from 'react';
import styles from './MarkdownRender.scss';
import classNames from 'classnames/bind';

import marked from 'marked';
// prism 관련 코드 불러오기
import Prism from 'prismjs';
import 'prismjs/themes/prism-okaidia.css';
// 지원할 코드 형식들을 불러옵니다
// http://prismjs.com/#languages-list 참조
import 'prismjs/components/prism-bash.min.js';
import 'prismjs/components/prism-javascript.min.js'
import 'prismjs/components/prism-jsx.min.js';
import 'prismjs/components/prism-css.min.js';


const cx = classNames.bind(styles);


class MarkdownRender extends Component {
  state = {
    html: ''
  }

  renderMarkdown = () => {
    const { markdown } = this.props;

    if(!markdown){
      this.setState({html:''});
      return;
    }
    this.setState({
      html: marked(markdown, {
        breaks: true,
        sanitize: true
      })
    })
  }

  constructor(props){
    super(props);
    const {markdown} = props;
    this.state={
      html: markdown ? marked(props.markdown, {breaks:true, sanitize:true}) : ''
    }
  }

  componentDidUpdate(prevProps, prevState){
    if(prevProps.markdown !== this.props.markdown){
      this.renderMarkdown();
    }
    if(prevState.html !== this.state.html){
      Prism.highlightAll();
    }
  }

  render() {
    const {html} = this.state;

    const markup = {
      __html: html
    }

    return (
      <div className={cx('markdown-render')} dangerouslySetInnerHTML={markup} />
    );
  }
}

export default MarkdownRender;