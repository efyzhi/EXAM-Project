import {Routes, Route, BrowserRouter, Link} from "react-router-dom"

import './App.css'
import Counter from "./Comps/Counter"
import CounterState from "./Comps/CounterState"
import Layout from "./Comps/Layout"


export default function App() {
  return (
    <> 
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
          <Route index element={<Counter/>}/>
          <Route path="useState" element={<CounterState/>}/>
          </Route>
          
         
        </Routes>
        
      </BrowserRouter>
    </>
  )
}
