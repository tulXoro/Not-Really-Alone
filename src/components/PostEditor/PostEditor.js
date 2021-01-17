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

createPost = (e) => {
    e.preventDefault();
    if(this.state.newPostBody ==='') return;
    this.props.addPost(this.state.newPostBody);
    this.setState({
        newPostBody: '',
    });
}

onEnterPress = (e) => {
  if(e.keyCode == 13 && e.shiftKey == false) {
    if(this.state.newPostBody ==='') return;
    e.preventDefault();
    this.props.addPost(this.state.newPostBody);
    this.setState({
        newPostBody: '',
    });
  }
}

render() {
  return (
    <form ref={el => this.myFormRef = el} className="">
        <div className="panel panel-default post-editor">
            <div className="panel-body2">
                <button className="btn btn-success post-editor-button" onClick={this.createPost}>Post</button>
                <textarea className="form-control post-editor-input" value={this.state.newPostBody} onChange={this.handlePostEditorInputChange} placeholder="Describe a situation or give advice..." onKeyDown={this.onEnterPress}/>
                
            </div>
        </div>
      </form>
    )
  }
}

export default PostEditor;