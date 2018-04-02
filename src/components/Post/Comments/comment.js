import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getPostById , getPostComments, voteForComment} from '../../../actions'
import { Button } from 'react-bootstrap'
import CreateComment from './CreateComment'


class Comment extends Component {

	state = {
		edit : false
	}

	toggleEdit = () => {
	    this.setState(prevState => ({edit: !prevState.edit}))
	  }

	render(){
		const { edit } = this.state
		const {comment , voteForComment} = this.props;
		console.log(' ## render comment ' + JSON.stringify(comment));
			 
			if (edit) {
			      return (
			        <CreateComment 
			          toggleEdit={{edit : this.state.edit}}
			          commentId={comment.id}
			          defaults={{body: comment.body, author: comment.author}}
			        />
			      )
			}else{

				return (
					<div key={comment.id}> 
						<p>Author: {comment.author}</p>
						<p>Body: {comment.body}</p>
						<p>Votes: {comment.voteScore}</p>
						<Button onClick={() => this.toggleEdit()} > Edit </Button>
   						<Button onClick={() => voteForComment(comment, 'upVote')}  > + </Button>
                        <Button onClick={() => voteForComment(comment, 'downVote')} > - </Button>
					</div>);
			}	
	}
}

const mapStateToProps = ({ post, comments}) => ({ post, comments})

export default connect(mapStateToProps, {voteForComment} )(Comment)