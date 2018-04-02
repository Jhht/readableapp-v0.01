import { fetchCategories 
      , fetchAllPosts
      , fetchPostsByCategory
      , createPostAPI , editCommentAPI, fetchPostById, editPostAPI, votePostAPI, fetchPostComments
      , createCommentAPI,
      deletePostAPI ,voteCommentAPI, 
    deleteCommentAPI} from '../utils/api'
import api from '../utils/api'

export const GET_POSTS = 'GET_POSTS'
export const GET_POSTS_BY_CAT = 'GET_POSTS_BY_CAT'
export const GET_POST_BY_ID = 'GET_POST_BY_ID'
export const GET_CATEGORIES = 'GET_CATEGORIES'
export const CREATE_POST = 'CREATE_POST'
export const EDIT_POST = 'EDIT_POST'
export const VOTE_POST = 'VOTE_POST'
export const POST_SORT_ORDER = 'POST_SORT_ORDER'
export const GET_POST_COMMENTS = 'GET_POST_COMMENTS'
export const CREATE_COMMENT = 'CREATE_COMMENT'
export const EDIT_COMMENT = 'EDIT_COMMENT'
export const DELETE_POST = 'DELETE_POST'
export const DELETE_COMMENT = 'DELETE_COMMENT'
export const VOTE_COMMENT = 'VOTE_COMMENT'



//--------- Category actions

export const getAllCategories = () => dispatch => (
  fetchCategories().
    then(
      categories => {
        console.log('api categories ' + categories)
            dispatch({
              type: GET_CATEGORIES,
              categories           
            })
      })
)

//-------- Posts actions


export const getPosts = () => dispatch => (
  fetchAllPosts()
    .then(
      posts => {
            console.log('api posts ' + posts)
            dispatch({
              type: GET_POSTS,
              posts           
            })
          })
)

export const getPostsByCategory = ( category ) => dispatch => (
    fetchPostsByCategory( category )
     .then(
      posts => {
            dispatch({
              type: GET_POSTS_BY_CAT,
              posts           
            })
          })
)

export const getPostById= ( id ) => dispatch => (
    fetchPostById( id )
     .then(
      post => {
           console.log('api posts id ' + JSON.stringify(post))

            dispatch({
              type: GET_POST_BY_ID,
              post           
            })
          })
)

export const createPost = ( post ) => dispatch => (
  createPostAPI( post )
     .then(
      data => {
            console.log('api posts create' + JSON.stringify(data))
            dispatch({
              type: CREATE_POST,
              data           
            })
          })
)

export const editPost = ( post ) => dispatch => (
  editPostAPI( post )
     .then(
      data => {
            console.log('api posts create' + JSON.stringify(data))
            dispatch({
              type: EDIT_POST,
              data           
            })
          })
)

export const deletePost = ( id ) => dispatch => (
  deletePostAPI( id )
     .then(
      data => {
            console.log('api posts create' + JSON.stringify(data))
            dispatch({
              type: DELETE_POST,
              data           
            })
          })
)

export const voteForPost = (post, vote) => dispatch => (
     votePostAPI( post, vote )
     .then(
      data => {
            console.log('api posts votePost ' + JSON.stringify(data))
            dispatch({
              type: VOTE_POST,
              data           
            })
          })
)

export function postSortOrder(sortType) {
    console.log('action postSortOrder ' + JSON.stringify(sortType))

    return {
        type: POST_SORT_ORDER,
        sortType
    }
}


//---- comments actions ----

export const getPostComments = (postId) => dispatch => (
  fetchPostComments( postId)
  .then(
      data => {
            console.log('api posts getPostComments ' + JSON.stringify(data))
            dispatch({
              type: GET_POST_COMMENTS,
              data           
            })
          })

)

export const createComment = ( comment ) => dispatch => (
  createCommentAPI( comment )
     .then(
      data => {
            console.log('api comment create' + JSON.stringify(data))
            dispatch({
              type: CREATE_COMMENT,
              data           
            })
          })
)

export const editComment = ( comment ) => dispatch => (
  editCommentAPI( comment.id, comment.body, comment.timestamp )
     .then(
      data => {
            console.log('api comment edit' + JSON.stringify(data))
            dispatch({
              type: EDIT_COMMENT,
              data           
            })
          })
)



export const deleteComment = ( id ) => dispatch => (
  deleteCommentAPI( id )
     .then(
      data => {
            console.log('api comment delete' + JSON.stringify(data))
            dispatch({
              type: DELETE_COMMENT,
              data           
            })
          })
)

export const voteForComment = (comment, vote) => dispatch => (
     voteCommentAPI( comment, vote )
     .then(
      data => {
            console.log('api posts votePost ' + JSON.stringify(data))
            dispatch({
              type: VOTE_COMMENT,
              data           
            })
          })
)

















