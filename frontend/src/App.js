import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Register from './screens/Register'
import Login from './screens/Login'
import Secret from './screens/Secret'

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/secret' component={Secret}/>
        <Route path='/login' component={Login}/>
        <Route path='/register' component={Register}/>
      </Switch>
    </BrowserRouter>
  )
}

export default App
