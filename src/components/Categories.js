import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getAllCategories} from '../actions'


class Categories extends Component {

  componentDidMount(){
    this.props.getAllCategories();
  }

  render() {  
    console.log('cats ' + JSON.stringify(this.props.categories))
    const { categories } = this.props
    const list = this.props.categories.map((categorie) => {
      return (
        <li key={categorie.name}>
          <Link to={`/${categorie.name}`}>{categorie.name}</Link>
        </li>
     
      )
    })
    
    return(
      <div className="Categories">
        <ul className="Categories-List">
          <All />
          {list}
          <li>
            <Link to={`/new`}>Add new Post </Link>
          </li>
        </ul>
      </div>
    )
  }
}

const All = () => {
  return(
    <li key='All'>
      <Link to='/'>All</Link>
    </li>
  )
}

const mapStateToProps = ({ categories}) => ({ categories})

export default connect(mapStateToProps, {getAllCategories} )(Categories)