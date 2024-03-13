import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AboutMe from './components/aboutMe.jsx'
import Projects from './components/projects.jsx'
import Myportfolio from './myportfolio'
import Nav from './components/nav.jsx'



export default function App(){

    return(
        <BrowserRouter>
        <Routes>
        <Route path='/' element={<Nav/>}>
        <Route path='/' index element={<Myportfolio/>}/>
        <Route path='aboutMe' element={<AboutMe/>}/>
        <Route path='projects' element={<Projects/>}/>
        </Route>
        </Routes>
        </BrowserRouter>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
<React.StrictMode>
<App/>
</React.StrictMode>
)
