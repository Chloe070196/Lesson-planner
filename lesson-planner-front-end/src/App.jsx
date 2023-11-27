import {Routes, Route, Link} from 'react-router-dom'
import './App.css'
import { ViewCurrentLp, Dashboard, CreateLp } from './pages'
import { lessonFrameworks, lessonStages } from './services/api-requests'


function App() {


  return (
    <>
      <aside>
        <Link to="/">Home</Link>
        <Link to="/create">Plan</Link>
        <Link to="/view">Teach</Link>
      </aside>
      <Routes>
        <Route path="/" element={<Dashboard />}></Route>
        <Route path="/view" element={<ViewCurrentLp />}></Route>
        <Route path="/create" element={<CreateLp  lessonFrameworks={lessonFrameworks} lessonStages={lessonStages}/>}></Route>
      </Routes>
    </>
  )
}

export default App
