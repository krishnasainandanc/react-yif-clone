import React from 'react'
import About from './Aboutus'
 import Work from './Ourwork'
 import OTeam from './OurTeam'
 import OEvent from './OurEvent'
import App from '../App'
import {Routes,Route} from "react-router-dom"
const MainApp = () => {
  return (
    <div>
        <Routes>
          <Route exact path="/" element={<App/>}/>
          <Route exact path="/OurTeam" element={<OTeam/>}/>
          <Route exact path="/OurWork" element={<Work/>}/>
          <Route exact path="/OurAbout" element={<About/>}/>
          <Route exact path="/OurEvent" element={<OEvent/>}/>
        </Routes>
    </div>
  )
}

export default MainApp