import React from 'react'
import './App.css'
import Header from './components/Header'
import Home from './components/Home'
import Details from './components/Details'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'



const App = () => {
  const name = "sreejeshkumarm"
  return (
    <Router>
     <Header/>
     <Container>
     <Routes>
          <Route path= '/' element = { <Home />}/>
          <Route path = '/restaurant/:id' element= {<Details/>}/>
        </Routes>
     </Container>
      </Router>
  )
}

export default App