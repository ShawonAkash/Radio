import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css'
import 'react-toastify/dist/ReactToastify.css'
import Radio from './components/radio/Radio'
import Login from './components/Login/Login'
import Register from './components/Register/Register'
import Navbar from './components/Navbar/Navbar'

class App extends Component {
  render() {
    return (
      <Router>
        <Navbar />
        <div className='w-full h-[1200px] text-[#a2abbd] leading-[80px] bg-gradient-to-b from-[#21212b] to-[#21212b] pt-[20px]'>
          <Route path='/register' component={Register} />
          <Route path='/login' component={Login} />
          <Route path='/' component={Radio} exact />
        </div>
      </Router>
    )
  }
}

export default App
