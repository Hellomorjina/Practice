import { Routes ,Route} from 'react-router'
import './App.css'
import './index.css'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Header from './componets/Header'
import Footer from './componets/Footer'
import Blog from './pages/Blog'
import Login from './componets/Login'
import Shop from './pages/Shop'
import Json from './pages/Json'

function App() {
  return (
    <>
    <Header/>
      <Routes>
           <Route path="/" element={<Home/>} />
           <Route path="/about" element={<About/>} />
           <Route path="/contact" element={<Contact/>  }/>
           <Route path="/blog" element={<Blog/>  }/>
           <Route path="/login" element={<Login/>  }/>
           <Route path="/shop" element={<Shop/>  }/>
           <Route path="/json" element={<Json/>  }/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
