import './scss/App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import ContextProvider from "./context/Context"
import NavBar from "./components/NavBar"
import Body from './components/inicio/Body';
import Course from './components/cursos/Course';
import Proyects from './components/proyectos/Proyects';
import Perfil from './components/perfil/Perfil';
import CourseDetailContainer from './components/cursos/CourseDetailContainer'
import Footer from "./components/Footer"
import {BrowserRouter, Routes, Route} from "react-router-dom"

function App() {

      return (
        <>
          <ContextProvider>
            <BrowserRouter>
              <NavBar/>
              <Routes>
                <Route path='/' element={<Body/>}></Route>
                <Route path='/cursos' element={<Course/>}></Route>
                <Route path='/proyectos' element={<Proyects/>}></Route>
                <Route path='/perfil' element={<Perfil/>}></Route>
                <Route path='/cursos/:idCategory' element={<CourseDetailContainer/>}></Route>
              </Routes>
              <Footer/>
            </BrowserRouter>
          </ContextProvider>      
        </>
      )
    }


export default App
