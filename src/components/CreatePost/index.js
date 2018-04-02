import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import{createPost} from '../../actions';
import {FormGroup, FormControl, ControlLabel, Button, ButtonGroup} from 'react-bootstrap';


class PostForm extends Component {
 
  initialState = {
    author: '',
    category: 'select',
    title: '',
    body: '',
  };


  // initialState, handlers
  constructor(props){

    super(props)
    this.state = this.initialState;
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  // update state whenever input text is changed
  handleChange(event) {
    const {name, value} = event.target;
    this.setState({ [name]: value });
  }

  // handle form submission
  handleSubmit(event) {
    event.preventDefault();

    this.createPost();
    
    // call onSubmit function (if available)
    const {onSubmit} = this.props;
    if (onSubmit) {
      onSubmit();
    }
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
  createPost() {
    const {author, category, title, body} = this.state;
    const { history } = this.props;


    const post = {//testing
      id : guid(),
      author : author,
      category : 'udacity',
      title : title,
      body : body,
      timestamp : Date.now()
    }

    this.props.createPost( post ).then( 
      history.push(`/`)
    );

  }


  render() {
    const {author, category, title, body} = this.state
    const {categories} = this.props;

    return (
      <form onSubmit={this.handleSubmit}>
        <FormGroup controlId="postAuthor">
          <ControlLabel>Author</ControlLabel>
          <FormControl type="text" name="author" placeholder="Author Name" value={author} onChange={this.handleChange}/>
        </FormGroup>
        <FormGroup controlId="postTitle">
          <ControlLabel>Title</ControlLabel>
          <FormControl type="text" name="title" placeholder="Title" value={title} onChange={this.handleChange}/>
        </FormGroup>
        <FormGroup controlId="postBody">
          <ControlLabel>Body</ControlLabel>
          <FormControl componentClass="textarea" name="body" placeholder="Body" value={body} onChange={this.handleChange}/>
        </FormGroup>
        <Button bsStyle="primary" type="submit" >Create Post</Button>
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

const mapStateToProps = ({categories, posts}) => ({ categories, posts})
const mapDispatchToProps = {createPost}


export default connect(mapStateToProps, mapDispatchToProps)(PostForm)