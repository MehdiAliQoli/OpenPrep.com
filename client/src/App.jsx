import Homepage from "./Pages/Homepage"
import Layout from "./Pages/Layout";
import About from "./Pages/About";
import Exam from "./Pages/All_Courses/Exam";
import Auth from "./Pages/auth/Auth";
import Dashboard from "./Pages/Dashboard";
import {Routes , Route} from "react-router-dom";

function App() {

  return (
    <>
    <Routes>
      <Route element={<Layout />}>

        <Route path="/" element = {<Homepage/>} />
        <Route path="/about" element = {<About/>} />
        <Route path="/dashboard" element = {<Dashboard/>} />
        <Route path="/courses" element = {<Exam/>} />
        <Route path="/auth" element = {<Auth/>} />
      </Route>
    </Routes>

    
    </>
  )
}

export default App
