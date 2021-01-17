import React from 'react';
import './Post.css'

const Post = (props) => (
  <div className="panel panel-default post-body">
    <div className="panel-body">
        <div className="post">
            {props.postBody}
        </div>
    </div>
  </div>
);

export default Post;