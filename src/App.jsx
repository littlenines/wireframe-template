import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Header from 'src/components/Layout/Header';
import Footer from 'src/components/Layout/Footer';

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
