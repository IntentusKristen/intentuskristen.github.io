import React from 'react'
import { Banner } from '../components/Banner';
import { NavBarHome } from '../components/NavBarHome';


const Home = () => {
  return (
    <div className="App">
        <NavBarHome/>
        <Banner/>
    </div>
  )
}

export default Home