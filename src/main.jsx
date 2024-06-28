import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './store.js'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import StaffDetails from './Components/StaffDetails.jsx'
import StudentMark from './Components/StudentMark.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <Provider store={store}>
     <BrowserRouter>
        <Routes>
          <Route path='/' element={<App/>}>
             <Route path='/student' element={<StudentMark/>} />
             <Route path='/staff' element={<StaffDetails/>} />
          </Route>
          
          
        </Routes>
      </BrowserRouter>
     </Provider>
     
    
    
  </React.StrictMode>,
)
