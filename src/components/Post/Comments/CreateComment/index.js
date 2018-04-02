import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import{createComment , editComment} from '../../../../actions';
import {FormGroup, FormControl, ControlLabel, Button, ButtonGroup} from 'react-bootstrap';


class CreateComment extends Component {
 
  initialState = {
    author: '',
    body: '',
  };


  // initialState, handlers
  constructor(props){

    super(props)
    this.state = this.initialState;
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    const { defaults , toggleEdit} = this.props;

    if(defaults){
      var newState = {author: defaults.author, body: defaults.body};
      console.log('### didMount newState ' + JSON.stringify(toggleEdit));

      this.state  = (newState);
      console.log('### didMount state ' + JSON.stringify(this.state));
    }
  }


  // update state whenever input text is changed
  handleChange(event) {
    const {name, value} = event.target;
    this.setState({ [name]: value });
  }

  // handle form submission
  handleSubmit(event) {
    event.preventDefault();
    console.log('handle submit comment')
    this.createComment();
    

  }

  // handle cancellation
  handleCancel() {
    // call onCancel function (if available)
    const {onCancel} = this.props;
    if (onCancel) {
      onCancel();
    }
  }

  // create a new post
  createComment() {
    const {author, body, edit} = this.state;
    const { history, post, toggleEdit } = this.props;

    console.log(' creating comment with post --- ' + post.id)

    const commentUpdate = {//testing
      id : guid(),
      author : author,
      body : body,
      timestamp : Date.now(),      
      parentId : post.id,
    }

    if(toggleEdit){
      console.log('## editing comment ' + JSON.stringify(commentUpdate))
      this.props.editComment( commentUpdate )

    }else{
      this.props.createComment( commentUpdate )
    }

  }


  render() {
    const {author, body} = this.state
    const {comment} = this.props;

    return (
      <form onSubmit={this.handleSubmit}>
        <h4> Create a new comment! </h4>
        <FormGroup controlId="postAuthor">
          <ControlLabel>Author</ControlLabel>
          <FormControl type="text" name="author" placeholder="Author Name" value={author} onChange={this.handleChange}/>
        </FormGroup>
        <FormGroup controlId="postBody">
          <ControlLabel>Body</ControlLabel>
          <FormControl componentClass="textarea" name="body" placeholder="Body" value={body} onChange={this.handleChange}/>
        </FormGroup>
        <Button bsStyle="primary" type="submit" >Save</Button>
        <Button bsStyle="primary" type="button" >Cancel</Button>
      </form>
    )
  }
}

export function guid() {
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }
    return s4() + s4() + s4() + s4() + s4();
  }


const mapStateToProps = ({post, comment}) => ({ post, comment})


export default connect(mapStateToProps, {createComment, editComment})(CreateComment)