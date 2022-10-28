import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/pages/Home/Home'
import About from './components/pages/About'
import Contact from './components/pages/Contact'
import NewProject from './components/pages/NewProject/NewProject'
import Projects from './components/pages/Projects/Projects'

import Container from './components/layout/Container/Container'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'

function App() {
  return (
    // updates futuros virão nesta branch
    <Router>
      <Navbar />
      <Container customClass="min-height">
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/newproject" element={<NewProject />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
        </Routes>
      </Container>

      <Footer />
    </Router>
  )
}

export default App
