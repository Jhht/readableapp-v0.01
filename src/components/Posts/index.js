import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { getPosts, getPostsByCategory, postSortOrder , voteForPost, deletePost} from '../../actions'
import { connect } from 'react-redux'
import {arrayFromObject } from '../../utils/helpers'
import { Link } from 'react-router-dom'
import _ from 'lodash';
import { Button } from 'react-bootstrap'


class Posts extends Component{

  componentDidMount(){
     if(this.props.match != null){
        const { category } = this.props.match.params;
        
        console.log('## DidUpdate ReadableIndex category ' + category);
        
        if( category != null){
          this.props.getPostsByCategory(category);
        }else{
          this.props.getPosts();
        }
      }else{
        this.props.getPosts();
      }
  }


  render(){


    const { posts, match, sortPostsBy, voteForPost, postOrder, deletePost} = this.props

    const filteredPosts = Object.values(posts).filter(post => !post.deleted );

     filteredPosts.sort(function(a, b) {
        if (postOrder === 'timestamp') {
          return (a.timestamp > b.timestamp)
            ? -1
            : 1
        } else {
          return (a.voteScore > b.voteScore)
            ? -1
            : 1
        }
      })


   //console.log('   this post ' + JSON.stringify(postArray))
   console.log(' ---- RENDER POST ' + JSON.stringify(filteredPosts))

    return(
      <div className="Posts">
            <h1> Posts </h1>
             <select onChange={(event) => this.props.postSortOrder({sortBy : event.target.value})}>
                    <option value='voteScore'>Votes</option>
                    <option value='timestamp'>Date</option>
                  </select>
            <ol >
              {filteredPosts.map((post) =>(
                 <li key={post.id}>
                    <p>{post.title} Votes: {post.voteScore} -- 
                        <Button onClick={() => voteForPost(post, 'upVote')}  > + </Button>
                        <Button onClick={() => voteForPost(post, 'downVote')} > - </Button>
                        <Button onClick={() => deletePost(post.id)} > Del </Button>
                       <Link to={`/${post.category}/${post.id}`}>Detail</Link>
                    </p>
                 </li>
              ))}
              </ol>
      </div>
    )    
  }
}

const mapStateToProps = ({ postOrder, posts}) => ({ postOrder,posts})

 
export default connect(mapStateToProps, { getPosts, getPostsByCategory, postSortOrder, voteForPost, deletePost })(Posts)
