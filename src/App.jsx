import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import React from 'react'
import Navbar from './components/Navbar'
import Introduction from './components/Introduction'
import PartnerCompanies from './components/PartnerCompanies'
import Data from './components/Data'
function App() {
  return (
   <> 
    <Navbar />
    <Introduction />
    <PartnerCompanies />
    <Data />

    </>
  )
}

export default App
