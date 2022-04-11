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
          <Route exact path="/react-yif-clone" element={<App/>}/>
          <Route exact path="/react-yif-clone/OurTeam" element={<OTeam/>}/>
          <Route exact path="/react-yif-clone/OurWork" element={<Work/>}/>
          <Route exact path="/react-yif-clone/OurAbout" element={<About/>}/>
          <Route exact path="/react-yif-clone/OurEvent" element={<OEvent/>}/>
        </Routes>
    </div>
  )
}

export default MainApp