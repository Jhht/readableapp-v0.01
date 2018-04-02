import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import{editPost} from '../../actions';
import {FormGroup, FormControl, ControlLabel, Button, ButtonGroup} from 'react-bootstrap';



class EditPost extends Component {
 
  state = {
    title: '',
    body: '',
  };

   constructor(props){
    super(props)

    const {post} = this.props;

    console.log('### didMount ' + post.title);
    var newState = {title: post.title, body: post.body};
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
   

    this.editPost();
  }



  editPost(){
        console.log(' ### onTitleChange ' + JSON.stringify(this.props.post))

    const {post, history} = this.props;
        console.log(' ### onTitleChange ' + JSON.stringify(this.props.post))

     const postUpdate = {//testing
      id : post.id,
      title : this.state.title,
      body : this.state.body
    }
    console.log(' ### onTitleChange postUpdate ' + JSON.stringify(postUpdate))

    this.props.editPost(postUpdate).then(
      history.push("/")
    )
  }


  

  render() {

    console.log(' ### render ' + JSON.stringify(this.props))

    return (
      <form onSubmit={this.handleSubmit} onCancel={this.handleCancel}>
        <input type="text" name="title" placeholder="Title" value={this.state.title} onChange={this.onTitleChange} />
        <input type="text" name="body" placeholder="Body" value={this.state.body} onChange={this.onBodyChange} />
        <Button type="submit" value="Submit"/>
        <Button type="cancel" value="Cancel"/>
      </form>
    )
  }
}

const mapStateToProps = ({categories, post}) => ({ categories, post})


export default connect(mapStateToProps, {editPost })(EditPost)