import './scss/App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import ContextProvider from "./context/Context"
import { Context } from './context/Context';
import NavBar from "./components/NavBar"
import Body from "./components/Body"
import CourseDetailContainer from "./components/CourseDetailContainer"
import Footer from "./components/Footer"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import { useContext, useEffect } from 'react';

function App() {

      return (
        <>
          <ContextProvider>
            <BrowserRouter>
              <NavBar/>
              <Routes>
                <Route path='/' element={<Body/>}></Route>
                <Route path='/cursos/:idCategory' element={<CourseDetailContainer/>}></Route>
              </Routes>
              <Footer/>
            </BrowserRouter>
          </ContextProvider>      
        </>
      )
    }


export default App
