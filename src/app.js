import React from 'react'
import { Switch, Route } from 'react-router-dom'
import injectSheet from 'react-jss'
import Home from './views/Home'

import Header from './components/Header'

const styles = theme => ({
  app: {
    display: 'grid',
    justifyContent: 'center',
    gridTemplateColumns: '1fr auto 1fr',
    gridTemplateRows: 'auto 1fr',
    gridTemplateAreas: `
      'header header header'
      '. main .'
    `
  },
  main: {
    gridArea: 'main'
  }
})

@injectSheet(styles)
export default class App extends React.Component {
  render() {
    return (
      <div className={this.props.classes.app}>
        <Header />
        <main className={this.props.classes.main}>
          <Switch>
            <Route exact path="/" component={Home} />
            {/* <Route component={NotFound} /> */}
          </Switch>
        </main>
      </div>
    )
  }
}
