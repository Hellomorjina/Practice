import { Routes ,Route} from 'react-router'
import './App.css'
import './index.css'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Header from './componets/Header'
import Footer from './componets/Footer'
import Blog from './pages/Blog'

function App() {
  return (
    <>
    <Header/>
      <Routes>
           <Route path="/" element={<Home/>} />
           <Route path="/about" element={<About/>} />
           <Route path="/contact" element={<Contact/>  }/>
           <Route path="/blog" element={<Blog/>  }/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
