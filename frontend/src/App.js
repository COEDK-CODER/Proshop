import React from 'react'
import Header from './Components/Header'
import { Container } from 'react-bootstrap'
import Footer from './Components/Footer'
import HomeScreen from './Screens/HomeScreen'

function App() {
  return (
    <>
      <Header />
      <main className='py-3'>
        <Container>
        <h1>Welcome to React</h1>
        <HomeScreen />
        </Container>
      </main>
      <Footer />
    </>
    
  )
}

export default App