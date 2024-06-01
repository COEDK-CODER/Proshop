import React from 'react'
import Header from './Components/Header'
import { Outlet } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Footer from './Components/Footer'
import HomeScreen from './Screens/HomeScreen'


function App() {
  return (
    <>
      <Header />
      <main className='py-3'>
        <Container>

        <Outlet />
        </Container>
      </main>
      <Footer />
    </>
    
  )
}

export default App