import React, { Component } from 'react'
import { connect } from 'react-redux'
import Comment from './comment'
import _ from 'lodash';
import CreateComment from './CreateComment'
import { arrayFromObject} from '../../../utils/helpers.js'
import {deleteComment} from '../../../actions'
import { Button } from 'react-bootstrap'



class Comments extends Component {

	componentDidMount(){
		console.log('didMount ' + JSON.stringify(this.props))
	}

	render () {
	    const {comments, post} = this.props
	    const commentCount = comments.length
	    const orderComments = arrayFromObject(comments)

	    console.log(' -- render comments ' + JSON.stringify(comments))
	    return (
	    	<div>
		     	<h3> Comments </h3>
		        {commentCount === 0 && (
		          <div>No comments yet. Be the first, add one below :)</div>
		        )} 
	    	<ol>
	    		{orderComments.map((comment) => (
	    			<li key={comment.id}>
         			<Comment key={comment.id} comment={comment} />
         			<Button onClick={ () => deleteComment(comment.id)} > Del </Button>

         			</li>
        		))}	  
        		< CreateComment post={post} />   
        	</ol>  
	        </div>
	    )
	}
}



const mapStateToProps = ({comments, post}) => ({comments, post})
export default connect(mapStateToProps)(Comments)