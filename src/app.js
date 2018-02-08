import React from 'react'
import { Switch, Route } from 'react-router-dom'

import './stylesheets/index.scss'

import Home from './views/Home'

import Header from './components/Header'
import Footer from './components/Footer'

export default class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            {/* <Route component={NotFound} /> */}
          </Switch>
        </main>
        <Footer />
      </>
    )
  }
}
