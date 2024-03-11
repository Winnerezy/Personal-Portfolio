import React from 'react'
import ReactDOM from 'react-dom/client'
import Nav from './components/nav.jsx'
import './index.css'
import AboutMe from './components/aboutMe.jsx'
import CardList from './components/cardList.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <Nav/>
   <AboutMe/>
   <CardList/>
  </React.StrictMode>,
)
