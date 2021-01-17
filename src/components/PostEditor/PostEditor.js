import React, { Component } from 'react';
import './PostEditor.css';

class PostEditor extends Component {
  constructor(props) {
    super(props);

  this.state = {
    newPostBody: '',
  };

  this.handlePostEditorInputChange = this.handlePostEditorInputChange.bind(this);
  this.createPost = this.createPost.bind(this);
  this.onEnterPress = this.onEnterPress.bind(this);
}

handlePostEditorInputChange(ev) {
  this.setState({
    newPostBody: ev.target.value
  });
}

createPost() {
  this.props.addPost(this.state.newPostBody);
  this.setState({
    newPostBody: '',
  });
}

onEnterPress = (e) => {
  if(e.keyCode == 13 && e.shiftKey == false) {
    e.preventDefault();
    this.createPost();
  }
}

render() {
  return (
    <form ref={el => this.myFormRef = el} className="">
        <div className="panel panel-default post-editor">
        <div className="panel-body2">
            <textarea className="form-control post-editor-input" value={this.state.newPostBody} onChange={this.handlePostEditorInputChange} placeholder="Describe a situation or give advice..." onKeyDown={this.onEnterPress}/>
            <button className="btn btn-success post-editor-button" onClick={this.createPost} >Post</button>
            
            </div>
        </div>
      </form>
    )
  }
}

export default PostEditor;