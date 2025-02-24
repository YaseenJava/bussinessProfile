import Home from "./assets/components/Home"
import Navbar from "./assets/components/Navbar"
import Skill from "./assets/components/Skill"
import { BrowserRouter as Router,Routes,Route } from "react-router-dom"


function App(){




  return<>

   <Router>
  < Navbar/>
   <Home/>
   
   <Routes>
   <Route path="/skill" element={<Skill/>}></Route>
   <Route path="/projects" element={<></>}></Route>

  </Routes>
  </Router>
  </> 
}
export default App