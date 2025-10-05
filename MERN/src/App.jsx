import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Loginpage from './components/Loginpage'
import Quizapp from './components/Quizapp'
import Mongodbq from './components/Mongodbq'
import Expressq from './components/Expressq'
import Reactq from './components/Reactq'
import Nodejsq from './components/Nodejsq'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Loginpage />} />
          <Route path="/quizapp" element={<Quizapp />} />
          <Route path='/mongodb' element={<Mongodbq/>}/>
          <Route path='/express' element={<Expressq/>}/>
          <Route path='/react' element={<Reactq/>}/>
          <Route path='/nodejs' element={<Nodejsq/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
