import React, { Component } from 'react';
import { fetchCategories , fetchAllPosts} from '../utils/api'
import Categories from './Categories'
import Posts from './Posts'
import Post from './Post'
import { Route, Switch } from 'react-router-dom'
import ReadableIndex from './ReadableIndex'
import { Link } from 'react-router-dom'
import CreatePost from './CreatePost'
import CreateEditPost from './EditPost'
import { connect } from 'react-redux'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import { createStore, applyMiddleware} from 'redux'
import reducer from '../reducers'
import thunk from 'redux-thunk'


class App extends Component {


  render() {


    return (
      <BrowserRouter>
        <Switch>
               <Route exact path ='/'  component={ReadableIndex}/>
                <Route exact path='/new' component={CreatePost} />
                <Route exact path='/edit/:postId' component={CreateEditPost} />     
                <Route exact path='/:category' component={Posts} />
                <Route exact path='/:category/:postId' component={Post} />
        </Switch>
      </BrowserRouter>
    );
  }

}




export default App
