import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import{editCommet} from '../../actions';


class EditComment extends Component {
 
  state = {
    author: '',
    body: '',
  };

   constructor(props){
    super(props)

    const {post, comment} = this.props;

    console.log('### didMount ' + post.title);
    var newState = {title: comment.editComment, body: comment.body};
    console.log('### didMount newState ' + JSON.stringify(newState));

    this.state  = (newState);
    console.log('### didMount state ' + JSON.stringify(this.state));

    this.handleSubmit = this.handleSubmit.bind(this);

  }


  onTitleChange = ({target}) => { 
    console.log(' ### onTitleChange ' + JSON.stringify(this.state))
    this.setState({title: target.value}
  )}

  onBodyChange = ({target}) => { 
    console.log(' ### onBodyChange ' + JSON.stringify(this.state))
    this.setState({body: target.value}
  )}

  handleSubmit(event){ 
   

    this.editComment();
  }



  editComment(){
        console.log(' ### onTitleChange ' + JSON.stringify(this.props.post))

    const {post, history} = this.props;
        console.log(' ### onTitleChange ' + JSON.stringify(this.props.post))

     const commentUpdate = {//testing
      id : comment.id,
      title : this.state.author,
      body : this.state.body
    }
    console.log(' ### onTitleChange commentUpdate ' + JSON.stringify(commentUpdate))

    this.props.editPost(commentUpdate).then(
      history.push("/")
    )
  }


  

  render() {

    console.log(' ### render ' + JSON.stringify(this.props))

    return (
      <form onSubmit={this.handleSubmit} onCancel={this.handleCancel}>
        <input type="text" name="title" placeholder="Title" value={this.state.title} onChange={this.onTitleChange} />
        <input type="text" name="body" placeholder="Body" value={this.state.body} onChange={this.onBodyChange} />
        <input type="submit" value="Submit"/>
        <input type="cancel" value="Cancel"/>
      </form>
    )
  }
}

const mapStateToProps = ({comment, post}) => ({ comment, post})


export default connect(mapStateToProps, {editPost })(EditComment)