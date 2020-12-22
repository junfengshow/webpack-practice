/**
 * 入口模版文件
 */
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Link, Redirect, Switch } from 'react-router-dom'

import '../main'
import '../global.scss'
const { routes } = require('./routes')

function renderRoutes (routes: any) {
  return routes.map((item: any) => {
  
    return (
      item.routes 
      ? React.createElement(
          item.component, 
          { path: item.path, key: item.path },
          renderRoutes(item.routes)
        )
      : item.redirect
      ? <Redirect 
        exact 
        key={item.redirect}
        from={item.path} 
        to={{pathname: item.redirect}}
      />
      : <Route 
        path={item.path} 
        key={item.path}
        component={item.component}
        exact
      />
    )
  })
}

class App extends React.Component {

  render () {
    return (
      <Router>
        <Switch>
          {renderRoutes(routes)}
        </Switch>
      </Router>
    )
  }
}

const node = document.getElementById('app')
ReactDOM.render(<App />, node)
if (module.hot) {
  module.hot.accept()
}

