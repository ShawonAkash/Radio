import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css'
import Radio from './components/radio/Radio'
import Login from './components/Login/Login'

class App extends Component {
  render() {
    return (
      <Router>
        <div className='w-full h-[1200px] text-[#a2abbd] leading-[80px] bg-gradient-to-b from-[#21212b] to-[#21212b] pt-[20px]'>
          <Route path='/' component={Radio} exact />
          <Route path='/login' component={Login} />
        </div>
      </Router>
    )
  }
}

export default App
