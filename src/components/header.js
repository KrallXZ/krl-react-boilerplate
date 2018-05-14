import React from 'react'
import injectSheet from 'react-jss'

const styles = theme => ({
  header: {
    background: theme.backgroundColor,
    padding: '50px',
    gridArea: 'header'
  }
})

@injectSheet(styles)
export default class Header extends React.Component {
  render () {
    return <header className={this.props.classes.header}>header goes here</header>
  }
}
