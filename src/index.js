import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { store } from './store'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { ThemeProvider, jss } from 'react-jss'
import theme from './theme'
import preset from 'jss-preset-default'
import reset from 'reset-jss'
import WebFont from 'webfontloader'

WebFont.load({
  google: {
    families: ['Ubuntu:400,700']
  }
})

jss.setup(preset())
jss.createStyleSheet(reset).attach()
jss.createStyleSheet({
  '@global *': {
    boxSizing: 'border-box'
  }
}).attach()

class Index extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </ThemeProvider>
      </Provider>
    )
  }
}

render(<Index />, document.querySelector('#app'))
