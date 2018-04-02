import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getPosts, getAllCategories, getPostsByCategory } from '../actions'
import Posts from './Posts'
import Categories from './Categories'


const ReadableIndex = (props) => (
  <div>
    <h1> Readable Index </h1>
    <Categories/>
    <Posts/>
  </div>
)

export default ReadableIndex
