import React from 'react'
import { connect } from 'react-redux'
import { boundItemsLoadRequest } from '../../reducers/items'

class Home extends React.Component {
  componentWillMount() {
    boundItemsLoadRequest()
  }

  render() {
    if (this.props.items.errorMessage) {
      return this.props.items.errorMessage
    }

    const mappedItems = this.props.items.map((item, index) => (
      <li key={index}>{item}</li>
    ))
    return <ul>{mappedItems}</ul>
  }
}

const mapStateToProps = state => {
  return {
    items: state.items
  }
}

export default connect(mapStateToProps)(Home)
