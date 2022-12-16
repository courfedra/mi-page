import './scss/App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import NavBar from "./components/NavBar"
import Body from "./components/Body"
import Course from "./pages/Course"
import Projects from "./pages/Proyects"
import Perfil from "./pages/Perfil"
import CourseDetailContainer from "./components/CourseDetailContainer"
import Footer from "./components/Footer"
import {BrowserRouter, Routes, Route} from "react-router-dom"

function App() {

  return (
    <>
      <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path='/' element={<Body/>}></Route>
          <Route path='/cursos' element={<Course/>}></Route>
          <Route path='/proyectos' element={<Projects/>}></Route>
          <Route path='/perfil' element={<Perfil/>}></Route>
          <Route path='/course/:idCategory' element={<CourseDetailContainer/>}></Route>
        </Routes>
        <Footer/>
      </BrowserRouter>      
    </>
  )
}

export default App
