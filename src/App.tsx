import React from 'react'
import NavBar from './componet/NavBar/NavBar'
import Search from './componet/SearchDiv/Search'
import Value from './componet/ValueDiv/Value'
import Jobs from './componet/JobsDiv/Jobs'
import Footer from './componet/FooterDiv/Footer'

function App() {
  return (
    <div className='w-[85%] m-auto bg-white'>
      <NavBar/>
      <Search/>
      <Jobs/>
      <Value/>
      <Footer/>
    </div>

  )
}

export default App