import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import CommentBox from './CommentBox'

ReactDOM.render(
  <CommentBox url="comments.json" />,
  document.getElementById('root')
);

