import './App.css'
import BaseLayout from './layout/BaseLayout'
import { BrowserRouter } from 'react-router-dom'

function App() {

  return (
    <BrowserRouter basename={"webpage"}>
        <BaseLayout />
    </BrowserRouter>
  )
}

export default App
