import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import  Comments  from './Comments'
import { getPostById , getPostComments, deletePost} from '../../actions'
import { Button } from 'react-bootstrap'



class Post extends Component {

	componentDidMount(){
		console.log('## didMount Post ' + this.props.match.params);
		this.props.getPostById(this.props.match.params.postId);
		this.props.getPostComments(this.props.match.params.postId);
	}

	 onDeletePost(){
		const {history, deletePost, post} = this.props;

		this.deletePost(post.id)
		history.push('/')

	}

	render(){
		const {post, history, deletePost} = this.props;
		console.log('Post delete ' + JSON.stringify(post))
	
			if( post.id === ''){
				return (
					<div>Post doesnt exists.</div>);
					
			}else{
			return (
				<div key={post.id}> 
					<p>Title: {post.title}</p>
					<p>Author: {post.author}</p>
					<p>Category: {post.category}</p>
					<p>Body: {post.body}</p>
					<Link to={`/edit/${post.id}`}>Edit Post </Link>
					 <Button onClick={ () => deletePost(post.id)} > Del </Button>

					<Comments key={post.id} post={post}/>
				</div>
				);
			}
	}
}

const mapStateToProps = ({ comments, post}) => ({ comments,post})

export default connect(mapStateToProps, {getPostById, getPostComments, deletePost} )(Post)