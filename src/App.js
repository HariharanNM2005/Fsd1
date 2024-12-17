import  React from 'react'
import Employee from './Employee'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Detail from './Detail'



const App = () => {
  return (
    <BrowserRouter>
    <Routes> 
    <Route path="/" element={<Employee/>}></Route>
    <Route path='/detail' element={<Detail/>} ></Route>
    
    
    </Routes>
    </BrowserRouter>
  )
}

export default App